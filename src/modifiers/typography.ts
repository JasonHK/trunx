"use strict";

import { ClassArraies, ClassDictionaries } from "classnames";

import { ColorHelpers, ITextColorProperties } from "./color";

export const enum FontFamily {
    SansSerif = "sans-serif",
    Monospace = "monospace",
    Primary   = "primary",
    Secondary = "secondary",
    Code      = "code",
}

export const enum TextAlignment {
    Centered  = "centered",
    Justified = "justified",
    Left      = "left",
    Right     = "right",
}

export const enum TextSize {
    Size1 = 1,
    Size2 = 2,
    Size3 = 3,
    Size4 = 4,
    Size5 = 5,
    Size6 = 6,
    Size7 = 7,
}

export const enum TextTransformation {
    Capitalized = "capitalized",
    Lowercase   = "lowercase",
    Uppercase   = "uppercase",
}

export const enum TextWeight {
    Light =    "light",
    Normal =   "normal",
    SemiBold = "semibold",
    Bold =     "bold",
}

export interface ITypographyProperties extends ITextColorProperties {
    fontFamily?:              FontFamily;
    textAlign?:               TextAlignment;
    textItalic?:              boolean;
    textSize?:                TextSize;
    textTransform?:           TextTransformation;
    textWeight?:              TextWeight;
}

export namespace TypographyHelpers {

    export interface IProperties extends ITypographyProperties {}
    export type Properties = IProperties;

    export function getAllClassNames(props: Properties): ClassArraies {

        const fontFamily: ClassDictionaries = getFontFamily(props);
        const textAlign: ClassDictionaries = getTextAlignment(props);
        const textColor: ClassDictionaries = getTextColor(props);
        const textSize: ClassDictionaries = getTextSize(props);
        const textTransform: ClassDictionaries = getTextTransformation(props);
        const textWeight: ClassDictionaries = getTextWeight(props);

        return [fontFamily, textAlign, textColor, textSize, textTransform, textWeight];
    }

    export function getFontFamily(props: Properties): ClassDictionaries {

        const { fontFamily } = props;
        return { [`is-${ fontFamily }`]: !!fontFamily };
    }

    export function getTextAlignment(props: Properties): ClassDictionaries {

        const { textAlign } = props;
        return { [`has-text-${ textAlign }`]: !!textAlign };
    }

    export function getTextColor(props: Properties): ClassDictionaries {

        return ColorHelpers.getTextColor(props);
    }

    export function getTextSize(props: Properties): ClassDictionaries {

        const { textSize } = props;
        return { [`is-size-${ textSize }`]: !!textSize };
    }

    export function getTextTransformation(props: Properties): ClassDictionaries {

        const { textItalic, textTransform } = props;
        return {
            "is-italic": !!textItalic,
            [`is-${ textTransform }`]: !!textTransform,
        };
    }

    export function getTextWeight(props: Properties): ClassDictionaries {

        const { textWeight } = props;
        return { [`has-text-weight-${ textWeight }`]: !!textWeight };
    }
}

export { BulmaColor, BulmaShade, BulmaTone, ITextColorProperties } from "./color";

export default TypographyHelpers;
