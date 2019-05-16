"use strict";

import ClassNames from "classnames";
import { RenderableProps, VNode, h } from "preact";

import { Helpers, IBreakpointProperties } from "../modifiers";

export function Level(props?: RenderableProps<Level.IProperties>, context?: any): VNode<Level.IProperties> {

    const { children, className, ...attributes } = props;
    const classNames: string = ClassNames("level",
        Helpers.getHelpersClassNames(props), Helpers.getCommonClassNames(props), className);

    return (
        <nav class={ classNames } { ...attributes }>
            { children }
        </nav>
    );
}

export namespace Level {

    export interface IProperties
        extends JSX.HTMLAttributes, Helpers.IProperties, IBreakpointProperties {}

    export function Item(props?: RenderableProps<Item.IProperties>, context?: any): VNode<Item.IProperties> {

        const { children, className, ...attributes } = props;
        const classNames: string = ClassNames("level", Helpers.getHelpersClassNames(props), className);

        return (
            <div class={ classNames } { ...attributes }>
                { children }
            </div>
        );
    }

    export namespace Item {

        // tslint:disable-next-line: no-shadowed-variable
        export interface IProperties extends JSX.HTMLAttributes, Helpers.IProperties {}
    }

    export function Side(props?: RenderableProps<Side.IProperties>, context?: any): VNode<Side.IProperties> {

        const { children, className, position, ...attributes } = props;
        const classNames: string = ClassNames(`level-${ position }`, Helpers.getHelpersClassNames(props), className);

        return (
            <div class={ classNames } { ...attributes }>
                { children }
            </div>
        );
    }

    export namespace Side {

        export const enum Position {
            Left  = "left",
            Right = "right",
        }

        // tslint:disable-next-line: no-shadowed-variable
        export interface IProperties extends JSX.HTMLAttributes, Helpers.IProperties {
            position: Position;
        }
    }
}
