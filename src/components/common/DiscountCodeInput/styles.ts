import styled, { css } from "styled-components";
import {
  DISCOUNT_CODE_INPUT_DEFAULTS,
  DISCOUNT_CODE_INPUT_STATES,
  DISCOUNT_CODE_INPUT_TYPOGRAPHY,
} from "@/constants/discountCodeInput";
import { NotoSansFont } from "@/styles/fonts";
import type { DiscountCodeInputState } from "./types";
import { SITE_COLORS as c } from "@/utility/strings";

const defaults = DISCOUNT_CODE_INPUT_DEFAULTS;
const inputType = DISCOUNT_CODE_INPUT_TYPOGRAPHY.INPUT;
const actionType = DISCOUNT_CODE_INPUT_TYPOGRAPHY.ACTION;
const errorType = DISCOUNT_CODE_INPUT_TYPOGRAPHY.ERROR;
const sans = NotoSansFont.style.fontFamily;

const appliedCardStyles = css`
  border: 1px solid ${c.LIGHT_GREEN_5};
`;

const errorCardStyles = css`
  border: 1px solid ${c.RED};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${defaults.WRAPPER_GAP};
  width: 100%;
  max-width: ${defaults.MAX_WIDTH};
`;

const Card = styled.div<{ $variant: DiscountCodeInputState }>`
  display: flex;
  align-items: center;
  gap: ${defaults.CARD_GAP};
  width: 100%;
  height: ${defaults.HEIGHT};
  padding: ${defaults.PADDING};
  border-radius: ${defaults.BORDER_RADIUS};
  background: ${c.SOFT_BLUE_BG};
  border: 1px solid transparent;
  box-sizing: border-box;

  ${({ $variant }) =>
    $variant === DISCOUNT_CODE_INPUT_STATES.APPLIED ? appliedCardStyles : null}
  ${({ $variant }) =>
    $variant === DISCOUNT_CODE_INPUT_STATES.ERROR ? errorCardStyles : null}
`;

const StatusIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${defaults.ICON_SIZE};
  height: ${defaults.ICON_SIZE};
  line-height: 0;
`;

const Input = styled.input<{ $variant: DiscountCodeInputState }>`
  flex: 1;
  min-width: 0;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-family: ${sans};
  font-size: ${inputType.FONT_SIZE};
  font-weight: ${inputType.FONT_WEIGHT};
  line-height: ${inputType.LINE_HEIGHT};
  color: ${({ $variant }) =>
    $variant === DISCOUNT_CODE_INPUT_STATES.APPLIED
      ? c.LIGHT_GREEN_5
      : $variant === DISCOUNT_CODE_INPUT_STATES.ERROR
        ? c.RED
        : c.NAVY_DARK};
  padding: 0;

  &::placeholder {
    color: ${c.PLACEHOLDER_MUTED};
    font-weight: ${inputType.PLACEHOLDER_FONT_WEIGHT};
    opacity: 1;
  }

  &:read-only {
    cursor: default;
  }
`;

const ActionButton = styled.button<{ $variant: DiscountCodeInputState }>`
  flex-shrink: 0;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  font-family: ${sans};
  font-size: ${actionType.FONT_SIZE};
  font-weight: ${actionType.FONT_WEIGHT};
  line-height: ${actionType.LINE_HEIGHT};
  text-align: right;
  color: ${({ $variant }) =>
    $variant === DISCOUNT_CODE_INPUT_STATES.APPLIED ? c.LIGHT_GREEN_5 : c.INFO_BLUE};

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${c.INFO_BLUE};
    outline-offset: 2px;
    border-radius: 4px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const ErrorMessage = styled.span`
  font-family: ${sans};
  font-size: ${errorType.FONT_SIZE};
  font-weight: ${errorType.FONT_WEIGHT};
  line-height: ${errorType.LINE_HEIGHT};
  color: ${c.RED};
  padding-left: ${defaults.ERROR_PADDING_LEFT};
`;

export const DiscountCodeInputStyles = {
  Wrapper,
  Card,
  StatusIcon,
  Input,
  ActionButton,
  ErrorMessage,
};
