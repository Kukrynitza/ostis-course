import classNames from 'classnames';
import { TLanguage, useLanguageContext } from 'ostis-ui-lib';

import styles from './language.module.css';

export const Language = () => {
  const { lang, setLang } = useLanguageContext();

  const setLanguage = (lang: TLanguage) => () => {
    localStorage.setItem('language', lang);
    setLang(lang);
  };

  return (
    <div className={styles.languageWrap}>
      <div className={styles.languages}>
        <span
          className={classNames(styles.language, styles.engLanguage, {
            [styles.activeLanguage]: lang === 'en',
          })}
          onClick={setLanguage('en')}
          title="Switch interface language to English"
        >
          En
        </span>
        <span className={styles.divider} />
        <span
          className={classNames(styles.language, styles.rusLanguage, {
            [styles.activeLanguage]: lang === 'ru',
          })}
          onClick={setLanguage('ru')}
          title="Переключить язык интерфейса на русский"
        >
          Ru
        </span>
      </div>
    </div>
  );
};
