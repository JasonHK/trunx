"use strict";

import ClassNames from "classnames";
import { RenderableProps, VNode, h } from "preact";

import { Helpers, IElementScaleProperties, IElementStateProperties, IForegroundColorProperties } from "../modifiers";

import { Omit } from "../types/Helpers";
import { MigrateProperties } from "../types/Preact";

export function Input(props?: RenderableProps<Input.IProperties>, context?: any): VNode<Input.IProperties> {

    const { className, rounded, statics, type, ...attributes } = props;
    const classNames: string = ClassNames("input", {
        "is-rounded": rounded,
        "is-static":  statics,
    }, Helpers.getHelpersClassNames(props), Helpers.getCommonClassNames(props), className);

    return (
        <input class={ classNames } type={ type } { ...attributes } />
    );
}

export namespace Input {

    export const enum Type {
        Date          = "date",
        DateTimeLocal = "datetime-local",
        Email         = "email",
        Hidden        = "hidden",
        Month         = "month",
        Number        = "number",
        Password      = "password",
        Search        = "search",
        Tel           = "tel",
        Text          = "text",
        Time          = "time",
        URL           = "url",
        Week          = "week",
    }

    export interface IProperties
        extends JSX.HTMLAttributes, Helpers.IProperties,
                IElementScaleProperties, IElementStateProperties, IForegroundColorProperties {
        rounded?: boolean;
        statics?: boolean;
        type?:    Type;
    }
    //type ExcludedAttributes = "class";
}

export default Input;
