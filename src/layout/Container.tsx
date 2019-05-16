"use strict";

import ClassNames from "classnames";
import { RenderableProps, VNode, h } from "preact";

import { ClientViewpoint, Helpers } from "../modifiers";

// tslint:disable-next-line: max-line-length
export function Container(props?: RenderableProps<Container.IPropertiesBase>, context?: any): VNode<Container.IPropertiesBase>;
// tslint:disable-next-line: max-line-length
export function Container(props?: RenderableProps<Container.IPropertiesBreakpoint>, context?: any): VNode<Container.IPropertiesBreakpoint>;
// tslint:disable-next-line: max-line-length
export function Container(props?: RenderableProps<Container.IPropertiesFluid>, context?: any): VNode<Container.IPropertiesFluid>;
export function Container(props?: RenderableProps<Container.IProperties>, context?: any): VNode<Container.IProperties> {

    const { breakpoint, children, className, fluid, ...attributes } = props;
    const classNames: string = ClassNames("container", {
        "is-fluid": (!!fluid && !breakpoint),
        [`is-${ breakpoint }`]: (!!breakpoint && !fluid),
    }, Helpers.getHelpersClassNames(props), className);

    return (
        <div class={ classNames } { ...attributes }>
            { children }
        </div>
    );
}

export namespace Container {

    export const enum Breakpoint {
        Widescreen = "widescreen",
        FullHD     = "fullhd",
    }

    export interface IProperties extends IPropertiesBase {
        breakpoint?: ClientViewpoint;
        fluid?:      boolean;
    }

    export interface IPropertiesBase extends JSX.HTMLAttributes, Helpers.IProperties {}

    export interface IPropertiesBreakpoint extends IPropertiesBase {
        breakpoint: ClientViewpoint.Widescreen | ClientViewpoint.FullHD;
    }

    export interface IPropertiesFluid extends IPropertiesBase {
        fluid: boolean;
    }
}

export default Container;

type K = keyof typeof Container.Breakpoint;
