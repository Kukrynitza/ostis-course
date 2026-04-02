import { PropsWithChildren } from 'react';
import { IScnNode } from "../../model";
interface INodeProps {
    tree: IScnNode;
}
export declare const KeywordNode: ({ children, tree }: PropsWithChildren<INodeProps>) => import("react/jsx-runtime").JSX.Element;
export declare const LinkNode: ({ children, tree: { addr, content, contentType } }: PropsWithChildren<INodeProps>) => import("react/jsx-runtime").JSX.Element;
export declare const ConnectorNode: ({ children, tree }: PropsWithChildren<INodeProps>) => import("react/jsx-runtime").JSX.Element;
export declare const TupleNode: ({ children, tree }: PropsWithChildren<INodeProps>) => import("react/jsx-runtime").JSX.Element;
export declare const SimpleNode: ({ tree: { addr }, children }: PropsWithChildren<INodeProps>) => import("react/jsx-runtime").JSX.Element;
export {};
