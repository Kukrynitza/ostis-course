import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '@api/requests/auth';
import { Button } from '@components/Button';
import { InputField } from '@components/Fields/InputField';
import { useAppDispatch } from '@hooks/redux';
import { useErrorToast } from '@hooks/useErrorToast';
import { setUser } from '@store/commonSlice';
import { useTranslate } from 'ostis-ui-lib';

import styles from './Register.module.css';

export const Register = () => {
  const [loginValue, setLoginValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<'user' | 'admin'>('user');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const translate = useTranslate();
  const addError = useErrorToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (passwordValue !== confirmPassword) {
      addError(translate({ ru: 'Пароли не совпадают', en: 'Passwords do not match' }));
      return;
    }

    setIsLoading(true);

    try {
      const response = await register({
        login: loginValue,
        email: emailValue,
        password: passwordValue,
        role,
      });
      dispatch(setUser(response));
      navigate('/');
    } catch {
      addError(translate({ ru: 'Ошибка регистрации', en: 'Registration error' }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>{translate({ ru: 'Регистрация', en: 'Register' })}</h1>

        <InputField
          label={translate({ ru: 'Логин', en: 'Login' })}
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
          required
        />

        <InputField
          label={translate({ ru: 'Email', en: 'Email' })}
          type="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          required
        />

        <InputField
          label={translate({ ru: 'Пароль', en: 'Password' })}
          type="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          required
        />

        <InputField
          label={translate({ ru: 'Подтверждение пароля', en: 'Confirm password' })}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <div className={styles.roleSelect}>
          <label className={styles.roleLabel}>{translate({ ru: 'Роль', en: 'Role' })}:</label>
          <select
            className={styles.select}
            value={role}
            onChange={(e) => setRole(e.target.value as 'user' | 'admin')}
          >
            <option value="user">{translate({ ru: 'Пользователь', en: 'User' })}</option>
            <option value="admin">{translate({ ru: 'Администратор', en: 'Administrator' })}</option>
          </select>
        </div>

        <Button type="submit" disabled={isLoading}>
          {translate({ ru: 'Зарегистрироваться', en: 'Sign Up' })}
        </Button>

        <Link to="/login" className={styles.link}>
          {translate({ ru: 'Есть аккаунт? Вход', en: 'Have an account? Login' })}
        </Link>
      </form>
    </div>
  );
};
