import { createSelectorHook, useDispatch as useReduxDispatch } from 'react-redux';
import { Dispatch } from '@store';

export const useAppDispatch = () => useReduxDispatch<Dispatch>();
export const useDispatch = () => useReduxDispatch<Dispatch>();
export const useSelector = createSelectorHook();
