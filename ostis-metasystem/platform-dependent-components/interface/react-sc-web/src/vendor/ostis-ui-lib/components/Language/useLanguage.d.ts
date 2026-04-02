import { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { TLanguage } from './types';
interface ILangContext {
    lang: TLanguage;
    setLang: Dispatch<SetStateAction<TLanguage>>;
}
export declare const useLanguage: () => TLanguage;
export declare const useLanguageContext: () => ILangContext;
interface IProps {
    defaultLanguage: TLanguage;
}
export declare const LanguageProvider: ({ children, defaultLanguage }: PropsWithChildren<IProps>) => import("react/jsx-runtime").JSX.Element;
export {};
