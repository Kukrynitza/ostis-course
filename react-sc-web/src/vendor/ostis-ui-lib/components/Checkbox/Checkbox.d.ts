import { InputHTMLAttributes, ReactNode } from 'react';
export interface ICheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: ReactNode;
}
export declare const Checkbox: import("react").ForwardRefExoticComponent<ICheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
