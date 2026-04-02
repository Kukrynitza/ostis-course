import { FC } from 'react';
export interface IPositionInPortalProps {
    targetRef: React.RefObject<HTMLElement>;
    relativeRef?: React.RefObject<HTMLElement>;
    container?: React.RefObject<HTMLDivElement>;
    fullContainerWidth?: boolean;
    className?: string;
}
export declare const PositionInPortal: FC<IPositionInPortalProps>;
