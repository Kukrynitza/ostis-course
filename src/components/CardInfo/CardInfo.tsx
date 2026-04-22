import { langToKeynode, useLanguage } from 'ostis-ui-lib';
import { useState, useEffect } from 'react';
import { ScAddr } from 'ts-sc-client';
import {
  searchComponentMainIdentifier,
  searchComponentAuthor,
  searchComponentGit,
  searchComponentDependencies,
  searchComponentExplanation,
  searchComponentType,
  searchComponentInstallationMethod,
  searchComponentNote,
} from '@api/requests/getSpecification';
import CloseIcon from '@assets/images/CloseIcon.svg';
import { CardComponentType } from '@components/Card/types';
import { getCardLogo, getSubtitleClassName } from '@components/Card/utils';
import styles from './CardInfo.module.scss';
import { InstallMethodType } from './types';
import { getInstallationMethodType } from './utils';

interface CardInfoProps {
  scAddr: ScAddr;
  setShowComponent: React.Dispatch<React.SetStateAction<ScAddr | undefined>>;
}

export const CardInfo: React.FC<CardInfoProps> = ({ scAddr, setShowComponent }) => {
  const [name, setName] = useState<string | '...'>('...');
  const [github, setGithub] = useState<string | '#'>('#');
  const [explanation, setExplanation] = useState<string | '...'>('...');
  const [type, setType] = useState<CardComponentType>();
  const [author, setAuthor] = useState<string | '...'>('...');
  const [note, setNote] = useState<string>('');
  const [installMethod, setInstallMethod] = useState<InstallMethodType>();
  const [dependencies, setDependencies] = useState<Map<ScAddr, string>>(new Map());

  const [logoComponent, setLogoComponent] = useState<React.ReactNode>();
  const [subtitleClassName, setSubtitleClassName] = useState<string>();
  const [installationMethodImg, setInstallMethodImg] = useState<React.ReactNode>();

  const lang = useLanguage();
  useEffect(() => {
    if (type) {
      setLogoComponent(getCardLogo(type));
      setSubtitleClassName(getSubtitleClassName(type));
    }
  }, [type]);

  useEffect(() => {
    if (installMethod) {
      setInstallMethodImg(getInstallationMethodType(installMethod));
    }
  }, [installMethod]);

  const fetchComponent = async (component: ScAddr) => {
    try {
      const [
        mainIdentifier,
        type,
        git,
        explanation,
        note,
        installationMethod,
        dependencies,
        authors,
      ] = await Promise.all([
        searchComponentMainIdentifier(component, langToKeynode[lang]),
        searchComponentType(component),
        searchComponentGit(component),
        searchComponentExplanation(component),
        searchComponentNote(component),
        searchComponentInstallationMethod(component),
        searchComponentDependencies(component),
        searchComponentAuthor(component),
      ]);

      setName(mainIdentifier ? (mainIdentifier as string) : '...');
      setType(type);
      setInstallMethod(installationMethod as InstallMethodType);
      setGithub(git ? (git as string) : '#');
      setExplanation(explanation ? (explanation as string) : '...');
      setNote(note ? (note as string) : '...');
      setDependencies(dependencies);
      setAuthor(authors ? authors.join(', ') : '...');
    } catch (error) {
      console.error('Error fetching component specification:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchComponent(scAddr);
  });

  const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };
  return (
    <div
      className={styles.container}
      onClick={(event) => {
        setShowComponent(undefined);
      }}
    >
      <div className={styles.wrapper} onClick={handleWrapperClick}>
        <div className={styles.cardInfo}>
          <div className={styles.logo}>{logoComponent}</div>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <div className={styles.title}>{name}</div>
              <div className={styles.tool}>
                <div className={subtitleClassName}>{type}</div>
                <button className={styles.closeButton} onClick={() => setShowComponent(undefined)}>
                  <CloseIcon className={styles.closeIcon} />
                </button>
              </div>
            </div>
            <div className={styles.subtitle}>{note}</div>
          </div>
        </div>
        <div className={styles.scrollable}>
          {explanation && (
            <div className={styles.annotation}>
              <div className={styles.blockName}>Примечание</div>
              <div className={styles.subtitle}>{explanation}</div>
            </div>
          )}

          {dependencies && dependencies.size > 0 && (
            <div className={styles.dependencies}>
              <div className={styles.blockName}>Зависимости компонента</div>
              {Array.from(dependencies.entries()).map(([scAddr, value]) => (
                <div
                  className={styles.componentDependencies}
                  onClick={() => setShowComponent(scAddr)}
                >
                  {value}
                </div>
              ))}
            </div>
          )}

          <div className={styles.address}>
            <div className={styles.blockName}>Адрес хранилища</div>
            <div className={styles.storageAddress}>
              <a href={github} target="_blank" rel="noopener noreferrer">
                {github}
              </a>
            </div>
          </div>

          <div className={styles.installationMethod}>
            <div className={styles.blockName}>Метод установки</div>
            <div className={styles.componentImg}>{installationMethodImg}</div>
          </div>

          <div className={styles.autorship}>
            <div className={styles.blockName}>Автор</div>
            <div className={styles.subtitle}>{author}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
