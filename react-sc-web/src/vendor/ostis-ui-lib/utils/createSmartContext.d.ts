import { PropsWithChildren } from 'react';
export declare const createSmartContext: <T extends Record<string, unknown>>(props: T) => readonly [({ children, ...restContext }: PropsWithChildren<T>) => import("react/jsx-runtime").JSX.Element, () => T];
