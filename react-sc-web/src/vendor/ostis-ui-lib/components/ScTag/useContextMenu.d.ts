import { PropsWithChildren } from 'react';
import { IContext } from './model';
export declare const useContextMenu: () => IContext;
export declare const ContextMenuProvider: ({ children, ...rest }: PropsWithChildren<IContext>) => import("react/jsx-runtime").JSX.Element;
