/// <reference types="react" />
import { IToast, TAddToast } from './model';
type BasicToastContext = {
    toasts: IToast[];
    addToast: TAddToast;
    removeToast: (id: string) => void;
};
export declare const BasicToastProvider: ({ children, ...restContext }: import("react").PropsWithChildren<BasicToastContext>) => import("react/jsx-runtime").JSX.Element, useToast: () => BasicToastContext;
type InnerToastContext = {
    deletingToasts: string[];
    removeToast: (id: string) => void;
};
export declare const InnerToastProvider: ({ children, ...restContext }: import("react").PropsWithChildren<InnerToastContext>) => import("react/jsx-runtime").JSX.Element, useInnerToast: () => InnerToastContext;
export {};
