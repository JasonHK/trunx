"use strict";

import ClassNames from "classnames";
import { RenderableProps, VNode, h } from "preact";

import { Helpers } from "../modifiers";

export function Radio(props?: RenderableProps<Radio.IProperties>, context?: any): VNode<Radio.IProperties> {

    const { children, className, disabled, ref, ...attributes } = props;
    const classNames: string = ClassNames("radio", Helpers.getHelpersClassNames(props), className);

    return (
        <label class={ classNames } disabled={ disabled }>
            <input type="radio" disabled={ disabled } ref={ ref } { ...attributes } />

            { "\u0020" }
            { children }
        </label>
    );
}

export namespace Radio {

    export interface IProperties extends JSX.HTMLAttributes, Helpers.IProperties {}
}

export default Radio;
