import { PropsWithChildren, ReactNode } from 'react';
import { ITransformedDecomposition } from '../../types';
interface INavigationListProps {
    data: ITransformedDecomposition[];
    children?: ReactNode;
    deletable: boolean;
    editable: boolean;
}
export declare const NavigationListInner: ({ data, children, deletable, editable, }: PropsWithChildren<INavigationListProps>) => import("react/jsx-runtime").JSX.Element;
export declare const NavigationList: import("react").MemoExoticComponent<({ data, children, deletable, editable, }: PropsWithChildren<INavigationListProps>) => import("react/jsx-runtime").JSX.Element>;
export {};
