import { langToKeynode, snakeToCamelCase, TLanguage } from 'ostis-ui-lib';
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

  return request<Record<string, any>>({
    method: 'POST',
    url: `${API_URL}/api/sections/${parentID}/subsections`,
    data: { ...data, lang: foundLang.value },
  });
};

export const deleteDecompositionItem = (parentID: string, id: string) => {
  return request({
    method: 'DELETE',
    url: `${API_URL}/api/sections/${parentID}/subsections/${id}`,
  });
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
