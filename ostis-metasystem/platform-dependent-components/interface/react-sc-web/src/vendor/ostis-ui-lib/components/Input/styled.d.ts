/// <reference types="react" />
type WrapperProps = {
    $isFocused: boolean;
    $isDisabled?: boolean;
    $isError: boolean;
};
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, WrapperProps, never>;
export declare const LeftIcon: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Input: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const RightIcon: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const PasswordIconWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HidePassword: import("styled-components").StyledComponent<import("react").FunctionComponent<import("react").SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>, any, {}, never>;
export declare const ShowPassword: import("styled-components").StyledComponent<import("react").FunctionComponent<import("react").SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>, any, {}, never>;
export {};
