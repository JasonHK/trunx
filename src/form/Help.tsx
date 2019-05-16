"use strict";

import ClassNames from "classnames";
import { RenderableProps, VNode, h } from "preact";

import { Helpers, IForegroundColorProperties } from "../modifiers";

export function Help(props?: RenderableProps<Help.IProperties>, context?: any): VNode<Help.IProperties> {

    const { children, className, ...attributes } = props;
    const classNames: string = ClassNames("help",
            Helpers.getHelpersClassNames(props), className);

    return (
        <p className={ classNames } { ...attributes }>
            { children }
        </p>
    );
}

export namespace Help {

    export interface IProperties
        extends JSX.HTMLAttributes, Helpers.IProperties,
                IForegroundColorProperties {}
}

export default Help;
