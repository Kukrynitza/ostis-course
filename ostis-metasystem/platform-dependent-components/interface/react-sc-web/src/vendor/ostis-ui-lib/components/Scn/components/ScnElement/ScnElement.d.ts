/// <reference types="react" />
import { IScnNode } from "../../model";
interface IProps {
    tree: IScnNode;
    isLoading?: boolean;
    isRoot?: boolean;
}
export declare const ScnElement: import("react").MemoExoticComponent<({ tree, isRoot }: IProps) => import("react/jsx-runtime").JSX.Element>;
export {};
