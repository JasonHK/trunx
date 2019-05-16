"use strict";

import ClassNames from "classnames";
import { RenderableProps, VNode, h } from "preact";

import {
    Helpers,
    IElementScaleProperties, IElementStateProperties, IForegroundColorProperties
} from "../modifiers";

export function Select(props?: RenderableProps<Select.IProperties>, context?: any): VNode<Select.IProperties> {

    const { children, className, fullwidth, multiple, rounded, ...attributes } = props;
    const classNames: string = ClassNames("select", {
        "is-fullwidth": fullwidth,
        "is-multiple":  multiple,
        "is-rounded":   rounded,
    }, Helpers.getHelpersClassNames(props), Helpers.getCommonClassNames(props), className);

    return (
        <div class={ classNames }>
            <select multiple={ multiple } { ...attributes }>
                { children }
            </select>
        </div>
    );
}

export namespace Select {

    export interface IProperties
        extends JSX.HTMLAttributes, Helpers.IProperties,
                IElementScaleProperties, IElementStateProperties, IForegroundColorProperties {
        fullwidth?: boolean;
        rounded?:   boolean;
    }
}

export default Select;
