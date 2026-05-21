import styled, { css } from "styled-components";
import { PAYMENT_METHOD_CARD_CONSTANTS } from "@/components/common/PaymentMethodCard/constant";
import { NotoSansFont } from "@/styles/fonts";
import { SITE_COLORS as c } from "@/utility/strings";

const defaults = PAYMENT_METHOD_CARD_CONSTANTS;
const labelType = PAYMENT_METHOD_CARD_CONSTANTS.LABEL;
const sans = NotoSansFont.style.fontFamily;

const selectedCardStyles = css`
  background: ${c.SOFT_BLUE_BG};
  border-color: ${c.BLUE_DEEP};
`;

const Card = styled.button<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  gap: ${defaults.GAP};
  width: 100%;
  height: ${defaults.HEIGHT};
  padding: ${defaults.PADDING};
  border-radius: ${defaults.BORDER_RADIUS};
  border: ${defaults.BORDER_WIDTH} solid ${c.BORDER_GREY};
  background: ${c.WHITE};
  cursor: pointer;
  text-align: left;
  font-family: ${sans};
  box-sizing: border-box;
  transition:
    background 0.18s ease,
    border-color 0.18s ease;

  ${({ $selected }) => ($selected ? selectedCardStyles : null)}

  &:focus-visible {
    outline: 2px solid ${c.BLUE_DEEP};
    outline-offset: 2px;
  }
`;

const Radio = styled.span<{ $selected: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${defaults.RADIO_SIZE};
  height: ${defaults.RADIO_SIZE};
  border-radius: 50%;
  border: ${defaults.RADIO_BORDER_WIDTH} solid
    ${({ $selected }) => ($selected ? c.BLUE_DEEP : c.BORDER_GREY)};
  background: ${c.WHITE};
  box-sizing: border-box;
`;

const RadioDot = styled.span`
  display: inline-block;
  width: ${defaults.RADIO_DOT_SIZE};
  height: ${defaults.RADIO_DOT_SIZE};
  border-radius: 50%;
  background: ${c.BLUE_DEEP};
`;

const Label = styled.span`
  flex: 1;
  min-width: 0;
  font-size: ${labelType.FONT_SIZE};
  font-weight: ${labelType.FONT_WEIGHT};
  line-height: ${labelType.LINE_HEIGHT};
  color: ${c.NAVY_DARK};
`;

const ImageSlot = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
  line-height: 0;
`;

export const PaymentMethodCardStyles = {
  Card,
  Radio,
  RadioDot,
  Label,
  ImageSlot,
};
