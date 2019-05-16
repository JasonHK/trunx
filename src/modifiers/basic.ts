"use strict";

import { ClassArraies, ClassDictionaries } from "classnames";

export const enum FloatDirection {
    Left  = "left",
    Right = "right",
}

export interface IFloatProperties {
    clearfix?: boolean;
    float?:    FloatDirection;
}

export interface IMiscellaneousProperties {
    clipped?:      boolean;
    hidden?:       boolean;
    invisible?:    boolean;
    overlay?:      boolean;
    radiusless?:   boolean;
    shadowless?:   boolean;
    srOnly?:       boolean;
    unselectable?: boolean;
}

export interface ISpacingProperties {
    marginless?:  boolean;
    paddingless?: boolean;
}

export interface IBasicProperties extends IFloatProperties, IMiscellaneousProperties, ISpacingProperties {}

export namespace BasicHelpers {

    export interface IProperties extends IBasicProperties {}
    export type Properties = IProperties;

    export function getAllClassNames(props: Properties): ClassArraies {

        const float: ClassDictionaries = getFloatProperties(props);
        const miscellaneous: ClassDictionaries = getMiscellaneousProperties(props);
        const spacing: ClassDictionaries = getSpacingProperties(props);

        return [float, miscellaneous, spacing];
    }

    export function getFloatProperties(props: Properties): ClassDictionaries {

        const { clearfix, float } = props;
        return {
            "is-clearfix": !!clearfix,
            [`is-pulled-${ float }`]: !!float,
        };
    }

    export function getMiscellaneousProperties(props: Properties): ClassDictionaries {

        const { clipped, invisible, overlay, radiusless, shadowless, srOnly, unselectable } = props;

        return {
            "is-clipped":      !!clipped,
            "is-invisible":    !!invisible,
            "is-overlay":      !!overlay,
            "is-radiusless":   !!radiusless,
            "is-shadowless":   !!shadowless,
            "is-sr-only":      !!srOnly,
            "is-unselectable": !!unselectable,
        };
    }

    export function getSpacingProperties(props: Properties): ClassDictionaries {

        const { marginless, paddingless } = props;
        return {
            "is-marginless":  !!marginless,
            "is-paddingless": !!paddingless,
        };
    }
}

export default BasicHelpers;
