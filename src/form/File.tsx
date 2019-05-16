"use strict";

import ClassNames from "classnames";
import { RenderableProps, VNode, h } from "preact";

import {
    Helpers,
    IElementAlignmentProperties, IElementScaleProperties, IForegroundColorProperties
} from "../modifiers";

export function File(props?: RenderableProps<File.IProperties>, context?: any): VNode<File.IProperties> {

    const { boxed, children, className, displayName, fullwidth, ctaPosition, ref, ...attributes } = props;
    const classNames: string = ClassNames("file", {
        "is-fullwidth": !!fullwidth,
        "has-name":     !!displayName,
        "is-boxed":     !!boxed,
        [`is-${ ctaPosition }`]: !!ctaPosition,
    }, Helpers.getHelpersClassNames(props), Helpers.getHelpersClassNames(props), className);

    return (
        <div class={ classNames }>
            <label class="file-label">
                <input class="file-input" type="file" ref={ ref } { ...attributes } />

                { children }
            </label>
        </div>
    );
}

export namespace File {

    export const enum Position {
        Right = "right",
    }

    export interface IProperties
            extends JSX.HTMLAttributes, Helpers.IProperties,
                    IElementAlignmentProperties, IElementScaleProperties, IForegroundColorProperties {
        boxed?:       boolean;
        ctaPosition?: Position;
        displayName?: boolean;
        fullwidth?:   boolean;
    }

    // tslint:disable-next-line: max-line-length
    export function CallToAction(props?: RenderableProps<CallToAction.IProperties>, context?: any): VNode<CallToAction.IProperties> {

        const { children, className, ...attributes } = props;
        const classNames: string = ClassNames("file-cta", Helpers.getHelpersClassNames(props), className);

        return (
            <span class={ classNames } { ...attributes }>
                { children }
            </span>
        );
    }

    export namespace CallToAction {

        // tslint:disable-next-line: no-shadowed-variable
        export interface IProperties extends JSX.HTMLAttributes, Helpers.IProperties {}
    }

    export function Icon(props?: RenderableProps<Icon.IProperties>, context?: any): VNode<Icon.IProperties> {

        const { children, className, ...attributes } = props;
        const classNames: string = ClassNames("file-icon", Helpers.getHelpersClassNames(props), className);

        return (
            <span class={ classNames } { ...attributes }>
                { children }
            </span>
        );
    }

    export namespace Icon {

        // tslint:disable-next-line: no-shadowed-variable
        export interface IProperties extends JSX.HTMLAttributes, Helpers.IProperties {}
    }

    export function Label(props?: RenderableProps<Label.IProperties>, context?: any): VNode<Label.IProperties> {

        const { children, className, ...attributes } = props;
        const classNames: string = ClassNames("file-label", Helpers.getHelpersClassNames(props), className);

        return (
            <span class={ classNames } { ...attributes }>
                { children }
            </span>
        );
    }

    export namespace Label {

        // tslint:disable-next-line: no-shadowed-variable
        export interface IProperties extends JSX.HTMLAttributes, Helpers.IProperties {}
    }

    export function Name(props?: RenderableProps<Name.IProperties>, context?: any): VNode<Name.IProperties> {

        const { children, className, ...attributes } = props;
        const classNames: string = ClassNames("file-name", Helpers.getHelpersClassNames(props), className);

        return (
            <span class={ classNames } { ...attributes }>
                { children }
            </span>
        );
    }

    export namespace Name {

        // tslint:disable-next-line: no-shadowed-variable
        export interface IProperties extends JSX.HTMLAttributes, Helpers.IProperties {}
    }
}

export default File;
