import { ChangeEvent, FC, KeyboardEvent, RefObject } from 'react';
interface IProps {
    value: string;
    wrapperTextareaRef: RefObject<HTMLDivElement>;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
}
export declare const TextAreaItem: FC<IProps>;
export {};
