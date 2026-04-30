import { useCallback, useEffect, useState } from 'react';
import { generatePath, useMatch, useNavigate } from 'react-router';
import { appendHistoryItem } from '@api/requests/userHistory';
import { isAxiosError } from '@api/utils';
import { CenteredSpinner } from '@components/CenteredSpinner';
import { routes } from '@constants';
import { useDispatch, useErrorToast, useSelector } from '@hooks';
import { selectArgAddrs } from '@store';
import { selectUserAddr } from '@store/commonSlice';
import { addRequest } from '@store/requestHistorySlice';
import { useTranslate } from 'ostis-ui-lib';

import { debouncedExecuteCommand } from './utils';

const Command = () => {
  const [isLoading, setIsLoading] = useState(false);

  const match = useMatch(routes.COMMAND);

  const userAddr = useSelector(selectUserAddr);
  const args = useSelector(selectArgAddrs);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addError = useErrorToast();

  const translate = useTranslate();

  const appendToHistory = useCallback(
    async (action: number) => {
      if (!userAddr) return;
      const addRes = await appendHistoryItem(action, userAddr);
      if (isAxiosError(addRes)) {
        // Запись в локальную историю уже добавляется ниже (dispatch(addRequest)),
        // а сервер иногда возвращает ошибку даже при фактическом сохранении.
        // Не показываем ложное уведомление пользователю.
        return;
      }
    },
    [userAddr],
  );

  const executeCommand = useCallback(async () => {
    if (!match) return;
    const { commandAddr, format, addr } = match.params;
    if (!commandAddr || !format || !addr) return;

    setIsLoading(true);
    const { res: cmdRes, isLast } = await debouncedExecuteCommand({ addr, commandAddr, args });

    if (isAxiosError(cmdRes)) {
      setIsLoading(false);
      return addError(
        translate({ ru: 'Не удалось выполнить запрос', en: `It's failed to complete request` }),
      );
    }

    const action = cmdRes.data.action;

    await appendToHistory(action);

    dispatch(addRequest({ action }));

    if (!isLast) return;

    setIsLoading(false);
    navigate(generatePath(routes.ACTION, { format, action: String(action) }), {
      replace: true,
    });
  }, [addError, appendToHistory, args, dispatch, match, navigate, translate]);

  useEffect(() => {
    executeCommand();
  }, [executeCommand]);

  if (isLoading) return <CenteredSpinner />;

  return null;
};

export default Command;
