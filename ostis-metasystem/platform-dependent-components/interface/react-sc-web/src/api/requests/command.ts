import { request } from '@api';
import { API_URL } from '@constants';
import { objectToFormData } from '@utils';

interface IDoCommandResult {
  action: number;
}

export const doCommand = (cmdAddr: number, ...args: number[]) => {
  const argsObj = args.reduce(
    (acc, arg, ind) => ({
      ...acc,
      [`${String(ind)}_`]: String(arg),
    }),
    {} as Record<string, string>,
  );

  return request<IDoCommandResult>({
    method: 'POST',
    url: `${API_URL}/api/cmd/do/`,
    data: objectToFormData({
      cmd: cmdAddr,
      ...argsObj,
    }),
  });
};
