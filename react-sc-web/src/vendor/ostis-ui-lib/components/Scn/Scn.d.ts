import { ReactNode } from 'react';
import { IScnNode } from './model';
import { TOnInitiateAction } from './ScnContext';
interface IProps {
    tree: IScnNode | null;
    scgUrl: string;
    isLoading?: boolean;
    action: number;
    renderRequestPanel?: (addr: number) => ReactNode;
    onInitiateAction: TOnInitiateAction;
    className?: string;
}
export declare const Scn: ({ isLoading, tree, scgUrl, renderRequestPanel, onInitiateAction, action, className }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
