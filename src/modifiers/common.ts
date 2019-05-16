"use strict";

import { ClassArraies, ClassDictionaries } from "classnames";

import { IBreakpointProperties, ResponsiveHelpers } from "./responsive";

export const enum AlignmentHorizontal {
    Centered = "centered",
    Right    = "right",
}

export const enum ElementScale {
    Small  = "small",
    Normal = "normal",
    Medium = "medium",
    Large  = "large",
}

export const enum ElementState {
    Hovered = "hovered",
    Focused = "focused",
}

export interface IElementAlignmentProperties {
    align?: AlignmentHorizontal;
}

export interface IElementScaleProperties {
    scale?: ElementScale;
}

export interface IElementStateProperties {
    loading?: boolean;
    state?:   ElementState;
}

export interface IFixedSizeProperties {
    fixedSize?: boolean;
}

interface ICommonProperties extends IBreakpointProperties, IElementAlignmentProperties, IElementScaleProperties, IElementStateProperties, IFixedSizeProperties {}

export namespace CommonHelpers {

    export type Properties = ICommonProperties;

    export function getAllClassNames(props?: Properties): ClassArraies {

        const align: ClassDictionaries = getElementAlignment(props);
        const breakpoint: ClassDictionaries = getClientBreakpoint(props);
        const scale: ClassDictionaries = getElementSize(props);
        const state: ClassDictionaries = getElementState(props);
        const fixed: ClassDictionaries = getFixedSize(props);

        return [align, breakpoint, scale, state, fixed];
    }

    export function getClientBreakpoint(props: IBreakpointProperties): ClassDictionaries {

        return ResponsiveHelpers.getClientBreakpoint(props);
    }

    export function getElementAlignment(props: IElementAlignmentProperties): ClassDictionaries {

        const { align } = props;
        return { [`is-${ align }`]: !!align };
    }

    export function getElementSize(props: IElementScaleProperties): ClassDictionaries {

        const { scale } = props;
        return { [`is-${ scale }`]: !!scale };
    }

    export function getElementState(props: IElementStateProperties): ClassDictionaries {

        const { loading, state } = props;

        return {
            "is-loading": !!loading,
            [`is-${ state }`]: !!state,
        };
    }

    export function getFixedSize(props: IFixedSizeProperties): ClassDictionaries {

        const { fixedSize } = props;
        return { "has-fixed-size": !!fixedSize };
    }
}

export { ClientViewpoint, IBreakpointProperties } from "./responsive";

export default CommonHelpers;
