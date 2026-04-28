import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { scUtils } from '@api';
import { FEATURES } from '@constants/features';
import { TLanguage, ScTag, useLanguageContext } from 'ostis-ui-lib';

import styles from './language.module.css';

export const Language = () => {
  const { lang, setLang } = useLanguageContext();
  const [enAddr, setEnAddr] = useState<number | null>(null);
  const [ruAddr, setRuAddr] = useState<number | null>(null);

  useEffect(() => {
    if (FEATURES.enableContextMenuOnLanguage) {
      scUtils.searchKeynodes('ui_english_language', 'ui_russian_language').then(
        ({ uiEnglishLanguage, uiRussianLanguage }) => {
          if (uiEnglishLanguage?.value) setEnAddr(uiEnglishLanguage.value);
          if (uiRussianLanguage?.value) setRuAddr(uiRussianLanguage.value);
        }
      );
    }
  }, []);

  const setLanguage = (lang: TLanguage) => () => {
    localStorage.setItem('language', lang);
    setLang(lang);
  };

  return (
    <div className={styles.languageWrap}>
      <div className={styles.languages}>
        {FEATURES.enableContextMenuOnLanguage && enAddr ? (
          <ScTag addr={enAddr} showMenu={true}>
            <span
              className={classNames(styles.language, styles.engLanguage, {
                [styles.activeLanguage]: lang === 'en',
              })}
              onClick={setLanguage('en')}
            >
              En
            </span>
          </ScTag>
        ) : (
          <span
            className={classNames(styles.language, styles.engLanguage, {
              [styles.activeLanguage]: lang === 'en',
            })}
            onClick={setLanguage('en')}
          >
            En
          </span>
        )}
        <span className={styles.divider} />
        {FEATURES.enableContextMenuOnLanguage && ruAddr ? (
          <ScTag addr={ruAddr} showMenu={true}>
            <span
              className={classNames(styles.language, styles.rusLanguage, {
                [styles.activeLanguage]: lang === 'ru',
              })}
              onClick={setLanguage('ru')}
            >
              Ru
            </span>
          </ScTag>
        ) : (
          <span
            className={classNames(styles.language, styles.rusLanguage, {
              [styles.activeLanguage]: lang === 'ru',
            })}
            onClick={setLanguage('ru')}
          >
            Ru
          </span>
        )}
      </div>
    </div>
  );
};
