import { PropsWithChildren } from 'react';
import { ScClient } from 'ts-sc-client';
interface IContext {
    client: ScClient;
}
export declare const useClient: () => ScClient;
export declare const ClientProvider: ({ children, ...rest }: PropsWithChildren<IContext>) => import("react/jsx-runtime").JSX.Element;
export {};
