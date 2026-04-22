import { AxiosError } from 'axios';
import { IScnNode } from 'ostis-ui-lib';
import { ScAddr } from 'ts-sc-client';
import { client, isAxiosError } from '@api';
import { shiftMap } from '@utils';

import { translate } from './requests';

interface IReturnScnTree {
  tree: IScnNode;
}

const requestScnTree = async (action: number): Promise<IReturnScnTree | AxiosError | null> => {
  const res = await translate(action, 'format_scn_json', 'lang_ru');
  if (isAxiosError(res)) return res;
  const { link } = res.data;
  const [{ data }] = await client.getLinkContents([new ScAddr(link)]);

  try {
    const tree = JSON.parse(String(data))[0] as IScnNode;
    return { tree };
  } catch (error) {
    return null;
  }
};

const DEFAULT_CACHE_SIZE = 50;

const memoizedScnTree = (cacheSize = DEFAULT_CACHE_SIZE) => {
  const cache = new Map<number, IReturnScnTree>();

  const removeFromCache = (action: number) => cache.delete(action);

  const request = async (
    action: number,
    onRequestStarted?: () => void,
  ): Promise<IReturnScnTree | AxiosError | null> => {
    const nodeInCache = cache.get(action);
    if (nodeInCache) return nodeInCache;

    onRequestStarted?.();
    const newNode = await requestScnTree(action);

    if (newNode === null) {
      return null;
    }

    if (isAxiosError(newNode)) return newNode;

    cache.set(action, newNode);
    if (cache.size > cacheSize) shiftMap(cache, 1);

    return newNode;
  };
  return [request, removeFromCache] as const;
};

export const [getScnTree, removeFromCache] = memoizedScnTree();
