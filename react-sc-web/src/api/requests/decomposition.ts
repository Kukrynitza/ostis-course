import {
  ScAddr,
  ScConstruction,
  ScLinkContent,
  ScLinkContentType,
  ScTemplate,
  ScType,
} from 'ts-sc-client';
import { client, isAxiosError, request, scUtils } from '@api';
import { API_URL } from '@constants';
import { Decomposition } from '@model/model';
import { langToKeynode, snakeToCamelCase, TLanguage } from 'ostis-ui-lib';

import { doCommand } from './command';

interface IDecompositionItem {
  sectionName: string;
  lang: TLanguage;
}

const getLanguage = async (lang: TLanguage) => {
  const keynodes = await scUtils.searchKeynodes(langToKeynode[lang]);
  return keynodes[snakeToCamelCase(langToKeynode[lang])];
};

export const getDecomposition = async (lang: TLanguage): Promise<Decomposition | null> => {
  const LEVEL = '10';

  const { uiStartScElement, uiMenuViewGetDecomposition, nrelSectionDecomposition } =
    await scUtils.searchKeynodes(
      'ui_start_sc_element',
      'ui_menu_view_get_decomposition',
      'nrel_section_decomposition',
    );

  const subjectDomainAlias = '_subjDomain';
  const subjectDomainTemplate = new ScTemplate();
  subjectDomainTemplate.triple(uiStartScElement, ScType.VarPermPosArc, [
    ScType.VarNode,
    subjectDomainAlias,
  ]);

  const subjectDomainRes = await client.searchByTemplate(subjectDomainTemplate);

  if (!subjectDomainRes.length) return null;

  const subjDomainAddr = subjectDomainRes[0].get(subjectDomainAlias);

  const constr = new ScConstruction();
  constr.generateLink(ScType.ConstNodeLink, new ScLinkContent(LEVEL, ScLinkContentType.String));

  const [linkAddr] = await client.generateElements(constr);

  const foundLang = await getLanguage(lang);

  const commandResult = await doCommand(
    uiMenuViewGetDecomposition.value,
    subjDomainAddr.value,
    linkAddr.value,
    foundLang.value,
    nrelSectionDecomposition.value,
  );

  // Добавить вызов тоста
  if (isAxiosError(commandResult)) {
    return null;
  }

  const actionNode = commandResult.data.action;
  const result = await scUtils.getResult(new ScAddr(actionNode));

  if (!result) return null;

  const targetLinkAlias = '_targetLink';
  const linkTemplate = new ScTemplate();
  linkTemplate.triple(result, ScType.VarPermPosArc, [ScType.VarNodeLink, targetLinkAlias]);
  const linkRes = await client.searchByTemplate(linkTemplate);

  if (!linkRes.length) return null;

  const targetLinkAddr = linkRes[0].get(targetLinkAlias);
  const contents = await client.getLinkContents([targetLinkAddr]);
  const content = contents[0].data;

  return JSON.parse(String(content));
};

