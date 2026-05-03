import { request } from '@api';
import { ICorrectUser, IInputValidation, IUserData } from '@model/model';

export const getUserByToken = () => {
  return request<IUserData>({
    method: 'GET',
    url: '/api/login',
  });
};

export const getUser = async (data: IInputValidation) => {
  return request<IUserData>({
    method: 'POST',
    url: '/api/login',
    data: JSON.stringify(data),
  });
};

export const isAdmin = async (data: ICorrectUser) => {
  return request({
    method: 'POST',
    url: '/api/login/check_password',
    data: JSON.stringify(data),
  });
};
