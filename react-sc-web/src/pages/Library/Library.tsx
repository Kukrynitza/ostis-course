import { useEffect, useMemo, useState } from 'react';
import { ScAddr } from 'ts-sc-client';
import {
  searchSpecifications,
  searchComponentGit,
  searchComponentBySpecification,
  searchComponentMainIdentifier,
  searchComponentExplanation,
  searchComponentType,
} from '@api/requests/getSpecification';
import FilterIcon from '@assets/images/filterIcon.svg';
import SearchIcon from '@assets/images/Search.svg';
import { Card } from '@components/Card/Card';
import { CardComponentType } from '@components/Card/types';
import { CardInfo } from '@components/CardInfo/CardInfo';
import { Input } from '@components/Input/Input';
import { langToKeynode, useTranslate, useLanguage } from 'ostis-ui-lib';
import styles from './Library.module.css';

interface CardInterface {
  name: string;
  type: CardComponentType;
  description: string;
  github: string;
  component: ScAddr;
}

const Library = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [specifications, setSpecifications] = useState<ScAddr[]>([]);
  const [showComponent, setShowComponent] = useState<ScAddr | undefined>();

  const lang = useLanguage();
  const translate = useTranslate();

  useEffect(() => {
    fetchSpecifications();
  }, []);

  useEffect(() => {
    fetchCards();
  }, [specifications]);

  const fetchSpecifications = async () => {
    const specifications = await searchSpecifications();
    setSpecifications(specifications);
  };

  const fetchCards = async () => {
    setIsLoading(true);
    try {
      const newCards = await Promise.all(
        specifications.map(async (specification) => {
          return await fetchComponentCard(specification);
        }),
      );
      setCards(newCards);
    } catch (error) {
      setCards([]);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchComponentCard = async (specification: ScAddr) => {
    const component = await searchComponentBySpecification(specification);
    const [mainIdentifier, type, git, explanation] = await Promise.all([
      searchComponentMainIdentifier(component, langToKeynode[lang]),
      searchComponentType(component),
      searchComponentGit(component),
      searchComponentExplanation(component),
    ]);
    const card: CardInterface = {
      name: mainIdentifier ? (mainIdentifier as string) : '...',
      type: type,
      description: explanation ? (explanation as string) : '...',
      github: git ? (git as string) : '...',
      component: component,
    };
    return card;
  };

  const filteredCards = useMemo(() => {
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    const hasSearch = normalizedSearchTerm.length > 0;
    const hasFilters = selectedFilters.length > 0;

    return cards.filter((card) => {
      const matchesFilter = !hasFilters || selectedFilters.includes(card.type);
      const matchesSearch =
        !hasSearch ||
        card.name.toLowerCase().includes(normalizedSearchTerm) ||
        card.description.toLowerCase().includes(normalizedSearchTerm);

      return matchesFilter && matchesSearch;
    });
  }, [cards, searchTerm, selectedFilters]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedFilters.includes(value)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
    } else {
      setSelectedFilters([...selectedFilters, value]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const closeFilterForm = () => {
    if (isFilterVisible === true) setIsFilterVisible(false);
  };

  const handleFilterFormClick = (event: React.MouseEvent<HTMLFormElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {showComponent && <CardInfo scAddr={showComponent} setShowComponent={setShowComponent} />}
      <div className={styles.libraryContainer} onClick={closeFilterForm}>
        <div className={styles.scrollableContent}>
          <div className={styles.header}>
            <Input
              className={styles.searchField}
              placeholder={translate({ ru: 'Поиск компонентов', en: 'Search for components' })}
              iconLeft={<SearchIcon />}
              onChange={handleSearchChange}
              value={searchTerm}
              title={translate({
                ru: 'Поиск по названию и описанию компонентов',
                en: 'Search by component name and description',
              })}
            />
            <div className={styles.Filter}>
              <button
                className={styles.FilterButton}
                onClick={toggleFilterVisibility}
                type="button"
                title={translate({
                  ru: 'Показать или скрыть фильтры типов компонентов',
                  en: 'Show or hide component type filters',
                })}
                aria-label={translate({
                  ru: 'Открыть или закрыть фильтры компонентов',
                  en: 'Open or close component filters',
                })}
              >
                <FilterIcon />
                <label>{translate({ ru: 'Фильтр', en: 'Filter' })}</label>
              </button>
              <form
                className={isFilterVisible ? styles.visible : ''}
                onClick={handleFilterFormClick}
                title={translate({
                  ru: 'Выберите типы компонентов для фильтрации',
                  en: 'Select component types for filtering',
                })}
              >
                <div className={styles.Option}>
                  <input
                    type="checkbox"
                    id="knowledge-base"
                    name="options[]"
                    value="knowledge-base"
                    onChange={handleFilterChange}
                    checked={selectedFilters.includes('knowledge-base')}
                    title={translate({
                      ru: 'Фильтр по типу knowledge base',
                      en: 'Filter by knowledge base type',
                    })}
                  />
                  <label htmlFor="knowledge-base" title="knowledge base">
                    knowledge base
                  </label>
                </div>

                <div className={styles.Option}>
                  <input
                    type="checkbox"
                    id="problem-solver"
                    name="options[]"
                    value="problem-solver"
                    onChange={handleFilterChange}
                    checked={selectedFilters.includes('problem-solver')}
                    title={translate({
                      ru: 'Фильтр по типу problem solver',
                      en: 'Filter by problem solver type',
                    })}
                  />
                  <label htmlFor="problem-solver" title="problem solver">
                    problem solver
                  </label>
                </div>

                <div className={styles.Option}>
                  <input
                    type="checkbox"
                    id="interface"
                    name="options[]"
                    value="interface"
                    onChange={handleFilterChange}
                    checked={selectedFilters.includes('interface')}
                    title={translate({
                      ru: 'Фильтр по типу interface',
                      en: 'Filter by interface type',
                    })}
                  />
                  <label htmlFor="interface" title="interface">
                    interface
                  </label>
                </div>

                <div className={styles.Option}>
                  <input
                    type="checkbox"
                    id="subsystem"
                    name="options[]"
                    value="subsystem"
                    onChange={handleFilterChange}
                    checked={selectedFilters.includes('subsystem')}
                    title={translate({
                      ru: 'Фильтр по типу subsystem',
                      en: 'Filter by subsystem type',
                    })}
                  />
                  <label htmlFor="subsystem" title="subsystem">
                    subsystem
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.CardsContainer}>
            {!isLoading && filteredCards.length === 0 && (
              <div className={styles.emptyState}>
                {translate({
                  ru: 'Компоненты по заданным критериям не найдены',
                  en: 'No components found for selected criteria',
                })}
              </div>
            )}
            {filteredCards?.map((item, index) => (
              <Card
                key={`${item.component.value}-${index}`}
                name={item.name}
                type={item.type}
                description={item.description}
                github={item.github}
                component={item.component}
                setShowComponent={setShowComponent}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
