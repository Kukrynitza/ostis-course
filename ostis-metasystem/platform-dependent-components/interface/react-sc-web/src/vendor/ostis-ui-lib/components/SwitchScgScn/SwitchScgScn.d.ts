export type TScLanguageTab = 'scn' | 'scg';
export interface ISwitchScgScnProps {
    className?: string;
    tab: TScLanguageTab;
    onTabClick: (tab: TScLanguageTab) => void;
}
export declare const SwitchScgScn: ({ tab, className, onTabClick }: ISwitchScgScnProps) => import("react/jsx-runtime").JSX.Element;
