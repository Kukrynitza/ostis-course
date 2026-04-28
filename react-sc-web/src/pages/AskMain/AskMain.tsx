import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router';
import { resetHistory } from '@store/requestDialogHistorySlice';

import styles from './AskMain.module.css';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetHistory());
    };
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};

export default Main;
