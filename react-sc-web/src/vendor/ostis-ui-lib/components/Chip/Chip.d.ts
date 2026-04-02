import { MouseEvent, MouseEventHandler, ReactNode } from 'react';
import { TChipSize } from './types';
export interface IProps {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    onClose?: (e: MouseEvent) => void;
    onClick?: MouseEventHandler<HTMLDivElement>;
    size?: TChipSize;
}
export declare const Chip: import("react").ForwardRefExoticComponent<IProps & {
    children?: ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
