import { request } from '@api/utils';
import { API_URL } from '@constants';
import { IUserData } from '@model/model';

export interface ILoginParams {
  login: string;
  password: string;
}

export interface IRegisterParams {
  login: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}

export const login = async (params: ILoginParams): Promise<IUserData> => {
  const response = await request<IUserData>({
    method: 'POST',
    url: `${API_URL}/login`,
    data: JSON.stringify(params),
  });

  if ('data' in response) {
    return response.data;
  }

  throw new Error('Login failed');
};

export const register = async (params: IRegisterParams): Promise<IUserData> => {
  const response = await request<IUserData>({
    method: 'POST',
    url: `${API_URL}/api/register`,
    data: JSON.stringify(params),
  });

  if ('data' in response) {
    return response.data;
  }

  throw new Error('Registration failed');
};

export const loginWithGoogle = async (): Promise<IUserData> => {
  window.location.href = '/auth/google';
  throw new Error('Redirecting to Google OAuth');
};

export const logout = async (): Promise<void> => {
  window.location.href = '/logout';
};

export const checkSession = async (): Promise<IUserData | null> => {
  const response = await request<IUserData>({
    method: 'GET',
    url: `${API_URL}/login`,
  });

  if ('data' in response) {
    return response.data;
  }

  return null;
};
