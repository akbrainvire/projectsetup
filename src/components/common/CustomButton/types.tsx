import type React from "react";
import type { ButtonIconPosition, ButtonVariant } from "@/constants/button";

export type ButtonMarginConfig = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

export type ButtonAppearanceConfig = {
  variant?: ButtonVariant;
  backgroundColor?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  padding?: string;
  minWidth?: string;
  fontWeight?: string;
  fontSize?: string;
  hideBoxShadow?: boolean;
};

export type ButtonHoverDisabledConfig = {
  enabled?: false;
  backgroundColor?: never;
  color?: never;
};

export type ButtonHoverEnabledConfig = {
  enabled: true;
  backgroundColor: string;
  color: string;
};

export type ButtonHoverConfig =
  | ButtonHoverDisabledConfig
  | ButtonHoverEnabledConfig;

export type ButtonIconDisabledConfig = {
  enabled?: false;
  icon?: never;
  position?: never;
  size?: never;
};

export type ButtonIconEnabledConfig = {
  enabled: true;
  icon?: React.ReactNode;
  position?: ButtonIconPosition;
  size?: number;
};

export type ButtonIconConfig =
  | ButtonIconDisabledConfig
  | ButtonIconEnabledConfig;

export type ButtonEventsConfig = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
};

export type ButtonStateConfig = {
  disabled?: boolean;
  loading?: boolean;
  loadingContent?: React.ReactNode;
};

export type CustomButtonFeatures = {
  appearance?: ButtonAppearanceConfig;
  hover?: ButtonHoverConfig;
  icon?: ButtonIconConfig;
  events?: ButtonEventsConfig;
  state?: ButtonStateConfig;
  margin?: ButtonMarginConfig;
};

export type CustomButtonProps = {
  text?: React.ReactNode;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  textClassName?: string;
  contentClassName?: string;
  features?: CustomButtonFeatures;
  appearance?: ButtonAppearanceConfig;
  hover?: ButtonHoverConfig;
  iconConfig?: ButtonIconConfig;
  events?: ButtonEventsConfig;
  state?: ButtonStateConfig;
  margin?: ButtonMarginConfig;
  color?: string;
  height?: string;
  radius?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  customBox?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  border?: string;
  width?: string;
  customHover?: string;
  customPadding?: string;
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
  hoveredColor?: string;
  underline?: string;
  isHideBoxShadow?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  textClass?: string;
  buttonContentClass?: string;
  fontWeight?: string;
  buttonType?: "dashboardButton" | "action" | "";
  minWidth?: string;
  isOtpVerifying?: boolean;
  isApplyInnerMargin?: boolean;
  isCursorPointer?: boolean;
  loadingContent?: React.ReactNode;
};

export type ResolvedButtonMargin = {
  top: string;
  right: string;
  bottom: string;
  left: string;
};

export type ResolvedButtonAppearance = {
  variant: ButtonVariant;
  backgroundColor: string;
  color: string;
  border: string;
  borderRadius: string;
  width: string;
  height: string;
  padding: string;
  minWidth: string;
  fontWeight: string;
  fontSize: string;
  hideBoxShadow: boolean;
};

export type ResolvedButtonHoverInactive = {
  active: false;
};

export type ResolvedButtonHoverActive = {
  active: true;
  backgroundColor: string;
  color: string;
};

export type ResolvedButtonHover =
  | ResolvedButtonHoverInactive
  | ResolvedButtonHoverActive;

export type ResolvedButtonIconInactive = {
  active: false;
};

export type ResolvedButtonIconActive = {
  active: true;
  node: React.ReactNode;
  position: ButtonIconPosition;
  size: number;
};

export type ResolvedButtonIcon =
  | ResolvedButtonIconInactive
  | ResolvedButtonIconActive;

export type StyledButtonStyleConfig = {
  backgroundColor: string;
  color: string;
  border: string;
  borderRadius: string;
  width: string;
  height: string;
  padding: string;
  minWidth: string;
  fontWeight: string;
  hideBoxShadow: boolean;
  margin: ResolvedButtonMargin;
  hover: ResolvedButtonHover;
  isLoading: boolean;
  isOtpVerifying: boolean;
  buttonType: "dashboardButton" | "action" | "";
  isCursorPointer: boolean;
  iconGap: string;
};

export type StyledButtonTextConfig = {
  fontSize: string;
  underline?: string;
};
