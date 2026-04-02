import { TextareaHTMLAttributes } from 'react';
import { InputStatus } from "../../model/input";
export interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    status?: InputStatus;
    minHeight?: number;
    maxHeight?: number;
    value?: string;
}
export declare const Textarea: import("react").ForwardRefExoticComponent<ITextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
