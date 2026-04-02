/// <reference types="react" />
export declare const rotate: import("styled-components").Keyframes;
export declare const ItemContentWrapper: import("styled-components").StyledComponent<"div", any, {
    isOptionsOpen: boolean;
    isLoading: boolean;
}, never>;
export declare const StyledButtonWithIcon: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../../../ButtonWithIcon").IButtonWithIcon & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLButtonElement>>, any, {
    options?: boolean | undefined;
    marker?: boolean | undefined;
}, never>;
export declare const StyledArrowIcon: import("styled-components").StyledComponent<import("react").FunctionComponent<import("react").SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>, any, {
    expanded: boolean;
}, never>;
export declare const OptionsBtnWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ChildrenWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledScTagLink: import("styled-components").StyledComponent<({ addr, children, systemId, command, className, as, appearance, showMenu, onClick: onClickFromProps, }: import("react").PropsWithChildren<import("../../../ScTag").IScTagLinkProps>) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
