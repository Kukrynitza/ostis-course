/// <reference types="react" />
type TButtonType = 'button' | 'submit' | 'reset';
export interface IButtonWithIcon {
    className?: string;
    disabled?: boolean;
    type?: TButtonType;
    onClick?: () => void;
}
export declare const ButtonWithIcon: import("react").ForwardRefExoticComponent<IButtonWithIcon & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLButtonElement>>;
export {};
