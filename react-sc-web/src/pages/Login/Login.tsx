import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '@api/requests/auth';
import { Button } from '@components/Button';
import { InputField } from '@components/Fields/InputField';
import { useAppDispatch } from '@hooks/redux';
import { useErrorToast } from '@hooks/useErrorToast';
import { setUser } from '@store/commonSlice';
import { useTranslate } from 'ostis-ui-lib';

import styles from './Login.module.css';

export const Login = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const translate = useTranslate();
  const addError = useErrorToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await login({ login: loginValue, password: passwordValue });
      dispatch(setUser(response));
      navigate('/');
    } catch {
      addError(translate({ ru: 'Ошибка входа', en: 'Login error' }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>{translate({ ru: 'Вход', en: 'Login' })}</h1>

        <InputField
          label={translate({ ru: 'Логин', en: 'Login' })}
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
          required
        />

        <InputField
          label={translate({ ru: 'Пароль', en: 'Password' })}
          type="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          required
        />

        <Button type="submit" disabled={isLoading}>
          {translate({ ru: 'Войти', en: 'Sign In' })}
        </Button>

        <Link to="/register" className={styles.link}>
          {translate({ ru: 'Нет аккаунта? Регистрация', en: 'No account? Register' })}
        </Link>
      </form>
    </div>
  );
};
