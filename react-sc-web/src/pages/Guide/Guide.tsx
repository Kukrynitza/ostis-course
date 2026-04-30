import { useEffect, useState } from 'react';
import { getGuideSections, IGuideSection } from '@api/requests/guide';
import { useLanguage, useTranslate } from 'ostis-ui-lib';

import styles from './Guide.module.css';

const Guide = () => {
  const [sections, setSections] = useState<IGuideSection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const lang = useLanguage();
  const translate = useTranslate();

  useEffect(() => {
    const loadGuide = async () => {
      try {
        setIsLoading(true);
        const data = await getGuideSections(lang);
        setSections(data);
      } catch {
        setError(
          translate({
            ru: 'Не удалось загрузить справку',
            en: 'Failed to load guide',
          }),
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadGuide();
  }, [lang, translate]);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          {translate({ ru: 'Загрузка справки...', en: 'Loading guide...' })}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.scrollableContent}>
        <div className={styles.header}>
          <h1>
            {translate({
              ru: 'Справка для начинающего',
              en: 'Guide for beginners',
            })}
          </h1>
        </div>
        <div className={styles.sections}>
          {sections.map((section, index) => (
            <div key={index} className={styles.section}>
              <button
                className={styles.sectionHeader}
                onClick={() => handleToggle(index)}
                aria-expanded={expandedIndex === index}
              >
                <span className={styles.sectionTitle}>{section.title}</span>
                <span
                  className={`${styles.chevron} ${expandedIndex === index ? styles.chevronOpen : ''}`}
                >
                  ▼
                </span>
              </button>
              {expandedIndex === index && (
                <div className={styles.sectionContent}>
                  <p>{section.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guide;
