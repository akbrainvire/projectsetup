import type { ReactNode } from "react";
import { Icons } from "@/assets/svg";
import {
  BUTTON_DEFAULTS,
  BUTTON_ICON_POSITIONS,
  BUTTON_VARIANTS,
  BUTTON_VARIANT_STYLES,
  type ButtonVariant,
} from "@/constants/button";
import type {
  ButtonAppearanceConfig,
  ButtonEventsConfig,
  ButtonHoverConfig,
  ButtonIconConfig,
  ButtonMarginConfig,
  ButtonStateConfig,
  CustomButtonFeatures,
  CustomButtonProps,
  ResolvedButtonAppearance,
  ResolvedButtonHover,
  ResolvedButtonIcon,
  ResolvedButtonMargin,
  StyledButtonStyleConfig,
  StyledButtonTextConfig,
} from "@/types/button.types";

const resolveVariant = (
  appearance: ButtonAppearanceConfig | undefined,
  legacy: Pick<CustomButtonProps, "isPrimary" | "isSecondary">
): ButtonVariant => {
  if (legacy.isPrimary) {
    return BUTTON_VARIANTS.PRIMARY;
  }
  if (legacy.isSecondary) {
    return BUTTON_VARIANTS.SECONDARY;
  }
  return appearance?.variant ?? BUTTON_VARIANTS.CUSTOM;
};

export const resolveButtonAppearance = (
  appearance: ButtonAppearanceConfig | undefined,
  legacy: CustomButtonProps
): ResolvedButtonAppearance => {
  const variant = resolveVariant(appearance, legacy);
  const preset = BUTTON_VARIANT_STYLES[variant];

  return {
    variant,
    backgroundColor:
      appearance?.backgroundColor ?? legacy.backgroundColor ?? preset.backgroundColor,
    color: appearance?.color ?? legacy.color ?? preset.color,
    border: appearance?.border ?? legacy.border ?? preset.border,
    borderRadius: appearance?.borderRadius ?? legacy.radius ?? BUTTON_DEFAULTS.BORDER_RADIUS,
    width: appearance?.width ?? legacy.width ?? "auto",
    height: appearance?.height ?? legacy.height ?? BUTTON_DEFAULTS.HEIGHT,
    padding: appearance?.padding ?? legacy.customPadding ?? BUTTON_DEFAULTS.PADDING,
    minWidth: appearance?.minWidth ?? legacy.minWidth ?? "",
    fontWeight: appearance?.fontWeight ?? legacy.fontWeight ?? "500",
    fontSize: appearance?.fontSize ?? BUTTON_DEFAULTS.FONT_SIZE,
    hideBoxShadow: appearance?.hideBoxShadow ?? legacy.isHideBoxShadow ?? true,
  };
};

const isHoverEnabledConfig = (
  hover: ButtonHoverConfig | undefined,
  legacy: CustomButtonProps
): boolean => {
  if (hover?.enabled === true) {
    return Boolean(hover.backgroundColor && hover.color);
  }
  return Boolean(legacy.customHover && legacy.hoveredColor);
};

export const resolveButtonHover = (
  hover: ButtonHoverConfig | undefined,
  legacy: CustomButtonProps
): ResolvedButtonHover => {
  if (!isHoverEnabledConfig(hover, legacy)) {
    return { active: false };
  }

  if (hover?.enabled === true && hover.backgroundColor && hover.color) {
    return {
      active: true,
      backgroundColor: hover.backgroundColor,
      color: hover.color,
    };
  }

  return {
    active: true,
    backgroundColor: legacy.customHover ?? "",
    color: legacy.hoveredColor ?? "",
  };
};

const isIconEnabledConfig = (
  icon: ButtonIconConfig | undefined,
  legacy: Pick<CustomButtonProps, "icon" | "rightIcon">
): boolean => {
  if (icon?.enabled === true) {
    return true;
  }
  return Boolean(legacy.icon ?? legacy.rightIcon);
};

