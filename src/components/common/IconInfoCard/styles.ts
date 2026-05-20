import styled from "styled-components";
import {
  ICON_INFO_CARD_DEFAULTS,
  ICON_INFO_CARD_TYPOGRAPHY,
} from "@/constants/iconInfoCard";
import { NotoSansFont } from "@/styles/fonts";
import { SITE_COLORS as c } from "@/utility/strings";

const defaults = ICON_INFO_CARD_DEFAULTS;
const labelType = ICON_INFO_CARD_TYPOGRAPHY.LABEL;
const valueType = ICON_INFO_CARD_TYPOGRAPHY.VALUE;
const actionType = ICON_INFO_CARD_TYPOGRAPHY.ACTION;
const sans = NotoSansFont.style.fontFamily;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: ${defaults.GAP};
  min-width: ${defaults.MIN_WIDTH};
  padding: ${defaults.PADDING};
  border-radius: ${defaults.BORDER_RADIUS};
  border: 1px solid ${c.GREY_6};
  background: ${c.WHITE};
  box-sizing: border-box;
  flex: 1;
`;

const IconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${defaults.ICON_SIZE};
  height: ${defaults.ICON_SIZE};
  line-height: 0;
  color: ${c.NAVY_DARK};
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${defaults.TEXT_GAP};
  min-width: 0;
  flex: 1;
`;

const EllipsisText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  display: block;
`;

const Label = styled(EllipsisText)`
  font-family: ${sans};
  font-size: ${labelType.FONT_SIZE};
  font-weight: ${labelType.FONT_WEIGHT};
  line-height: ${labelType.LINE_HEIGHT};
  color: ${c.GREY_4};
`;

const Value = styled(EllipsisText)`
  font-family: ${sans};
  font-size: ${valueType.FONT_SIZE};
  font-weight: ${valueType.FONT_WEIGHT};
  line-height: ${valueType.LINE_HEIGHT};
  color: ${c.NAVY_DARK};
`;

const ActionButton = styled.button`
  flex-shrink: 0;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  font-family: ${sans};
  font-size: ${actionType.FONT_SIZE};
  font-weight: ${actionType.FONT_WEIGHT};
  line-height: ${actionType.LINE_HEIGHT};
  color: ${c.INFO_BLUE};

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${c.INFO_BLUE};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export const IconInfoCardStyles = {
  Card,
  IconWrap,
  TextBlock,
  Label,
  Value,
  ActionButton,
};
