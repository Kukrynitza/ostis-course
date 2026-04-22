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
  const { uiMenuViewGetUserActionHistory } = await scUtils.searchKeynodes(
    'ui_menu_view_get_user_action_history',
  );

  const res = await doCommand(uiMenuViewGetUserActionHistory.value);

  if (isAxiosError(res)) return null;

  const actionNode = new ScAddr(res.data.action);

  const result = await scUtils.getResult(actionNode);

  if (!result) return null;

  const linkAlias = '_link';
  const template = new ScTemplate();
  template.triple(result, ScType.VarPermPosArc, [ScType.VarNodeLink, linkAlias]);

  const searchRes = await client.searchByTemplate(template);

  if (!searchRes.length) return null;
  const resultAddr = searchRes[0].get(linkAlias);

  const contents = await client.getLinkContents([resultAddr]);

  const addrs = JSON.parse(String(contents[0].data)) as string[] | null;

  if (!addrs) return [];

  return addrs.map((addr) => ({ action: Number(addr) })).reverse();
};
