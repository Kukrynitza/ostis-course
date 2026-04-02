import { FC } from 'react';
export interface IScgProps {
    action?: number;
    className?: string;
    show?: boolean;
    readonly?: boolean;
    url: string;
    onOpenFragment?: (addr: number) => void;
    onUpdateScg?: (action: number) => void;
    onEmptyFragment?: () => void;
    onFullfilledFragment?: () => void;
}
export declare const Scg: FC<IScgProps>;
