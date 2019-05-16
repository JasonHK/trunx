"use strict";

import ClassNames from "classnames";
import { RenderableProps, VNode, h } from "preact";

import {
    Helpers,
    IElementScaleProperties, IElementStateProperties, IForegroundColorProperties, IFixedSizeProperties
} from "../modifiers";

export function Textarea(props?: RenderableProps<Textarea.IProperties>, context?: any): VNode<Textarea.IProperties> {

    const { className, ...attributes } = props;
    const classNames: string = ClassNames("textarea",
        Helpers.getHelpersClassNames(props), Helpers.getCommonClassNames(props), className);

    return (
        <textarea class={ classNames } { ...attributes } />
    );
}

export namespace Textarea {

    export interface IProperties
        extends JSX.HTMLAttributes, Helpers.IProperties,
                IElementScaleProperties, IElementStateProperties, IFixedSizeProperties, IForegroundColorProperties {}
}

export default Textarea;
