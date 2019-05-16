"use strict";

import ClassNames from "classnames";
import { RenderableProps, VNode, h } from "preact";

import { Helpers } from "../modifiers";

export function Checkbox(props?: RenderableProps<Checkbox.IProperties>, context?: any): VNode<Checkbox.IProperties> {

    const { children, className, disabled, ref, ...attributes } = props;
    const classNames: string = ClassNames("checkbox", Helpers.getHelpersClassNames(props), className);

    return (
        <label class={ classNames } disabled={ disabled }>
            <input type="checkbox" disabled={ disabled } ref={ ref } { ...attributes } />

            { "\u0020" }
            { children }
        </label>
    );
}

export namespace Checkbox {

    export interface IProperties extends JSX.HTMLAttributes, Helpers.IProperties {}
}

export default Checkbox;
