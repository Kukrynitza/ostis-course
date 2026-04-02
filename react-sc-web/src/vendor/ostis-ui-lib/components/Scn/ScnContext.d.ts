import { PropsWithChildren } from 'react';
export type TOnInitiateAction = (addr: number) => number | null | Promise<number | null>;
export interface IScnContext {
    scgUrl: string;
    onInitiateAction: TOnInitiateAction;
}
export declare const useScnContext: () => IScnContext;
export declare const ScnProvider: ({ children, ...rest }: PropsWithChildren<IScnContext>) => import("react/jsx-runtime").JSX.Element;
