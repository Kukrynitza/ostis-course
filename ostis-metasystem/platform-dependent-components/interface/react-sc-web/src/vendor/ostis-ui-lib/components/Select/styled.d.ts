/// <reference types="react" />
import { InputStatus } from "../../model/input";
export declare const SelectWrapper: import("styled-components").StyledComponent<"div", any, {
    $focused: boolean;
    $disabled: boolean;
    $multiple: boolean;
    $status?: InputStatus | undefined;
}, never>;
export declare const Hidden: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const NativeSelect: import("styled-components").StyledComponent<"select", any, {}, never>;
export declare const IconsLeft: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ValueWrapper: import("styled-components").StyledComponent<"div", any, {
    $fixHeight: boolean;
    $multiple: boolean;
}, never>;
export declare const SelectInput: import("styled-components").StyledComponent<"input", any, {
    $multiple: boolean;
}, never>;
export declare const StyledOpenStatusButton: import("styled-components").StyledComponent<import("react").FunctionComponent<import("react").SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>, any, {
    $opened: boolean;
}, never>;
export declare const IconClose: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const IconPanel: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledDropdown: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../Dropdown").DropdownProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>, any, {}, never>;
export declare const StringValueWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const PopupInputWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const PopupValuesWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const PopupChipsWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledPopup: import("styled-components").StyledComponent<({ children, className, onClose }: import("react").PropsWithChildren<import("../Popup").IPopupProps>) => import("react").ReactPortal, any, {}, never>;
export declare const PopupHeader: import("styled-components").StyledComponent<"div", any, {}, never>;
