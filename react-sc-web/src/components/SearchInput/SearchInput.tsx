import { ChangeEventHandler, FC } from 'react';
import SearchIcon from '@assets/images/Search.svg';
import { Input } from '@components/Input/Input';

import styles from './SearchInput.module.css';

interface IProps {
  value?: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClear: () => void;
}

export const SearchInput: FC<IProps> = ({ value, placeholder, onChange }) => (
  <Input
    value={value}
    placeholder={placeholder}
    iconLeft={<SearchIcon />}
    className={styles.input}
    onChange={onChange}
    isSearch
  />
);
