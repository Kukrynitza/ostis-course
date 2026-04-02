import { nanoid } from 'nanoid';
import {
  ScAddr,
  ScConstruction,
  ScEventSubscriptionParams,
  ScEventType,
  ScTemplate,
  ScType,
} from 'ts-sc-client';
import { client, scUtils } from '@api/sc';
import { snakeToCamelCase } from '@utils';

type ScTemplateParamValue = string | ScAddr | ScType;
type ScTemplateParam = [ScTemplateParamValue, string] | ScTemplateParamValue;

export class Action {
  public actionNodeAlias: string;

  private action: string;
  private template: ScTemplate;
  private actionNodeInitiated: Promise<void>;
  private onFirstTripleAdded: () => void;

  constructor(action: string) {
    this.actionNodeAlias = nanoid(10);
    this.action = action;
    this.template = new ScTemplate();

    this.onFirstTripleAdded = () => undefined;
    this.actionNodeInitiated = new Promise((resolve) => (this.onFirstTripleAdded = resolve));

    this.addFirstTriple();
  }

  private addFirstTriple = async () => {
    const { action } = await scUtils.searchKeynodes('action');
    this.onFirstTripleAdded();
    this.template.triple(action, ScType.VarPermPosArc, [ScType.VarNode, this.actionNodeAlias]);
  };

  private initiateAction = async (actionNode: ScAddr) => {
    const { actionInitiated } = await scUtils.searchKeynodes('action_initiated');

    const construction = new ScConstruction();
    construction.generateConnector(ScType.ConstPermPosArc, actionInitiated, actionNode);
    client.generateElements(construction);
  };

  private subscribeToResult = async (actionNode: ScAddr, onResponse: () => void) => {
    const { actionFinished } = await scUtils.searchKeynodes('action_finished');
    const onActionFinished = (
      _subscribedAddr: ScAddr,
      _arc: ScAddr,
      anotherAddr: ScAddr,
      eventId: number,
    ) => {
      if (anotherAddr.isValid() && anotherAddr.equal(actionFinished)) {
        client.destroyElementaryEventSubscriptions(eventId);
        onResponse();
      }
    };

    const eventParams = new ScEventSubscriptionParams(
      actionNode,
      ScEventType.AfterGenerateIncomingArc,
      onActionFinished,
    );

    client.createElementaryEventSubscriptions(eventParams);
  };

  private searchResultCircuit = async (actionNode: ScAddr) => {
    const { nrelResult } = await scUtils.searchKeynodes('nrel_result');

    const circuitAlias = '_circuit';
    const template = new ScTemplate();

    template.quintuple(
      actionNode,
      ScType.VarCommonArc,
      [ScType.VarNodeStructure, circuitAlias],
      ScType.VarPermPosArc,
      nrelResult,
    );
    const result = await client.searchByTemplate(template);

    if (result.length) return result[0].get(circuitAlias);
    return null;
  };

  private generateAction = async () => {
    const generationResult = await client.generateByTemplate(this.template, {});

    if (generationResult && generationResult.size > 0) {
      return generationResult.get(this.actionNodeAlias);
    }
    return null;
  };

  public addToTemplate = async (cb: (template: ScTemplate) => void | Promise<void>) => {
    await this.actionNodeInitiated;
    await cb(this.template);
  };

  public addArgs = async (...args: [ScTemplateParam, ...ScTemplateParam[]]) => {
    await this.actionNodeInitiated;
    const rrelBaseKeynodes = args.map((_, ind) => `rrel_${ind + 1}`) as [string, ...string[]];
    const rrelKeynodes = await scUtils.searchKeynodes(...rrelBaseKeynodes);

    args.forEach((rrel, ind) => {
      this.template.quintuple(
        this.actionNodeAlias,
        ScType.VarPermPosArc,
        rrel,
        ScType.VarPermPosArc,
        rrelKeynodes[`rrel${ind + 1}`],
      );
    });
  };

  public initiate = () => {
    return new Promise<ScAddr | null>((resolve) => {
      scUtils.searchKeynodes(this.action).then(async (keynodes) => {
        await this.actionNodeInitiated;

        this.template.triple(
          keynodes[snakeToCamelCase(this.action)],
          ScType.VarPermPosArc,
          this.actionNodeAlias,
        );

        const actionNode = await this.generateAction();
        if (!actionNode) return resolve(null);

        const onResponse = async () => {
          resolve(await this.searchResultCircuit(actionNode));
        };
        await this.subscribeToResult(actionNode, onResponse);
        await this.initiateAction(actionNode);
      });
    });
  };
}
