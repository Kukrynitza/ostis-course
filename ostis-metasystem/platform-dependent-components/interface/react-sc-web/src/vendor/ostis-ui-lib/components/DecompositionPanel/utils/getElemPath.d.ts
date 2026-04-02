import { ITransformedDecomposition } from '../types';
export declare const findParent: (tree: ITransformedDecomposition, id: number) => ITransformedDecomposition | null;
export declare const updateElem: (tree: ITransformedDecomposition, id: number, cb: (elem: ITransformedDecomposition) => ITransformedDecomposition) => ITransformedDecomposition;
