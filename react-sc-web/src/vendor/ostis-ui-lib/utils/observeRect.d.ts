export type RectProps = {
    rect: DOMRect | undefined;
    hasRectChanged: boolean;
    callbacks: ((rect: DOMRect | undefined) => void)[];
};
export declare const observeRect: (node: Element, cb: (rect: DOMRect | undefined) => void) => {
    observe(): void;
    unobserve(): void;
};
