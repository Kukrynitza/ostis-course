/// <reference types="react" />
type AlignItem = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export interface DropdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onKeyDown'> {
    targetRef: React.RefObject<HTMLElement>;
    relativeRef?: React.RefObject<HTMLElement>;
    alignSelf?: AlignItem;
    container?: React.RefObject<HTMLDivElement>;
    onClickOutside?: (e: Event) => void;
}
export declare const Dropdown: import("react").ForwardRefExoticComponent<DropdownProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
export {};
