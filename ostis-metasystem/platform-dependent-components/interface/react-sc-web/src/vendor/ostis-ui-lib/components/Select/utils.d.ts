import type { BaseSyntheticEvent } from 'react';
import type { HighlightFormat } from './types';
export declare const scrollToNotVisibleELem: (elem: HTMLElement, scrollElem: HTMLElement) => void;
export declare const getTextHighlightMeta: (text?: string, highlight?: string, highlightFormat?: HighlightFormat) => {
    shouldHiglight: boolean;
    parts: string[];
    chunks: string[];
};
export declare const preventDefault: (e: BaseSyntheticEvent) => void;
interface InputData {
    value?: string;
    selectionStart?: number | null;
    selectionEnd?: number | null;
}
export declare function changeInputData(input: HTMLInputElement | HTMLTextAreaElement, toChangeData: InputData): void;
export {};
