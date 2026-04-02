import { InputHTMLAttributes, ReactNode } from 'react';
import type { RenderOptionValue } from '../types';
interface IRenderOptionProps {
    disabled?: boolean;
    searchValue?: string;
    isHovered?: boolean;
}
interface IRenderOptionProps {
    disabled?: boolean;
    searchValue?: string;
    isHovered?: boolean;
}
interface IProps extends InputHTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
    value: string;
    children?: ReactNode;
    renderOption?: (props: IRenderOptionProps) => ReactNode;
    renderValue?: RenderOptionValue;
}
export declare const Option: (props: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
