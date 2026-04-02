import type { ForwardedRef } from 'react';
/**
 * Useful when passing refs from outside, but want to handle internal ref.
 * Keeps passed refs in sync, by creating ref callback
 * @param refs
 */
export declare const refSetter: <T extends HTMLElement | null>(...refs: ForwardedRef<T>[]) => (elem: T | null) => void;
