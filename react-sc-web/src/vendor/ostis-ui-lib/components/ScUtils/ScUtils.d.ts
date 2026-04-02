import { ReactNode } from 'react';
import { TSearchKeynodes } from "../../utils/searchKeynodes";
import { scUtilsBuilder } from './scUtilsBuilder';
type TScUtilsContext = Omit<ReturnType<typeof scUtilsBuilder>, 'searchKeynodes'> & {
    searchKeynodes: TSearchKeynodes;
};
export declare const useScUtils: () => TScUtilsContext;
interface IProps {
    children: ReactNode;
}
export declare const ScUtilsProvider: ({ children }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
