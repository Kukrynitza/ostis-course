import { TLinkFormat } from "../../model";
interface IProps {
    addr: number;
    contentType?: TLinkFormat | null;
    content?: string | null;
}
export declare const ScLink: ({ addr, contentType }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
