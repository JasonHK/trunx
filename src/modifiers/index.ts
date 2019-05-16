"use strict";

import { ClassArraies, ClassDictionaries } from "classnames";

import BasicHelpers from "./basic";
import ColorHelpers from "./color";
import CommonHelpers from "./common";
import ResponsiveHelpers from "./responsive";
import TypographyHelpers from "./typography";

export interface IHelpersProperties extends BasicHelpers.IProperties, ColorHelpers.IProperties, ResponsiveHelpers.IProperties, TypographyHelpers.IProperties {}

export namespace Helpers {

    export interface IProperties extends IHelpersProperties {}
    export type Properties = IProperties;

    export function getHelpersClassNames(props: Properties): ClassArraies {

        const basic: ClassArraies = BasicHelpers.getAllClassNames(props);
        const color: ClassArraies = ColorHelpers.getAllClassNames(props);
        const responsive: ClassArraies = ResponsiveHelpers.getAllClassNames(props);
        const typography: ClassArraies = TypographyHelpers.getAllClassNames(props);

        return [...basic, ...color, ...responsive, ...typography];
    }

    export function getCommonClassNames(props: CommonHelpers.Properties): ClassArraies {

        return CommonHelpers.getAllClassNames(props);
    }
}

export * from "./basic";
export * from "./color";
export * from "./common";
export * from "./responsive";
export * from "./typography";

export default Helpers;