export const resolveButtonIcon = (
  icon: ButtonIconConfig | undefined,
  legacy: Pick<CustomButtonProps, "icon" | "rightIcon">
): ResolvedButtonIcon => {
  if (!isIconEnabledConfig(icon, legacy)) {
    return { active: false };
  }

  const position =
    icon?.enabled === true && icon.position
      ? icon.position
      : legacy.rightIcon
        ? BUTTON_ICON_POSITIONS.RIGHT
        : BUTTON_ICON_POSITIONS.LEFT;
  const size = icon?.enabled === true && icon.size ? icon.size : BUTTON_DEFAULTS.ICON_SIZE;
  const defaultIcon = <Icons.AppLogoIcon width={size} height={size} />;
  const legacyNode = legacy.rightIcon ?? legacy.icon;
  const node = icon?.enabled === true && icon.icon ? icon.icon : legacyNode ?? defaultIcon;

  return {
    active: true,
    node,
    position,
    size,
  };
};

export const resolveButtonMargin = (
  margin: ButtonMarginConfig | undefined,
  legacy: Pick<
    CustomButtonProps,
    "marginTop" | "marginRight" | "marginBottom" | "marginLeft"
  >
): ResolvedButtonMargin => ({
  top: margin?.top ?? legacy.marginTop ?? BUTTON_DEFAULTS.MARGIN.TOP,
  right: margin?.right ?? legacy.marginRight ?? BUTTON_DEFAULTS.MARGIN.RIGHT,
  bottom: margin?.bottom ?? legacy.marginBottom ?? BUTTON_DEFAULTS.MARGIN.BOTTOM,
  left: margin?.left ?? legacy.marginLeft ?? BUTTON_DEFAULTS.MARGIN.LEFT,
});

export const resolveButtonEvents = (
  events: ButtonEventsConfig | undefined,
  legacy: Pick<CustomButtonProps, "onClick">
): ButtonEventsConfig => ({
  onClick: events?.onClick ?? legacy.onClick,
  onMouseEnter: events?.onMouseEnter,
  onMouseLeave: events?.onMouseLeave,
  onFocus: events?.onFocus,
  onBlur: events?.onBlur,
});

export const resolveButtonState = (
  state: ButtonStateConfig | undefined,
  legacy: CustomButtonProps
): Required<Pick<ButtonStateConfig, "disabled" | "loading">> & {
  loadingContent: ReactNode;
} => ({
  disabled: state?.disabled ?? legacy.disabled ?? false,
  loading: state?.loading ?? legacy.isLoading ?? false,
  loadingContent: state?.loadingContent ?? legacy.loadingContent ?? null,
});

export const mergeButtonFeatures = (props: CustomButtonProps): CustomButtonFeatures => ({
  appearance: {
    ...props.features?.appearance,
    ...props.appearance,
  },
  hover: {
    ...props.features?.hover,
    ...props.hover,
  } as ButtonHoverConfig | undefined,
  icon: {
    ...props.features?.icon,
    ...props.iconConfig,
  } as ButtonIconConfig | undefined,
  events: {
    ...props.features?.events,
    ...props.events,
  },
  state: {
    ...props.features?.state,
    ...props.state,
  },
  margin: {
    ...props.features?.margin,
    ...props.margin,
  },
});

export const buildStyledButtonConfig = (
  appearance: ResolvedButtonAppearance,
  margin: ResolvedButtonMargin,
  hover: ResolvedButtonHover,
  options: {
    isLoading: boolean;
    isOtpVerifying: boolean;
    buttonType: "dashboardButton" | "action" | "";
    isCursorPointer: boolean;
  }
): StyledButtonStyleConfig => ({
  backgroundColor: appearance.backgroundColor,
  color: appearance.color,
  border: appearance.border,
  borderRadius: appearance.borderRadius,
  width: appearance.width,
  height: appearance.height,
  padding: appearance.padding,
  minWidth: appearance.minWidth,
  fontWeight: appearance.fontWeight,
  hideBoxShadow: appearance.hideBoxShadow,
  margin,
  hover,
  isLoading: options.isLoading,
  isOtpVerifying: options.isOtpVerifying,
  buttonType: options.buttonType,
  isCursorPointer: options.isCursorPointer,
  iconGap: BUTTON_DEFAULTS.ICON_GAP,
});

export const buildStyledButtonTextConfig = (
  appearance: ResolvedButtonAppearance,
  underline?: string
): StyledButtonTextConfig => ({
  fontSize: appearance.fontSize,
  underline,
});
