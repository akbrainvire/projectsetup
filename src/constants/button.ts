import { SITE_COLORS } from "@/utility/strings";

export const BUTTON_VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  CUSTOM: "custom",
} as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

export const BUTTON_ICON_POSITIONS = {
  LEFT: "left",
  RIGHT: "right",
} as const;

export type ButtonIconPosition =
  (typeof BUTTON_ICON_POSITIONS)[keyof typeof BUTTON_ICON_POSITIONS];

export const BUTTON_VARIANT_STYLES = {
  [BUTTON_VARIANTS.PRIMARY]: {
    backgroundColor: SITE_COLORS.NAVY_DARK,
    color: SITE_COLORS.WHITE,
    border: "none",
  },
  [BUTTON_VARIANTS.SECONDARY]: {
    backgroundColor: SITE_COLORS.WHITE,
    color: SITE_COLORS.BLUE_DEEP,
    border: `1px solid ${SITE_COLORS.BLUE_DEEP}`,
  },
  [BUTTON_VARIANTS.CUSTOM]: {
    backgroundColor: SITE_COLORS.WHITE,
    color: SITE_COLORS.BLUE_DEEP,
    border: "none",
  },
} as const;

export const BUTTON_DEFAULTS = {
  HEIGHT: "auto",
  BORDER_RADIUS: "12px",
  PADDING: "16px 32px",
  FONT_SIZE: "12px",
  ICON_GAP: "10px",
  ICON_SIZE: 20,
  ICON_POSITION: BUTTON_ICON_POSITIONS.RIGHT,
  MARGIN: {
    TOP: "0",
    RIGHT: "0",
    BOTTOM: "0",
    LEFT: "0",
  },
} as const;
