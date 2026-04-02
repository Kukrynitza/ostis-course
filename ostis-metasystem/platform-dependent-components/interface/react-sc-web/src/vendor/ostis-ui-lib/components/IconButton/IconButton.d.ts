import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { TSize } from './model';
export interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    size?: TSize;
    disabled?: boolean;
    className?: string;
    onClick?: MouseEventHandler;
}
export declare const IconButton: ({ children, className, disabled, size, type, onClick, ...restButtonProps }: IIconButtonProps) => import("react/jsx-runtime").JSX.Element;
