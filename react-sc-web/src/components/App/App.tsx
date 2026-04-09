import { nanoid } from 'nanoid';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContext } from '@api/requests/requests';
import { isAxiosError } from '@api/utils';
import { Router } from '@components/Router';
import { DEFAULT_COMMAND_SYSTEM_ID, DEFAULT_SYSTEM_ID } from '@constants';
import { useAppDispatch } from '@hooks/redux';
import { useErrorToast } from '@hooks/useErrorToast';
import { useScNavigation } from '@hooks/useScNavigation';
import { addArg, selectArgs, fetchUserByToken } from '@store/index';
import { CommandProvider, ContextMenuProvider, useScUtils, useTranslate } from 'ostis-ui-lib';

export const App = () => {
  const { goToActiveFormatCommand } = useScNavigation();

  const { addrOrSystemIdAddr } = useScUtils();

  const arrArgs = useSelector(selectArgs);

  const addError = useErrorToast();
  const dispatch = useAppDispatch();
  const translate = useTranslate();

  useEffect(() => {
    dispatch(fetchUserByToken());
  }, [dispatch]);

  const onExecuteCommand = useCallback((addr?: number | string, command?: number | string) => {
    goToActiveFormatCommand(addr ?? DEFAULT_SYSTEM_ID, command ?? DEFAULT_COMMAND_SYSTEM_ID);
  }, []);

  const onFixArgument = async (addr?: number | string) => {
    const targetAddr = await addrOrSystemIdAddr(addr ?? DEFAULT_SYSTEM_ID);

    dispatch(addArg({ addr: targetAddr, id: nanoid(5) }));
  };

  const getContextItems = async (addr?: number | string) => {
    const targetAddr = await addrOrSystemIdAddr(addr || DEFAULT_SYSTEM_ID);
    const arrArgsAddrs = arrArgs.map((item) => item.addr);

    const res = await getContext([...arrArgsAddrs, targetAddr]);

    if (!isAxiosError(res)) return res.data;

    addError(translate({ ru: 'Не удалось получить контекст', en: 'Error while getting context' }));
    return null;
  };

  return (
    <CommandProvider onExecuteCommand={onExecuteCommand}>
      <ContextMenuProvider getContextItems={getContextItems} onFixArgument={onFixArgument}>
        <Router />
      </ContextMenuProvider>
    </CommandProvider>
  );
};