export const addDecompositionItem = async (parentID: string, data: IDecompositionItem) => {
  const foundLang = await getLanguage(data.lang);
  const { nrelMainIdtf, nrelSectionDecomposition, nrelBasicSequence, rrel1, rrelLast } =
    await scUtils.searchKeynodes(
      'nrel_main_idtf',
      'nrel_section_decomposition',
      'nrel_basic_sequence',
      'rrel_1',
      'rrel_last',
    );

  const res = await request<{ scAddr?: number; sc_addr?: number }>({
    method: 'POST',
    url: `${API_URL}/api/sections/${parentID}/subsections`,
    data: { ...data, lang: foundLang.value },
  });

  if (!isAxiosError(res)) {
    const apiAddr = res.data.scAddr ?? res.data.sc_addr;
    if (apiAddr) return apiAddr;
  }

  // Fallback: для текущего sc-web вручную добавляем раздел
  // в nrel_section_decomposition с корректным порядком.
  const sectionConstr = new ScConstruction();
  sectionConstr.generateNode(ScType.ConstNode, 'section');
  sectionConstr.generateLink(
    ScType.ConstNodeLink,
    new ScLinkContent(data.sectionName, ScLinkContentType.String),
    'idtfLink',
  );
  sectionConstr.generateConnector(ScType.ConstCommonArc, 'section', 'idtfLink', 'idtfArc');
  sectionConstr.generateConnector(ScType.ConstPermPosArc, nrelMainIdtf, 'idtfArc');
  sectionConstr.generateConnector(ScType.ConstPermPosArc, foundLang, 'idtfLink');
  const generatedSection = await client.generateElements(sectionConstr);
  const sectionAddr = generatedSection[sectionConstr.getIndex('section')];
  if (!sectionAddr?.value) return null;

  const tupleAlias = '_tuple';
  const tupleTemplate = new ScTemplate();
  tupleTemplate.quintuple(
    new ScAddr(Number(parentID)),
    ScType.VarCommonArc,
    [ScType.VarNode, tupleAlias],
    ScType.VarPermPosArc,
    nrelSectionDecomposition,
  );
  const tupleSearch = await client.searchByTemplate(tupleTemplate);
  let tupleAddr = tupleSearch.length ? tupleSearch[0].get(tupleAlias) : null;

  if (!tupleAddr) {
    const tupleConstr = new ScConstruction();
    tupleConstr.generateNode(ScType.ConstNode, 'tuple');
    tupleConstr.generateConnector(
      ScType.ConstCommonArc,
      new ScAddr(Number(parentID)),
      'tuple',
      'tupleArc',
    );
    tupleConstr.generateConnector(ScType.ConstPermPosArc, nrelSectionDecomposition, 'tupleArc');
    const generatedTuple = await client.generateElements(tupleConstr);
    tupleAddr = generatedTuple[tupleConstr.getIndex('tuple')];
  }
  if (!tupleAddr) return null;

  const alreadyInTupleTemplate = new ScTemplate();
  alreadyInTupleTemplate.triple(tupleAddr, ScType.VarPermPosArc, sectionAddr);
  const alreadyInTuple = await client.searchByTemplate(alreadyInTupleTemplate);
  if (alreadyInTuple.length) return sectionAddr.value;

  const lastArcAlias = '_lastArc';
  const lastArcTemplate = new ScTemplate();
  lastArcTemplate.quintuple(
    tupleAddr,
    [ScType.VarPermPosArc, lastArcAlias],
    ScType.VarNode,
    ScType.VarTempPosArc,
    rrelLast,
  );
  const lastArcSearch = await client.searchByTemplate(lastArcTemplate);
  const lastArc = lastArcSearch.length ? lastArcSearch[0].get(lastArcAlias) : null;

  const addToTupleConstr = new ScConstruction();
  addToTupleConstr.generateConnector(ScType.ConstPermPosArc, tupleAddr, sectionAddr, 'newSectionArc');
  if (lastArc) {
    addToTupleConstr.generateConnector(ScType.ConstCommonArc, lastArc, 'newSectionArc', 'sequenceArc');
    addToTupleConstr.generateConnector(ScType.ConstPermPosArc, nrelBasicSequence, 'sequenceArc');
  } else {
    addToTupleConstr.generateConnector(ScType.ConstPermPosArc, rrel1, 'newSectionArc');
  }
  addToTupleConstr.generateConnector(ScType.ConstTempPosArc, rrelLast, 'newSectionArc');
  await client.generateElements(addToTupleConstr);

  return sectionAddr.value;
};

