import { Outlet } from 'react-router';
import styles from './AskMain.module.css';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};

export default Main;
