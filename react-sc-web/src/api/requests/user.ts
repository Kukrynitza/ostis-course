import { isAxiosError, request } from '@api';
import { IUser } from '@model/user';

export const getUsersList = () => {
  return request<IUser[]>({
    method: 'GET',
    url: '/api/users',
  });
};

export const postNewUser = async (user: IUser) => {
  const res = await request<{ sc_addr: number }>({
    method: 'POST',
    url: '/api/users',
    data: JSON.stringify({
      canEdit: `${user.canEdit}`,
      login: user.login,
      role: user.role,
    }),
  });

  if (isAxiosError(res)) return res;

  const scAddr = res.data;

  return {
    ...user,
    canEdit: user.canEdit,
    sc_addr: scAddr.sc_addr,
  };
};

export const deleteUser = async (scAddr: number) => {
  return request({
    method: 'DELETE',
    url: `/api/users/${scAddr}`,
  });
};

export const putUser = async (user: IUser) => {
  return request({
    method: 'PUT',
    url: `/api/users/${user.sc_addr}`,
    data: JSON.stringify({
      role: user.role,
      canEdit: `${user.canEdit}`,
    }),
  });
};
