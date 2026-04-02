import { PropsWithChildren } from "react";
type ExpandProperty = "width" | "height";
interface IProps {
    expanded: boolean;
    unmountOnEnd?: boolean;
    initialSize?: number;
    transitionDuration?: string;
    transitionTimingFunction?: string;
    className?: string;
    growProperty?: ExpandProperty;
}
export declare const Expandable: ({ expanded, children, className, initialSize, unmountOnEnd, growProperty, transitionDuration, transitionTimingFunction, }: PropsWithChildren<IProps>) => import("react/jsx-runtime").JSX.Element | null;
export {};
