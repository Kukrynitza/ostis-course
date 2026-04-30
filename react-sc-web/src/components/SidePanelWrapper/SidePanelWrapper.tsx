import { FC, ReactNode, useCallback } from 'react';
import {
  addDecompositionItem,
  deleteDecompositionItem,
  editDecompositionItem,
  getDecomposition,
} from '@api/requests/decomposition';
import { useErrorToast } from '@hooks/useErrorToast';
import { Decomposition, IDecompositionItem } from '@model/model';
import { DecompositionProvider, useLanguage, useTranslate } from 'ostis-ui-lib';

export interface IProps {
  children?: ReactNode;
}

export const SidePanelWrapper: FC<IProps> = ({ children }) => {
  const addError = useErrorToast();

  const lang = useLanguage();
  const translate = useTranslate();

  const findCreatedSectionAddr = useCallback(
    (tree: Decomposition | null, parentId: number, sectionName: string): number | null => {
      if (!tree) return null;

      const normalizedTarget = sectionName.trim().toLowerCase();

      const findNodeById = (node: Decomposition, id: number): Decomposition | null => {
        if (node[id]) return node[id].decomposition;
        for (const entry of Object.values(node)) {
          const nested = findNodeById(entry.decomposition, id);
          if (nested) return nested;
        }
        return null;
      };

      const parentChildren = findNodeById(tree, parentId);
      if (!parentChildren) return null;

      const candidates = Object.entries(parentChildren)
        .filter(([, value]) => value.idtf.trim().toLowerCase() === normalizedTarget)
        .map(([key, value]) => ({ addr: Number(key), position: value.position }))
        .sort((a, b) => b.position - a.position);

      return candidates.length ? candidates[0].addr : null;
    },
    [],
  );

  const getDecompositionCallBack = useCallback(async () => {
    const res = await getDecomposition(lang);

    if (!res) {
      addError(
        translate({
          ru: 'Не удалось обновить панель декомпозиции',
          en: 'Decomposition panel is not updated',
        }),
      );
      return null;
    }

    return res;
  }, [addError, translate, lang]);

  const addDecompositionItemCallBack = useCallback(
    async (id: string, data: IDecompositionItem): Promise<number | null> => {
      const createdAddr = await addDecompositionItem(id, { ...data, lang });

      if (!createdAddr) {
        const refreshedTree = await getDecomposition(lang);
        const recoveredAddr = findCreatedSectionAddr(refreshedTree, Number(id), data.sectionName);
        if (recoveredAddr) return recoveredAddr;
        addError(translate({ ru: 'Не удалось добавить элемент', en: 'Element is not added' }));
        return null;
      }

      return createdAddr;
    },
    [addError, translate, lang, findCreatedSectionAddr],
  );

  const editDecompositionItemCallback = useCallback(
    async (id: number, value: string) => {
      const res = await editDecompositionItem(id, value, lang);

      if (!res) {
        addError(translate({ ru: 'Не удалось обновить элемент', en: 'Element is not updated' }));
        return null;
      }

      return res;
    },
    [addError, lang, translate],
  );

  const deleteDecompositionItemCallback = useCallback(
    async (parentID: string, id: string): Promise<number | null> => {
      const deletedAddr = await deleteDecompositionItem(parentID, id);
      if (!deletedAddr) {
        addError(translate({ ru: 'Не удалось удалить элемент', en: 'Element is not deleted' }));
        return null;
      }
      return deletedAddr;
    },
    [addError, translate],
  );

  return (
    <>
      <DecompositionProvider
        getDecompositionCallback={getDecompositionCallBack}
        addDecompositionItemCallBack={addDecompositionItemCallBack}
        editDecompositionItemCallback={editDecompositionItemCallback}
        deleteDecompositionItemCallback={deleteDecompositionItemCallback}
      >
        {children}
      </DecompositionProvider>
    </>
  );
};
