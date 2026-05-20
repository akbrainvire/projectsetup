import styled from "styled-components";
import {
  COUNTDOWN_TIMER_DEFAULTS,
  COUNTDOWN_TIMER_TYPOGRAPHY,
} from "@/constants/countdownTimer";
import { NotoSansFont } from "@/styles/fonts";
import { SITE_COLORS as c } from "@/utility/strings";

const defaults = COUNTDOWN_TIMER_DEFAULTS;
const labelType = COUNTDOWN_TIMER_TYPOGRAPHY.LABEL;
const valueType = COUNTDOWN_TIMER_TYPOGRAPHY.VALUE;
const sans = NotoSansFont.style.fontFamily;

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${defaults.WRAPPER_BORDER_RADIUS};
  box-sizing: border-box;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${defaults.STACK_GAP};
  min-width: ${defaults.CARD_MIN_WIDTH};
  padding: ${defaults.CARD_PADDING};
  border-radius: ${defaults.CARD_BORDER_RADIUS};
  background: ${c.WHITE};
  box-shadow: ${c.COUNTDOWN_CARD_SHADOW};
  box-sizing: border-box;
`;

const Label = styled.span`
  font-family: ${sans};
  font-size: ${labelType.FONT_SIZE};
  font-weight: ${labelType.FONT_WEIGHT};
  line-height: ${labelType.LINE_HEIGHT};
  letter-spacing: ${labelType.LETTER_SPACING};
  color: ${c.PURPLE_PRIMARY};
  text-align: center;
  display: inline-flex;
  align-items: center;
`;

const Value = styled.span`
  font-family: ${sans};
  font-size: ${valueType.FONT_SIZE};
  font-weight: ${valueType.FONT_WEIGHT};
  line-height: ${valueType.LINE_HEIGHT};
  letter-spacing: ${valueType.LETTER_SPACING};
  color: ${c.PURPLE_PRIMARY};
  text-align: center;
  font-variant-numeric: tabular-nums;
  display: inline-flex;
  align-items: center;
`;

export const CountdownTimerStyles = {
  Wrapper,
  Card,
  Label,
  Value,
};
