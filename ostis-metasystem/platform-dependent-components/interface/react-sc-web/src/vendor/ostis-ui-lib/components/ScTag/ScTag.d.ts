import { PropsWithChildren, ReactNode } from 'react';
export type TAppearance = 'blue' | 'transparent';
export interface IScTagProps {
    children?: ReactNode;
    addr?: number;
    systemId?: string;
    showMenu?: boolean;
    [x: string]: any;
}
export declare const ScTag: ({ addr, systemId, as, children, showMenu, ...restProps }: IScTagProps) => import("react/jsx-runtime").JSX.Element;
export interface IContextMenuProps {
    addr?: number;
    systemId?: string;
    targetRef: React.RefObject<HTMLElement>;
    relativeRef?: React.RefObject<HTMLElement>;
    onClose: () => void;
}
export declare const ContextMenu: ({ addr, systemId, targetRef, relativeRef, onClose }: IContextMenuProps) => import("react/jsx-runtime").JSX.Element;
export interface IScTagLinkProps {
    className?: string;
    addr?: number;
    systemId?: string;
    appearance?: TAppearance;
    command?: number | string;
    as?: any;
    showMenu?: boolean;
    onClick?: () => void;
}
export declare const ScTagLink: ({ addr, children, systemId, command, className, as, appearance, showMenu, onClick: onClickFromProps, }: PropsWithChildren<IScTagLinkProps>) => import("react/jsx-runtime").JSX.Element;
