/// <reference types="react" />
export declare const useInView: <TargetRef extends HTMLElement, RootRef extends HTMLElement>({ threshold, rootMargin, root, }?: IntersectionObserverInit) => readonly [import("react").RefObject<TargetRef>, boolean, import("react").RefObject<RootRef>];
