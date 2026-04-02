import { ReactNode } from 'react';
interface IProps {
    total: number;
    pageSize?: number;
    className?: string;
    triggerOffset?: string;
    initialPage?: number;
    renderElement: (ind: number) => ReactNode;
}
export declare const InfiniteScroll: ({ className, total, pageSize, triggerOffset, initialPage, renderElement, }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
