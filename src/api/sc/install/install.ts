import { ScAddr, ScConstruction, ScType } from 'ts-sc-client';
import { client } from '@api/sc';
import { searchAddrById } from '@api/sc/search/search';

export const initiateComponentInstallAgent = async (component: ScAddr) => {
  const construction = new ScConstruction();

  const actionNode = '_action_node';
  const componentsInstall = '_components_install_node';
  const componentsInstallArc = '_components_install_arc';
  const components = '_components';
  const componentsArc = '_components_arc';

  const actionComponentsSearch = await searchAddrById('action_components_install');
  const action = await searchAddrById('action');
  const actionInitiated = await searchAddrById('action_initiated');
  const rrel1 = await searchAddrById('rrel_1');
  const rrelComponents = await searchAddrById('rrel_components');

  if (!actionComponentsSearch || !action || !actionInitiated || !rrel1 || !rrelComponents) return;

  construction.generateNode(ScType.ConstNode, actionNode);
  construction.generateNode(ScType.ConstNode, componentsInstall);
  construction.generateConnector(ScType.ConstPermPosArc, action, actionNode);
  construction.generateConnector(ScType.ConstPermPosArc, actionComponentsSearch, actionNode);
  construction.generateConnector(
    ScType.ConstPermPosArc,
    actionNode,
    componentsInstall,
    componentsInstallArc,
  );
  construction.generateConnector(ScType.ConstPermPosArc, rrel1, componentsInstallArc);
  construction.generateNode(ScType.ConstNode, components);
  construction.generateConnector(
    ScType.ConstPermPosArc,
    componentsInstall,
    components,
    componentsArc,
  );
  construction.generateConnector(ScType.ConstPermPosArc, rrelComponents, componentsArc);
  construction.generateConnector(ScType.ConstPermPosArc, components, component);
  construction.generateConnector(ScType.ConstPermPosArc, actionInitiated, actionNode);

  const result = await client.generateElements(construction);
  return result;
};
