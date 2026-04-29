import { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from 'react';
import { client } from '@api';
import { searchAddrById } from '@api/sc/search/search';
import { scUtils } from '@api';
import SearchIcon from '@assets/images/Search.svg';
import { FEATURES } from '@constants/features';
import { useScNavigation } from '@hooks/useScNavigation';
import { useThemeContext } from '@themes/ThemeContext';
import { debounce } from '@utils';
import { ScTag, useTranslate, Select, Option } from 'ostis-ui-lib';

import styles from './SearchField.module.css';

const MAX_SIZE = 200;
const DEBOUNCE_TIMEOUT = 300;

interface IProps {
  className?: string;
}

export const SearchField: FC<IProps> = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<string[] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [searchInputAddr, setSearchInputAddr] = useState<number | null>(null);

  const { goToActiveFormatCommand } = useScNavigation();
  const { resolved } = useThemeContext();

  const translate = useTranslate();

  useEffect(() => {
    if (FEATURES.enableContextMenuOnSearch) {
      scUtils.searchKeynodes('ui_search').then(({ uiSearch }) => {
        if (uiSearch?.value) setSearchInputAddr(uiSearch.value);
      });
    }
  }, []);

  const highlightedColors = {
    backgroundColor: '#e0e0e0',
    color: '#1e1e1e',
    outline: '3px solid #6db3e0',
    outlineOffset: '-3px',
  };

  const searchColors = {
    backgroundColor: '#6db3e0',
    color: '#ffffff',
    outline: '3px solid #1e1e1e',
    outlineOffset: '-3px',
  };

  const optionStyles = (index: number) =>
    index === highlightedIndex ? (resolved === 'dark' ? highlightedColors : searchColors) : {};

  const findOptions = useCallback(async (searchValue: string) => {
    if (!searchValue) {
      setOptions(null);
      return;
    }

    setIsLoading(true);
    const [searchResult = []] = await client.searchLinkContentsByContentSubstrings([searchValue]);

    const uniqueResults = [...new Set(searchResult.filter((str) => str.length < MAX_SIZE))].sort(
      (a, b) => a.length - b.length,
    );

    setIsLoading(false);
    setOptions(uniqueResults);
    setSelectedIndex(-1);
    setHighlightedIndex(-1);
  }, []);

  const [debouncedFindOptions] = useMemo(
    () => debounce(findOptions, DEBOUNCE_TIMEOUT),
    [findOptions],
  );

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedFindOptions(e.target.value);
  };

  const onChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!value) return;

    setIsLoading(true);
    const res = await searchAddrById(value);
    setIsLoading(false);
    if (!res) return;

    goToActiveFormatCommand(res.value);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!options || options.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && options[highlightedIndex]) {
          const value = options[highlightedIndex];
          onChange({ target: { value } } as ChangeEvent<HTMLSelectElement>);
        }
        break;
      case 'Escape':
        setOptions(null);
        setHighlightedIndex(-1);
        break;
    }
  };

  const emptyMessage = !options
    ? translate({
        ru: 'Введите строку для поиска',
        en: 'Enter a search string',
      })
    : undefined;

  const searchField = (
    <Select
      className={className}
      mode="search"
      value=""
      placeholder={translate({ ru: 'Поиск...', en: 'Search...' })}
      isLoading={isLoading}
      onInputChange={onInputChange}
      onChange={onChange}
      onKeyDown={onKeyDown}
      emptyMessage={emptyMessage}
      iconsLeft={<SearchIcon />}
    >
      {(options || []).map((option, index) => (
        <Option key={option} value={option} style={optionStyles(index)}>
          {option}
        </Option>
      ))}
    </Select>
  );

  if (FEATURES.enableContextMenuOnSearch && searchInputAddr) {
    return <ScTag addr={searchInputAddr} showMenu={true}>{searchField}</ScTag>;
  }

  return searchField;
};