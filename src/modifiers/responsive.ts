"use strict";

import { ClassArraies, ClassDictionaries } from "classnames";

import { TextAlignment, TextSize } from "./typography";

type ViewpointProperty<Value, Restrictable extends boolean = false> = {
    value?: Value;
} & (Restrictable extends true ? { only?: boolean } : {});

export enum ClientViewpoint {
    Mobile     = "mobile",
    Tablet     = "tablet",
    Touch      = "touch",
    Desktop    = "desktop",
    Widescreen = "widescreen",
    FullHD     = "fullhd",
}

export const enum ContentDisplay {
    Block       = "block",
    Flex        = "flex",
    Inline      = "inline",
    InlineBlock = "inline-block",
    InlineFlex  = "inline-flex",
}

export interface IBreakpointProperties {
    breakpoint?: ClientViewpoint;
}

export interface IViewpointProperties<Restrictable extends boolean = false> {
    display?:   ViewpointProperty<ContentDisplay, Restrictable>;
    hidden?:    ViewpointProperty<boolean, Restrictable>;
    invisible?: ViewpointProperty<boolean, Restrictable>;
    textAlign?: ViewpointProperty<TextAlignment, Restrictable>;
    textSize?:  ViewpointProperty<TextSize>;
}

export interface IResponsiveProperties {
    mobile?:     IViewpointProperties;
    tablet?:     IViewpointProperties<true>;
    touch?:      IViewpointProperties;
    desktop?:    IViewpointProperties<true>;
    widescreen?: IViewpointProperties<true>;
    fullhd?:     IViewpointProperties;
}

export namespace ResponsiveHelpers {

    export interface IProperties extends IResponsiveProperties {}
    export type Properties = IProperties;

    export function getAllClassNames(props: Properties): ClassArraies {

        const responsive: ClassArraies = getResponsiveProperties(props);
        return [...responsive];
    }

    export function getClientBreakpoint(props: IBreakpointProperties): ClassDictionaries {

        const { breakpoint } = props;
        return { [`is-${ breakpoint }`]: !!breakpoint };
    }

    export function getResponsiveProperties(props: Properties): ClassArraies {

        const classNames: ClassArraies = [];
        Object.keys(ClientViewpoint).forEach((size) => {
            const viewpoint: string = ClientViewpoint[size];

            if ((typeof props[viewpoint] === "object") && (props[viewpoint] !== null)) {
                classNames.push(getViewpointProperties(viewpoint, props[viewpoint]));
            }
        });

        return classNames;
    }

    function getViewpointProperties(viewpoint: string, props: IViewpointProperties<true>): ClassArraies {

        const { display, hidden, invisible, textAlign, textSize } = props;

        const classNames: ClassArraies = [];
        classNames.push(getContentDisplay(viewpoint, display));
        classNames.push(getContentHidden(viewpoint, hidden));
        classNames.push(getContentInvisible(viewpoint, invisible));
        classNames.push(getTextAlignment(viewpoint, textAlign));
        classNames.push(getTextSize(viewpoint, textSize));

        return classNames;
    }

    function getContentDisplay(viewpoint: string, display?: IViewpointProperties<true>["display"]): ClassDictionaries {

        return (((typeof display === "object") && (display !== null)) ? {
            [`is-${ display.value }-${ viewpoint }${ display.only ? "-only" : "" }`]: !!display.value,
        } : null);
    }

    function getContentHidden(viewpoint: string, hidden?: IViewpointProperties<true>["hidden"]): ClassDictionaries {

        return (((typeof hidden === "object") && (hidden !== null)) ? {
            [`is-hidden-${ viewpoint }${ hidden.only ? "-only" : "" }`]: !!hidden.value,
        } : null);
    }

    function getContentInvisible(viewpoint: string, invisible?: IViewpointProperties<true>["invisible"]): ClassDictionaries {

        return (((typeof invisible === "object") && (invisible !== null)) ? {
            [`is-invisible-${ viewpoint }${ invisible.only ? "-only" : "" }`]: !!invisible.value,
        } : null);
    }

    function getTextAlignment(viewpoint: string, align?: IViewpointProperties<true>["textAlign"]): ClassDictionaries {

        return (((typeof align === "object") && (align !== null)) ? {
            [`has-text-${ align.value }-${ viewpoint }${ align.only ? "-only" : "" }`]: !!align.value,
        } : null);
    }

    function getTextSize(viewpoint: string, size?: IViewpointProperties["textSize"]): ClassDictionaries {

        return (((typeof size === "object") && (size !== null)) ? {
            [`is-size-${ size.value }-${ viewpoint }`]: !!size.value,
        } : null);
    }
}

export default ResponsiveHelpers;
