export const DISCOUNT_CODE_INPUT_STATES = {
  IDLE: "idle",
  APPLIED: "applied",
  ERROR: "error",
} as const;

export const DISCOUNT_CODE_INPUT_DEFAULTS = {
  MAX_WIDTH: "100%",
  HEIGHT: "44px",
  BORDER_RADIUS: "4px",
  PADDING: "0 44px 0 22px",
  CARD_GAP: "8px",
  WRAPPER_GAP: "8px",
  ERROR_PADDING_LEFT: "22px",
  ICON_SIZE: "18px",
} as const;

export const DISCOUNT_CODE_INPUT_TYPOGRAPHY = {
  INPUT: {
    FONT_SIZE: "16px",
    FONT_WEIGHT: "500",
    LINE_HEIGHT: "1",
    PLACEHOLDER_FONT_WEIGHT: "400",
  },
  ACTION: {
    FONT_SIZE: "16px",
    FONT_WEIGHT: "600",
    LINE_HEIGHT: "1",
  },
  ERROR: {
    FONT_SIZE: "13px",
    FONT_WEIGHT: "400",
    LINE_HEIGHT: "1.4",
  },
} as const;
