import { request } from '@api';
import { API_URL } from '@constants';
import { ICorrectUser, IInputValidation, IUserData } from '@model/model';

export const getUserByToken = () => {
  return request<IUserData>({
    method: 'GET',
    url: `${API_URL}/login`,
  });
};

export const getUser = async (data: IInputValidation) => {
  return request<IUserData>({
    method: 'POST',
    url: `${API_URL}/login`,
    data: JSON.stringify(data),
  });
};

export const isAdmin = async (data: ICorrectUser) => {
  return request({
    method: 'POST',
    url: `${API_URL}/login/check_password`,
    data: JSON.stringify(data),
  });
};
