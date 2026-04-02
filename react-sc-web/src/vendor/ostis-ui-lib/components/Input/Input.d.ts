import { InputHTMLAttributes, ReactNode } from 'react';
import { InputStatus } from "../../model/input";
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    showPasswordIcon?: ReactNode;
    hidePasswordIcon?: ReactNode;
    status?: InputStatus;
    inputClassName?: string;
    /**
     * @deprecated unused
     */
    isSearch?: boolean;
}
export declare const Input: import("react").ForwardRefExoticComponent<IInputProps & import("react").RefAttributes<HTMLInputElement>>;
