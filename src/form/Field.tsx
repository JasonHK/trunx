"use strict";

import ClassNames from "classnames";
import { RenderableProps, VNode, h } from "preact";

import { IElementScaleProperties } from "../modifiers/common";

import { Omit } from "../types/Helpers";
import { MigrateProperties } from "../types/Preact";

export function Field(props?: RenderableProps<Field.NoneProperties>, context?: any): VNode<Field.NoneProperties>;
export function Field(props?: RenderableProps<Field.AddonsProperties>, context?: any): VNode<Field.AddonsProperties>;
export function Field(props?: RenderableProps<Field.GroupedProperties>, context?: any): VNode<Field.GroupedProperties>;
export function Field(props?: RenderableProps<Field.HorizontalProperties>, context?: any): VNode<Field.HorizontalProperties>;
export function Field(props?: RenderableProps<Field.Properties>, context?: any): VNode<Field.Properties> {

    const { addons, addonsAlign, children, className, grouped, groupedAlign, horizontal, multiline, ...attributes } = props;
    const classNames: string = ClassNames("field", {
        "has-addons":           (addons && !horizontal),
        "is-grouped":           (grouped && !horizontal),
        "is-grouped-multiline": ((grouped && !horizontal) && multiline),
        "is-horizontal":        horizontal,
        [`has-addons-${ addonsAlign }`]: ((addons && !horizontal) && !!addonsAlign),
        [`is-grouped-${ groupedAlign }`]: ((grouped && !horizontal) && !!groupedAlign),
    }, className);

    return (
        <div class={ classNames } { ...attributes }>
            { children }
        </div>
    );
}

export namespace Field {

    export const enum Alignment {
        Centered = "centered",
        Right    = "right",
    }

    export type Properties = BaseProperties<IAddonsProperties & IGroupedProperties & IHorizontalProperties>;
    export type NoneProperties = BaseProperties;
    export type AddonsProperties = BaseProperties<IAddonsProperties>;
    export type GroupedProperties = BaseProperties<IGroupedProperties>;
    export type HorizontalProperties = BaseProperties<IHorizontalProperties>;

    type BaseProperties<P = {}> = MigrateProperties<P, JSX.IntrinsicElements["div"]>;

    interface IBaseProperties {
        addons?:       boolean;
        addonsAlign?:  Alignment;
        grouped?:      boolean;
        groupedAlign?: Alignment;
        horizontal?:   boolean;
        multiline?:    boolean;
    }

    interface INoneProperties {}

    interface IAddonsProperties {
        addons:      boolean;
        addonsAlign?: Alignment;
    }

    interface IGroupedProperties {
        grouped:      boolean;
        groupedAlign?: Alignment;
        multiline?:    boolean;
    }

    interface IHorizontalProperties {
        horizontal: boolean;
    }

    //type ExcludedAttributes = "class";

    export function Body(props?: RenderableProps<Body.Properties>, context?: any): VNode<Body.Properties> {

        const { children, className, ...attributes } = props;
        const classNames: string = ClassNames("field-body", className);

        return (
            <div class={ classNames } { ...attributes }>
                { children }
            </div>
        );
    }

    export namespace Body {

        export type Properties = MigrateProperties<IBaseProperties, JSX.IntrinsicElements["div"]>;

        type BaseProperties<P = {}> = MigrateProperties<P, JSX.IntrinsicElements["div"]>;

        interface IBaseProperties {}
        //type ExcludedAttributes = "class";
    }

    export function Label(props?: RenderableProps<Label.Properties>, context?: any): VNode<Label.Properties> {

        const { align, children, className, ...attributes } = props;
        const classNames: string = ClassNames("field-label", align, className);

        return (
            <div class={ classNames } { ...attributes }>
                { children }
            </div>
        );
    }

    export namespace Label {

        export const enum VerticalAlignment {
            Small  = "is-small",
            Normal = "is-normal",
            Medium = "is-medium",
            Large  = "is-large",
        }

        export type Properties = MigrateProperties<IBaseProperties, JSX.IntrinsicElements["div"]>;

        interface IBaseProperties {
            align?:  VerticalAlignment;
        }
        //type ExcludedAttributes = "class";
    }
}

export default Field;
