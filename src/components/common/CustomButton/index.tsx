"use client";

import { BUTTON_ICON_POSITIONS } from "@/constants/button";
import type { CustomButtonProps } from "./types";
import {
  buildStyledButtonConfig,
  buildStyledButtonTextConfig,
  mergeButtonFeatures,
  resolveButtonAppearance,
  resolveButtonEvents,
  resolveButtonHover,
  resolveButtonIcon,
  resolveButtonMargin,
  resolveButtonState,
} from "./resolveButtonConfig";
import { CustomButtonStyles } from "./styles";

export type { CustomButtonProps } from "./types";

export default function CustomButton(props: CustomButtonProps) {
  const {
    text,
    children,
    type = "button",
    className,
    textClassName,
    contentClassName,
    customBox,
    underline,
    textClass,
    buttonContentClass,
    buttonType = "",
    isOtpVerifying = false,
    isApplyInnerMargin = true,
    isCursorPointer = true,
  } = props;

  const features = mergeButtonFeatures(props);
  const appearance = resolveButtonAppearance(features.appearance, props);
  const margin = resolveButtonMargin(features.margin, props);
  const hover = resolveButtonHover(features.hover, props);
  const icon = resolveButtonIcon(features.icon, props);
  const events = resolveButtonEvents(features.events, props);
  const buttonState = resolveButtonState(features.state, props);

  const buttonStyle = buildStyledButtonConfig(appearance, margin, hover, {
    isLoading: buttonState.loading,
    isOtpVerifying,
    buttonType,
    isCursorPointer,
  });
  const textStyle = buildStyledButtonTextConfig(appearance, underline);
  const contentStyle = { iconGap: buttonStyle.iconGap };

  const isDisabled = buttonState.disabled || buttonState.loading;
  const label = children ?? text;
  const textClassResolved = textClassName ?? textClass;

  const renderIcon = icon.active ? (
    <CustomButtonStyles.IconSlot aria-hidden>{icon.node}</CustomButtonStyles.IconSlot>
  ) : null;

  const renderLabel = customBox ? (
    <span>{label}</span>
  ) : (
    <CustomButtonStyles.ButtonText className={textClassResolved} $textStyle={textStyle}>
      {label}
    </CustomButtonStyles.ButtonText>
  );

  return (
    <CustomButtonStyles.StyledButton
      type={type}
      className={className}
      disabled={isDisabled}
      onClick={events.onClick}
      onMouseEnter={events.onMouseEnter}
      onMouseLeave={events.onMouseLeave}
      onFocus={events.onFocus}
      onBlur={events.onBlur}
      $buttonStyle={buttonStyle}
    >
      {buttonState.loading ? (
        <CustomButtonStyles.ButtonText $textStyle={textStyle}>
          {buttonState.loadingContent}
        </CustomButtonStyles.ButtonText>
      ) : (
        <CustomButtonStyles.ContentWrapper
          className={contentClassName ?? buttonContentClass}
          $hasInnerMarginTop={isApplyInnerMargin ? margin.top !== "0" : false}
        >
          <CustomButtonStyles.ButtonContent $buttonStyle={contentStyle}>
            {icon.active && icon.position === BUTTON_ICON_POSITIONS.LEFT ? renderIcon : null}
            {renderLabel}
            {icon.active && icon.position === BUTTON_ICON_POSITIONS.RIGHT ? renderIcon : null}
          </CustomButtonStyles.ButtonContent>
        </CustomButtonStyles.ContentWrapper>
      )}
    </CustomButtonStyles.StyledButton>
  );
}
