"use strict";

import ClassNames from "classnames";
import { RenderableProps, VNode, h } from "preact";

import { Helpers, IElementScaleProperties } from "../modifiers";

export function Delete(props?: RenderableProps<Delete.IProperties>, context?: any): VNode<Delete.IProperties> {

    const { className, element, ...attributes } = props;
    const classNames: string = ClassNames("delete",
        Helpers.getHelpersClassNames(props), Helpers.getCommonClassNames(props), className);

    const TAG: Delete.Element = element;
    return (
        <TAG class={ classNames } { ...attributes } />
    );
}

export namespace Delete {

    export const enum Element {
        A      = "a",
        BUTTON = "button",
    }

    export interface IProperties
        extends JSX.HTMLAttributes, Helpers.IProperties,
                IElementScaleProperties {
        element: Element;
    }
}

export default Delete;
