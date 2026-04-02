import { PropsWithChildren } from 'react';
interface IContext {
    onExecuteCommand: (addr?: string | number, command?: string | number) => void;
}
export declare const useCommandContext: () => IContext;
export declare const CommandProvider: ({ children, ...rest }: PropsWithChildren<IContext>) => import("react/jsx-runtime").JSX.Element;
export {};
