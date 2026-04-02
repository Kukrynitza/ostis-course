import { useCallback } from 'react';
import { Notification, TNotificationText } from '@components/Notification';
import { useToast } from 'ostis-ui-lib';

export const useErrorToast = () => {
  const { addToast } = useToast();

  return useCallback(
    (title: TNotificationText) => {
      addToast(<Notification type="error" title={title} />, {
        position: 'bottomRight',
        duration: 4000,
      });
    },
    [addToast],
  );
};
