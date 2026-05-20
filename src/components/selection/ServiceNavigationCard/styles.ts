import styled from "styled-components";
import {
  SERVICE_NAVIGATION_CARD_DEFAULTS,
  SERVICE_NAVIGATION_CARD_TYPOGRAPHY,
} from "@/constants/serviceNavigationCard";
import { NotoSansFont } from "@/styles/fonts";
import { SITE_COLORS as c } from "@/utility/strings";

const defaults = SERVICE_NAVIGATION_CARD_DEFAULTS;
const titleType = SERVICE_NAVIGATION_CARD_TYPOGRAPHY.TITLE;
const subtitleType = SERVICE_NAVIGATION_CARD_TYPOGRAPHY.SUBTITLE;
const sans = NotoSansFont.style.fontFamily;

const CardButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${defaults.GAP};
  width: min(100%, ${defaults.MAX_WIDTH});
  max-width: ${defaults.MAX_WIDTH};
  align-self: flex-start;
  min-height: ${defaults.HEIGHT};
  padding: ${defaults.PADDING};
  border-radius: ${defaults.BORDER_RADIUS};
  border: none;
  background: ${c.GREY_2};
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  text-align: left;
  min-width: 0;

  &:focus-visible {
    outline: 2px solid ${c.INFO_BLUE};
    outline-offset: 2px;
  }
`;

const IconCircle = styled.span<{ $iconBackgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${defaults.ICON_CIRCLE_SIZE};
  height: ${defaults.ICON_CIRCLE_SIZE};
  border-radius: ${defaults.ICON_CIRCLE_RADIUS};
  background-color: ${({ $iconBackgroundColor }) => $iconBackgroundColor};
`;

const TextBlock = styled.span`
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
  letter-spacing: 0;
`;

const Title = styled(EllipsisText)`
  font-family: ${sans};
  font-size: ${titleType.FONT_SIZE};
  font-weight: ${titleType.FONT_WEIGHT};
  line-height: ${titleType.LINE_HEIGHT};
  color: ${c.TEXT_PRIMARY};
`;

const Subtitle = styled(EllipsisText)`
  font-family: var(--font-almarai);
  font-size: ${subtitleType.FONT_SIZE};
  font-weight: ${subtitleType.FONT_WEIGHT};
  line-height: ${subtitleType.LINE_HEIGHT};
  color: ${c.GREY_4};
`;

const CaretWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 0;
`;

export const ServiceNavigationCardStyles = {
  CardButton,
  IconCircle,
  TextBlock,
  Title,
  Subtitle,
  CaretWrap,
};