export const deleteDecompositionItem = async (parentID: string, id: string) => {
  const { actionRemoveSection, nrelSectionDecomposition, nrelBasicSequence, rrel1, rrelLast } =
    await scUtils.searchKeynodes(
      'action_remove_section',
      'nrel_section_decomposition',
      'nrel_basic_sequence',
      'rrel_1',
      'rrel_last',
    );

  const res = await request<{ sc_addr?: number }>({
    method: 'DELETE',
    url: `${API_URL}/api/sections/${parentID}/subsections/${id}`,
  });

  if (!isAxiosError(res)) {
    const apiAddr = res.data.sc_addr;
    if (apiAddr) return apiAddr;
  }

  if (!actionRemoveSection?.value) return null;

  const commandRes = await doCommand(actionRemoveSection.value, Number(id), Number(parentID));
  if (isAxiosError(commandRes)) {
    const fallbackRes = await doCommand(actionRemoveSection.value, Number(id));
    if (isAxiosError(fallbackRes)) {
      // Последний fallback: вручную удаляем узел из tuple декомпозиции, чтобы раздел исчез из дерева.
      const tupleAlias = '_tuple';
      const tupleTemplate = new ScTemplate();
      tupleTemplate.quintuple(
        new ScAddr(Number(parentID)),
        ScType.VarCommonArc,
        [ScType.VarNode, tupleAlias],
        ScType.VarPermPosArc,
        nrelSectionDecomposition,
      );
      const tupleRes = await client.searchByTemplate(tupleTemplate);
      if (!tupleRes.length) return null;

      const tuple = tupleRes[0].get(tupleAlias);
      const section = new ScAddr(Number(id));

      const sectionArcTemplate = new ScTemplate();
      sectionArcTemplate.triple(tuple, [ScType.VarPermPosArc, '_sectionArc'], section);
      const sectionArcRes = await client.searchByTemplate(sectionArcTemplate);
      if (!sectionArcRes.length) return null;
      const sectionArc = sectionArcRes[0].get('_sectionArc');

      const prevSeqTemplate = new ScTemplate();
      prevSeqTemplate.quintuple(
        ScType.VarNode,
        [ScType.VarCommonArc, '_prevSeqArc'],
        sectionArc,
        ScType.VarPermPosArc,
        nrelBasicSequence,
      );
      const prevSeqRes = await client.searchByTemplate(prevSeqTemplate);

      const nextSeqTemplate = new ScTemplate();
      nextSeqTemplate.quintuple(
        sectionArc,
        [ScType.VarCommonArc, '_nextSeqArc'],
        ScType.VarNode,
        ScType.VarPermPosArc,
        nrelBasicSequence,
      );
      const nextSeqRes = await client.searchByTemplate(nextSeqTemplate);

      const rrel1Template = new ScTemplate();
      rrel1Template.triple(rrel1, [ScType.VarPermPosArc, '_rrel1Arc'], sectionArc);
      const rrel1Res = await client.searchByTemplate(rrel1Template);

      const rrelLastTemplate = new ScTemplate();
      rrelLastTemplate.triple(rrelLast, [ScType.VarTempPosArc, '_rrelLastArc'], sectionArc);
      const rrelLastRes = await client.searchByTemplate(rrelLastTemplate);

      const toErase = [sectionArc];
      if (prevSeqRes.length) toErase.push(prevSeqRes[0].get('_prevSeqArc'));
      if (nextSeqRes.length) toErase.push(nextSeqRes[0].get('_nextSeqArc'));
      if (rrel1Res.length) toErase.push(rrel1Res[0].get('_rrel1Arc'));
      if (rrelLastRes.length) toErase.push(rrelLastRes[0].get('_rrelLastArc'));

      const typedClient = client as unknown as { eraseElements: (elements: ScAddr[]) => Promise<void> };
      await typedClient.eraseElements(toErase);
    }
  }
  return Number(id);
};

export const editDecompositionItem = async (addr: number, newContent: string, lang: TLanguage) => {
  const linkAlias = '_link';

  const { nrelMainIdtf, ...rest } = await scUtils.searchKeynodes(
    'nrel_main_idtf',
    langToKeynode[lang],
  );

  const foundLang = rest[snakeToCamelCase(langToKeynode[lang])];

  const scTemplate = new ScTemplate();
  scTemplate.quintuple(
    new ScAddr(addr),
    ScType.VarCommonArc,
    [ScType.VarNodeLink, linkAlias],
    ScType.VarPermPosArc,
    nrelMainIdtf,
  );

  scTemplate.triple(foundLang, ScType.VarPermPosArc, linkAlias);

  const result = await client.searchByTemplate(scTemplate);

  if (result.length) {
    client.setLinkContents([
      new ScLinkContent(newContent, ScLinkContentType.String, result[0].get(linkAlias)),
    ]);
    return true;
  }

  const link = await scUtils.generateLink(newContent);

  if (!link) return;

  const template = new ScTemplate();

  template.quintuple(
    new ScAddr(addr),
    ScType.VarCommonArc,
    link,
    ScType.VarPermPosArc,
    nrelMainIdtf,
  );
  template.triple(foundLang, ScType.VarPermPosArc, link);

  const generateRes = await client.generateByTemplate(template);

  return !!generateRes;
};
