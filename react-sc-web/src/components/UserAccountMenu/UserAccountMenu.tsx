import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '@api/requests/auth';
import { routes } from '@constants';
import { useAppDispatch, useSelector } from '@hooks';
import { selectUser, setUser, setUserStatus } from '@store/commonSlice';
import { deleteCookie } from '@utils';
import { useTranslate } from 'ostis-ui-lib';

import styles from './UserAccountMenu.module.css';

export const UserAccountMenu: FC = () => {
  const translate = useTranslate();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onDocMouseDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, [open]);

  const handleLogout = useCallback(async () => {
    setOpen(false);
    try {
      await logout();
    } catch {
      /* очистка локального состояния даже при ошибке сети */
    }
    localStorage.removeItem('user');
    deleteCookie('session_key');
    dispatch(setUser(null));
    dispatch(
      setUserStatus({
        isLoading: false,
        isError: false,
        isLoadingByToken: false,
        isErrorByToken: false,
      }),
    );
    navigate(routes.MAIN);
  }, [dispatch, navigate]);

  if (!user) {
    return (
      <div className={styles.guestLinks}>
        <Link className={styles.guestLink} to={routes.LOGIN}>
          {translate({ ru: 'Войти', en: 'Sign in' })}
        </Link>
        <Link className={styles.guestLink} to={routes.REGISTER}>
          {translate({ ru: 'Регистрация', en: 'Register' })}
        </Link>
      </div>
    );
  }

  const initial = user.login?.charAt(0)?.toUpperCase() ?? '?';

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-haspopup="true"
        title={translate({ ru: 'Учётная запись', en: 'Account' })}
        onClick={() => setOpen((v) => !v)}
      >
        {user.avatar ? (
          <img className={styles.avatar} src={user.avatar} alt="" />
        ) : (
          <span className={styles.initials}>{initial}</span>
        )}
      </button>
      {open && (
        <div className={styles.dropdown} role="menu">
          <div className={styles.dropdownHeader}>{user.login}</div>
          <button
            type="button"
            className={styles.dropdownItem}
            role="menuitem"
            onClick={handleLogout}
          >
            {translate({ ru: 'Выйти', en: 'Log out' })}
          </button>
        </div>
      )}
    </div>
  );
};
