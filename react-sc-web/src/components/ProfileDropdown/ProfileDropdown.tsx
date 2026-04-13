import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routes } from '@constants';
import { useAppDispatch } from '@hooks/redux';
import { selectUser, setUser, logoutUser } from '@store/commonSlice';
import { useTranslate } from 'ostis-ui-lib';
import styles from './ProfileDropdown.module.css';

export const ProfileDropdown = () => {
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const translate = useTranslate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await dispatch(logoutUser()).unwrap();
    dispatch(setUser(null));
    navigate(routes.LOGIN);
  };

  if (!user) {
    return (
      <button className={styles.loginButton} onClick={() => navigate(routes.LOGIN)}>
        {translate({ ru: 'Войти', en: 'Login' })}
      </button>
    );
  }

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button className={styles.avatar} onClick={() => setIsOpen(!isOpen)}>
        {user?.avatar ? (
          <img src={user.avatar} alt={user.login} className={styles.avatarImage} />
        ) : (
          user?.login?.charAt(0).toUpperCase() || '?'
        )}
      </button>
      {isOpen && (
        <div className={styles.menu}>
            <div className={styles.userInfo}>
            <span className={styles.userName}>{user?.login || 'User'}</span>
            <span className={styles.userEmail}>{user?.email || ''}</span>
          </div>
          <button className={styles.menuItem} onClick={handleLogout}>
            {translate({ ru: 'Выйти', en: 'Logout' })}
          </button>
        </div>
      )}
    </div>
  );
};
