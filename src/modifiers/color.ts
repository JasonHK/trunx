"use strict";

import { ClassArraies, ClassDictionaries } from "classnames";

export const enum BulmaTone {
    Primary = "primary",
    Link    = "link",
    Info    = "info",
    Success = "success",
    Warning = "warning",
    Danger  = "danger",
}

export const enum BulmaColor {
    White       = "white",
    Black       = "black",
    Light       = "light",
    Dark        = "dark",
}

export const enum BulmaShade {
    BlackBis    = "black-bis",
    BlackTer    = "black-ter",
    GreyDarker  = "grey-darker",
    GreyDark    = "grey-dark",
    Grey        = "grey",
    GreyLight   = "grey-light",
    GreyLighter = "grey-lighter",
    WhiteTer    = "white-ter",
    WhiteBis    = "white-bis",
}

type BulmaColorSelector<Color extends boolean, Shade extends boolean> = BulmaTone | (Color extends true ? BulmaColor : never) | (Shade extends true ? BulmaShade : never);

export interface IBackgroundColorProperties<Color extends boolean = true, Shade extends boolean = true> {
    backgroundColor?: BulmaColorSelector<Color, Shade>;
}

export interface IForegroundColorProperties<Color extends boolean = true, Shade extends boolean = false> {
    color?: BulmaColorSelector<Color, Shade>;
}

export interface ITextColorProperties<Color extends boolean = true, Shade extends boolean = true> {
    textColor?: BulmaColorSelector<Color, Shade>;
}

export interface IColorProperties<Color extends boolean = true, Shade extends boolean = true>
        extends IBackgroundColorProperties<Color, Shade>, ITextColorProperties<Color, Shade> {}

export namespace ColorHelpers {

    export interface IProperties extends IColorProperties {}
    export type Properties = IProperties;

    export function getAllClassNames(props: Properties & IForegroundColorProperties<true, true>): ClassArraies {

        const backgroundColor: ClassDictionaries = getBackgroundColor(props);
        const foregroundColor: ClassDictionaries = getForegroundColor(props);
        const textColor: ClassDictionaries = getTextColor(props);

        return [backgroundColor, foregroundColor, textColor];
    }

    export function getBackgroundColor(props: Properties): ClassDictionaries {

        const { backgroundColor } = props;
        return { [`has-background-${ backgroundColor }`]: !!backgroundColor };
    }

    export function getForegroundColor(props: IForegroundColorProperties<true, true>): ClassDictionaries {

        const { color } = props;
        return { [`is-${ color }`]: !!color };
    }

    export function getTextColor(props: Properties): ClassDictionaries {

        const { textColor } = props;
        return { [`has-text-${ textColor }`]: !!textColor };
    }
}

export default ColorHelpers;
