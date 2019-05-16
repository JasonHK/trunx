"use strict";

import ClassNames from "classnames";
import { RenderableProps, VNode, h } from "preact";

import { Helpers } from "../modifiers";

import { Omit } from "../types/Helpers";
import { MigrateProperties } from "../types/Preact";

export function Box(props: RenderableProps<Box.IProperties>, context?: any): VNode<Box.IProperties> {

    const { children, className, ...attributes } = props;
    const classNames: string = ClassNames("box", Helpers.getHelpersClassNames(props), className);

    return (
        <div class={ classNames } { ...attributes }>
            { children }
        </div>
    );
}

export namespace Box {

    export interface IProperties extends JSX.HTMLAttributes, Helpers.IProperties {}
}

export default Box;
