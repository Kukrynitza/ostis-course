interface IParams {
    updateable?: boolean;
}
export declare const useBooleanState: (defaultState: boolean, params?: IParams) => readonly [boolean, () => void, () => void, () => void];
export {};
