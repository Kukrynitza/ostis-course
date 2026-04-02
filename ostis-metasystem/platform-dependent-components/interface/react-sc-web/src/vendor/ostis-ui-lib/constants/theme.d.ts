export declare const defaultLightTheme: {
    size: {
        inputBorderWidth: string;
    };
    colors: {
        primary: string;
    };
    checkbox: {
        labelGap: string;
        colors: {
            label: string;
            borderInitial: string;
            borderHover: string;
            disabled: string;
            disabledLabel: string;
        };
        size: {
            outerRadius: string;
            innerRadius: string;
            outer: string;
            inner: string;
        };
        font: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
        };
    };
    select: {
        borderRadius: string;
        dropdownBoxShadow: string;
        colors: {
            placeholder: string;
            text: string;
            initialBackgroundColor: string;
            borderInitial: string;
            borderHover: string;
            borderDisabled: string;
            borderError: string;
            borderErrorHover: string;
            closeButtonBackgroundHover: string;
        };
        size: {
            borderWidth: string;
            initialHeight: string;
            dropdownMaxHeight: string;
            dropdownPadding: string;
        };
        font: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
            placeholderWeight: string;
        };
    };
    input: {
        iconGap: string;
        borderRadius: string;
        colors: {
            disabled: {
                background: string;
                border: string;
                text: string;
            };
            initial: {
                background: string;
                border: string;
                text: string;
            };
            borderHover: string;
            borderFocused: string;
            borderFocusedHover: string;
            borderError: string;
            borderErrorHover: string;
            placeholder: string;
        };
        size: {
            padding: string;
            borderWidth: string;
        };
        font: {
            fontSize: string;
            lineHeight: string;
            inputWeight: string;
            placeholderWeight: string;
            fontFamily: string;
        };
    };
    textarea: {
        borderRadius: string;
        colors: {
            disabled: {
                background: string;
                border: string;
                text: string;
            };
            initial: {
                background: string;
                border: string;
                text: string;
            };
            borderHover: string;
            borderFocused: string;
            borderFocusedHover: string;
            borderError: string;
            borderErrorHover: string;
            placeholder: string;
        };
        size: {
            padding: string;
            borderWidth: string;
        };
        font: {
            fontSize: string;
            lineHeight: string;
            inputWeight: string;
            placeholderWeight: string;
            fontFamily: string;
        };
    };
    button: {
        gap: string;
        borderRadius: string;
        colors: {
            primary: {
                text: string;
                textDisabled: string;
                backgroundDisabled: string;
                backgroundInitial: string;
                backgroundHover: string;
                backgroundActive: string;
            };
            secondary: {
                text: string;
                textDisabled: string;
                backgroundDisabled: string;
                backgroundInitial: string;
                backgroundHover: string;
                backgroundActive: string;
            };
        };
        size: {
            large: {
                padding: string;
            };
            medium: {
                padding: string;
            };
            small: {
                padding: string;
            };
        };
        font: {
            fontFamily: string;
            large: {
                fontSize: string;
                lineHeight: string;
            };
            medium: {
                fontSize: string;
                lineHeight: string;
            };
            small: {
                fontSize: string;
                lineHeight: string;
            };
        };
    };
    popup: {
        colors: {
            overlayBackground: string;
        };
    };
    dropdownOption: {
        colors: {
            text: string;
        };
        size: {
            padding: string;
        };
        font: {
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
        };
    };
    chip: {
        font: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: string;
        };
        size: {
            maxWidth: string;
            width: string;
            gap: string;
            maxWidthText: string;
            padding: string;
            paddingWithIcon: string;
            border: string;
            borderRadius: string;
            borderRadiusIcon: string;
            disabled: {
                border: string;
            };
        };
        colors: {
            backgroundColor: string;
            color: string;
            border: string;
            disabled: {
                color: string;
                border: string;
                backgroundColorIcon: string;
                fillIcon: string;
            };
            hover: {
                backgroundColorIcon: string;
                fillIcon: string;
            };
        };
    };
    iconButton: {
        borderRadius: string;
        colors: {
            background: string;
            backgroundHover: string;
            borderActive: string;
            backgroundDisabled: string;
        };
        size: {
            xlarge: {
                width: string;
                height: string;
                borderRadius: string;
                padding: string;
            };
            large: {
                width: string;
                height: string;
                borderRadius: string;
                padding: string;
            };
            medium: {
                width: string;
                height: string;
                borderRadius: string;
                padding: string;
            };
            small: {
                width: string;
                height: string;
                borderRadius: string;
                padding: string;
            };
        };
    };
};
export type Theme = typeof defaultLightTheme;
