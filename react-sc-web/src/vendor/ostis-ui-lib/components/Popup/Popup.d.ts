import { PropsWithChildren } from 'react';
export interface IPopupProps {
    onClose: () => void;
    className?: string;
}
export declare const Popup: ({ children, className, onClose }: PropsWithChildren<IPopupProps>) => import("react").ReactPortal;
