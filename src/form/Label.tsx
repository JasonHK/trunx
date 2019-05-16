"use strict";

import ClassNames from "classnames";
import { RenderableProps, VNode, h } from "preact";

import { Helpers, IElementScaleProperties } from "../modifiers";

export function Label(props?: RenderableProps<Label.IProperties>, context?: any): VNode<Label.IProperties> {

    const { children, className, ...attributes } = props;
    const classNames: string = ClassNames("label",
        Helpers.getHelpersClassNames(props), Helpers.getCommonClassNames(props), className);

    return (
        <label className={ classNames } { ...attributes }>
            { children }
        </label>
    );
}

export namespace Label {

    export interface IProperties
        extends JSX.HTMLAttributes, Helpers.IProperties,
                IElementScaleProperties {}
}

export default Label;
