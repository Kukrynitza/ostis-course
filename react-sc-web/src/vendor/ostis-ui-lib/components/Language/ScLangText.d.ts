import { ReactNode } from 'react';
interface IProps {
    addrOrSystemId: number | string;
    defaultText?: string;
    loaderHeight?: number | string;
    loaderWidth?: number | string;
    renderText?: (text: string) => ReactNode;
    setIsLoad?: (val: boolean) => void;
}
export declare const ScLangText: ({ addrOrSystemId, loaderHeight, loaderWidth, defaultText, renderText, setIsLoad, }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
