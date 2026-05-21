import styled, { css } from "styled-components";
import { RATING_DEFAULTS, RATING_TYPOGRAPHY } from "@/constants/rating";
import { NotoSansFont } from "@/styles/fonts";
import { SITE_COLORS as c } from "@/utility/strings";

const defaults = RATING_DEFAULTS;
const labelType = RATING_TYPOGRAPHY.LABEL;
const sans = NotoSansFont.style.fontFamily;

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${defaults.WRAPPER_GAP};
  box-sizing: border-box;
`;

const Label = styled.span`
  font-family: ${sans};
  font-size: ${labelType.FONT_SIZE};
  font-weight: ${labelType.FONT_WEIGHT};
  line-height: ${labelType.LINE_HEIGHT};
  letter-spacing: ${labelType.LETTER_SPACING};
  color: ${c.GREY_4};
`;

const StarRow = styled.div<{ $gap: number }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ $gap }) => `${$gap}px`};
`;

const StarButton = styled.button<{
  $size: number;
  $active: boolean;
  $interactive: boolean;
  $filledColor: string;
  $emptyColor: string;
}>`
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  border-radius: ${defaults.STAR_BORDER_RADIUS};
  color: ${({ $active, $filledColor, $emptyColor }) =>
    $active ? $filledColor : $emptyColor};
  transition: transform 120ms ease, color 120ms ease;

  ${({ $interactive }) =>
    $interactive
      ? css`
          cursor: pointer;

          &:hover {
            transform: scale(1.08);
          }

          &:focus-visible {
            outline: 2px solid ${c.AMBER_TRANSLUCENT};
            outline-offset: 2px;
          }
        `
      : css`
          cursor: default;
          pointer-events: none;
        `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
  }

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const RatingStyles = {
  Wrapper,
  Label,
  StarRow,
  StarButton,
};
