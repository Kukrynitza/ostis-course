import { HTMLAttributes } from 'react';
interface TextHighlightPanelProps extends HTMLAttributes<HTMLDivElement> {
    children?: string;
}
export declare const Highlight: ({ children, ...props }: TextHighlightPanelProps) => import("react/jsx-runtime").JSX.Element;
export {};
