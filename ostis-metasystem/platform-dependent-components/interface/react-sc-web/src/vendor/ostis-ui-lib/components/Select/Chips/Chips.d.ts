import type { IConstantOption, IdleSelectHeight } from '../types';
interface IMultipleChipsProps {
    options: IConstantOption[];
    disabled?: boolean;
    idleHeight: IdleSelectHeight;
    onChipRemove?: (value: string) => void;
}
export declare const Chips: ({ options, disabled, idleHeight, onChipRemove }: IMultipleChipsProps) => import("react/jsx-runtime").JSX.Element;
export {};
