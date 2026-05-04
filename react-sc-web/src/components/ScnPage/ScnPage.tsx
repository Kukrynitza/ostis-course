import { useMatch } from 'react-router';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import { Scn } from '@components/Scn';
import { routes } from '@constants';
import { useTranslate } from 'ostis-ui-lib';

import styles from './ScnPage.module.css';

export const ScnPage = () => {
  const translate = useTranslate();
  const match = useMatch(routes.ACTION);

  const action = match?.params.action;
  if (!action) return null;

  return (
    <div
      className={styles.wrapper}
      title={translate({
        ru: 'Область отображения результата в формате SCn-кода',
        en: 'Result view area in SCn format',
      })}
      aria-label={translate({
        ru: 'Область отображения SCn-кода',
        en: 'SCn code view area',
      })}
    >
      <ErrorBoundary
        title={translate({
          ru: 'Ошибка загрузки компонента SCn-кода',
          en: 'Error loading SCn code',
        })}
        paragraph={translate({
          ru: 'Ошибка загрузки компонента SCn-кода',
          en: 'Error loading SCn code',
        })}
        shouldReturn={true}
      >
        <Scn action={Number(action)} />
      </ErrorBoundary>
    </div>
  );
};
