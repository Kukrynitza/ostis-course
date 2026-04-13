import { ScAddr, ScTemplate, ScType } from 'ts-sc-client';
import { client, isAxiosError, scUtils } from '@api';

import { doCommand } from './command';

export const appendHistoryItem = async (itemAddr: number, userAddr: number) => {
  const { uiMenuViewAddActionToUserHistory } = await scUtils.searchKeynodes(
    'ui_menu_view_add_action_to_user_history',
  );

  return await doCommand(uiMenuViewAddActionToUserHistory.value, userAddr, itemAddr);
};

export const getHistory = async (_: number) => {
  console.log('getHistory called');
  const { uiMenuViewGetUserActionHistory } = await scUtils.searchKeynodes(
    'ui_menu_view_get_user_action_history',
  );
  console.log('uiMenuViewGetUserActionHistory:', uiMenuViewGetUserActionHistory);

  const res = await doCommand(uiMenuViewGetUserActionHistory.value);
  console.log('doCommand result:', res);

  if (isAxiosError(res)) {
    console.error('Axios error in getHistory');
    return null;
  }

  const actionNode = new ScAddr(res.data.action);
  console.log('actionNode:', actionNode);

  const result = await scUtils.getResult(actionNode);
  console.log('scUtils.getResult result:', result);

  if (!result) return null;

  const linkAlias = '_link';
  const template = new ScTemplate();
  template.triple(result, ScType.VarPermPosArc, [ScType.VarNodeLink, linkAlias]);

  const searchRes = await client.searchByTemplate(template);
  console.log('searchByTemplate searchRes:', searchRes);

  if (!searchRes.length) return null;
  const resultAddr = searchRes[0].get(linkAlias);
  console.log('resultAddr:', resultAddr);

  const contents = await client.getLinkContents([resultAddr]);
  console.log('getLinkContents contents:', contents);

  const addrs = JSON.parse(String(contents[0].data)) as string[] | null;
  console.log('parsed addrs:', addrs);

  if (!addrs) return [];

  return addrs.map((addr) => ({ action: Number(addr) })).reverse();
};
