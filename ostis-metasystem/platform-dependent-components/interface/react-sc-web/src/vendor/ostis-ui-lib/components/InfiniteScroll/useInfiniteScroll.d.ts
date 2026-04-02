/// <reference types="react" />
interface IProps {
    total: number;
    pageSize?: number;
    initialPage?: number;
}
export declare const useInfiniteScroll: ({ total, pageSize, initialPage }: IProps) => {
    page: number;
    scrollRef: import("react").RefObject<HTMLDivElement>;
    targetRef: import("react").RefObject<HTMLDivElement>;
};
export {};
