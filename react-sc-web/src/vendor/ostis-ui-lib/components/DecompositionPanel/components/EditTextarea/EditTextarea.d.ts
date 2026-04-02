interface IProps {
    onClose: () => void;
    onSave: (value: string) => void;
    defaultValue: string;
}
export declare const EditTextarea: ({ defaultValue, onClose, onSave }: IProps) => import("react/jsx-runtime").JSX.Element;
export {};
