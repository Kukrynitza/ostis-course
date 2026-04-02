/// <reference types="react" />
import { InputStatus } from "../../model/input";
import type { HighlightFormat, IdleSelectHeight } from './types';
export interface SelectProps extends Omit<React.InputHTMLAttributes<HTMLSelectElement>, 'onFocus' | 'onBlur'> {
    renderedEmptyValue?: React.ReactNode;
    value?: string | string[];
    isLoading?: boolean;
    mobile?: boolean;
    mode?: 'select' | 'search';
    loadingAppearance?: 'input' | 'options';
    loadingMessage?: React.ReactNode;
    emptyMessage?: React.ReactNode;
    multiple?: boolean;
    status?: InputStatus;
    defaultHighlighted?: boolean;
    showCheckbox?: boolean;
    defaultValue?: string | string[];
    idleHeight?: IdleSelectHeight;
    highlightFormat?: HighlightFormat;
    portalTargetRef?: React.RefObject<HTMLElement>;
    iconsRight?: React.ReactNode;
    iconsLeft?: React.ReactNode;
    containerRef?: React.RefObject<HTMLDivElement>;
    renderSelectValue?: (value: string | string[] | undefined, searchText: string) => React.ReactNode;
    onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
    onFocus?: (evt: React.FocusEvent<HTMLDivElement>) => void;
    onBlur?: (evt: React.FocusEvent<HTMLDivElement>) => void;
    hideSelectedValues?: boolean;
}
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLSelectElement>>;
