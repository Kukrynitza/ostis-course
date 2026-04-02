import { ReactNode } from 'react';
import { Placement } from '@floating-ui/react';
interface IProps {
    title: ReactNode;
    placement?: Placement;
    children: ReactNode;
    className?: string;
}
export declare const Tooltip: ({ title, placement, children, className }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
