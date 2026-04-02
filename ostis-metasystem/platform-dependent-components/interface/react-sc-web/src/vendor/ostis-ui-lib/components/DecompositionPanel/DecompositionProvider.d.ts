import { FC, ReactNode } from 'react';
import { TAddDecompositionItemCallBack, TDeleteDecompositionItemCallback, TEditDecompositionItemCallback, TGetDecompositionCallback } from './types';
interface IProps {
    getDecompositionCallback: TGetDecompositionCallback;
    addDecompositionItemCallBack: TAddDecompositionItemCallBack;
    editDecompositionItemCallback: TEditDecompositionItemCallback;
    deleteDecompositionItemCallback: TDeleteDecompositionItemCallback;
    children: ReactNode;
}
export declare const DecompositionProvider: FC<IProps>;
export {};
