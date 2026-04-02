import { FC } from 'react';
interface IProps {
    onAddClick: () => void;
    onEditClick: () => void;
    onDeleteClick: () => void;
    deletable: boolean;
}
export declare const Options: FC<IProps>;
export {};
