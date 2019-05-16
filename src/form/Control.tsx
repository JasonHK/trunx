"use strict";

import ClassNames from "classnames";
import { RenderableProps, VNode, h } from "preact";

import { Helpers, IElementScaleProperties, IElementStateProperties } from "../modifiers";

export function Control(props?: RenderableProps<Control.IProperties>, context?: any): VNode<Control.IProperties> {

    const { children, className, expanded, icons, ...attributes } = props;
    const classNames: string = ClassNames("control", {
        "is-expanded":     expanded,
        "has-icons-left":  ((icons === Control.IconsPosition.Left) || (icons === Control.IconsPosition.Both)),
        "has-icons-right": ((icons === Control.IconsPosition.Right) || (icons === Control.IconsPosition.Both)),
    }, Helpers.getHelpersClassNames(props), Helpers.getCommonClassNames(props), className);

    return (
        <div class={ classNames } { ...attributes }>
            { children }
        </div>
    );
}

export namespace Control {

    export const enum IconsPosition {
        Left,
        Right,
        Both,
    }

    export interface IProperties 
        extends JSX.HTMLAttributes, Helpers.IProperties, 
                IElementScaleProperties, IElementStateProperties {
        expanded?: boolean;
        icons?:    IconsPosition;
    }
}

export default Control;
