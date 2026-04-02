import { IScnNode } from "../../model";
interface IProps {
    className?: string;
    node: IScnNode;
}
export declare const ScnConnector: ({ node: { addr, type, sourceNode, targetNode } }: IProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
