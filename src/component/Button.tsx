import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  ISizeProps,
  ITextColorHelpersProps,
  mainColorsPropsToClassenames,
  sizePropsToClassenames,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IButtonProps extends IMainColorsProps, ISizeProps, ITextColorHelpersProps {
  disabled?: boolean
  href?: string
  isActive?: boolean
  isBlack?: boolean
  isDark?: boolean
  isFocused?: boolean
  isFullwidth?: boolean
  isInverted?: boolean
  isLight?: boolean
  isLink?: boolean
  isLoading?: boolean
  isNormal?: boolean
  isOutlined?: boolean
  isRounded?: boolean
  isStatic?: boolean
  isText?: boolean
  isWhite?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: "reset" | "submit"
}

export default class Button extends React.Component<IButtonProps> {
  render() {
    const {
      disabled,
      href,
      isActive,
      isBlack,
      isDark,
      isFocused,
      isFullwidth,
      isInverted,
      isLight,
      isLink,
      isLoading,
      isNormal,
      isOutlined,
      isRounded,
      isStatic,
      isText,
      isWhite,
      onClick,
      type,
      ...props
    } = this.props

    const className = classnames("button",
      {
        "is-active": isActive,
        "is-black": isBlack,
        "is-dark": isDark,
        "is-focused": isFocused,
        "is-fullwidth": isFullwidth,
        "is-inverted": isInverted,
        "is-light": isLight,
        "is-link": isLink,
        "is-loading": isLoading,
        "is-normal": isNormal,
        "is-outlined": isOutlined,
        "is-rounded": isRounded,
        "is-static": isStatic,
        "is-text": isText,
        "is-white": isWhite,
      },
      mainColorsPropsToClassenames(this.props),
      sizePropsToClassenames(this.props),
      textColorHelpersPropsToClassenames(this.props),
    )

    if (href) {
      return (
        <a
          className={className}
          href={href}
          {...props}
        >
          {this.props.children}
        </a>
      )
    }

    if (type) {
      return (
        <input
          className={className}
          type={type}
          {...props}
        />
      )
    }

    return (
      <button
        className={className}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {this.props.children}
      </button>
    )
  }
}
