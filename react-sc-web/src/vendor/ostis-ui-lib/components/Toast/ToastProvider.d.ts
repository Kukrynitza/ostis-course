import { ReactNode } from 'react';
import { IToast } from './model';
type RenderToastsProps = {
    toasts: IToast[];
};
export type ToastProviderProps = {
    children: ReactNode;
    renderToasts?: (props: RenderToastsProps) => ReactNode;
};
export declare const ToastProvider: ({ children, renderToasts }: ToastProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
