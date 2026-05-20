import Image from "next/image";
import styled from "styled-components";
import {
  DOCTOR_PROFILE_CARD_COLORS,
  DOCTOR_PROFILE_CARD_DEFAULTS,
  DOCTOR_PROFILE_CARD_TYPOGRAPHY,
} from "@/constants/doctorProfileCard";
import { NotoSansFont } from "@/styles/fonts";

const sans = NotoSansFont.style.fontFamily;
const colors = DOCTOR_PROFILE_CARD_COLORS;
const defaults = DOCTOR_PROFILE_CARD_DEFAULTS;
const nameType = DOCTOR_PROFILE_CARD_TYPOGRAPHY.NAME;
const designationType = DOCTOR_PROFILE_CARD_TYPOGRAPHY.DESIGNATION;
const metaType = DOCTOR_PROFILE_CARD_TYPOGRAPHY.META;
const priceType = DOCTOR_PROFILE_CARD_TYPOGRAPHY.PRICE;
const badgeType = DOCTOR_PROFILE_CARD_TYPOGRAPHY.BADGE;

const CardButton = styled.button<{ $unavailable: boolean }>`
  display: block;
  width: min(100%, ${defaults.MAX_WIDTH});
  max-width: ${defaults.MAX_WIDTH};
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  box-sizing: border-box;
  cursor: ${({ $unavailable }) => ($unavailable ? "not-allowed" : "pointer")};
  opacity: ${({ $unavailable }) => ($unavailable ? defaults.UNAVAILABLE_OPACITY : 1)};
  text-align: left;
  min-width: 0;

  &:focus-visible {
    outline: 2px solid ${colors.DESIGNATION};
    outline-offset: 2px;
    border-radius: ${defaults.BORDER_RADIUS};
  }
`;

const EllipsisText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  display: block;
  letter-spacing: 0;
`;

const Name = styled(EllipsisText)`
  font-family: ${sans};
  font-size: ${nameType.FONT_SIZE};
  font-weight: ${nameType.FONT_WEIGHT};
  line-height: ${nameType.LINE_HEIGHT};
  color: ${colors.NAME};
`;

const Designation = styled(EllipsisText)`
  font-family: ${sans};
  font-size: ${designationType.FONT_SIZE};
  font-weight: ${designationType.FONT_WEIGHT};
  line-height: ${designationType.LINE_HEIGHT};
  color: ${colors.DESIGNATION};
`;

const Languages = styled.span`
  font-family: ${sans};
  font-size: ${metaType.FONT_SIZE};
  font-weight: ${metaType.FONT_WEIGHT};
  line-height: ${metaType.LINE_HEIGHT};
  color: ${colors.LANGUAGE};
  letter-spacing: 0;
`;

const Experience = styled.span`
  font-family: ${sans};
  font-size: ${metaType.FONT_SIZE};
  font-weight: ${metaType.FONT_WEIGHT};
  line-height: ${metaType.LINE_HEIGHT};
  color: ${colors.EXPERIENCE};
  letter-spacing: 0;
`;

const Price = styled.span`
  font-family: ${sans};
  font-size: ${priceType.FONT_SIZE};
  font-weight: ${priceType.FONT_WEIGHT};
  line-height: ${priceType.LINE_HEIGHT};
  color: ${colors.PRICE};
  letter-spacing: 0;
  white-space: nowrap;
  flex-shrink: 0;
`;

const PriceSuffix = styled.span`
  font-family: ${sans};
  font-size: ${metaType.FONT_SIZE};
  font-weight: ${metaType.FONT_WEIGHT};
  line-height: ${metaType.LINE_HEIGHT};
  color: ${colors.PRICE_SUFFIX};
  letter-spacing: 0;
`;

const AvatarWrap = styled.div`
  position: relative;
  flex-shrink: 0;
  width: ${defaults.AVATAR_SIZE}px;
  height: ${defaults.AVATAR_SIZE}px;
  min-width: ${defaults.AVATAR_SIZE}px;
  min-height: ${defaults.AVATAR_SIZE}px;
  max-width: ${defaults.AVATAR_SIZE}px;
  max-height: ${defaults.AVATAR_SIZE}px;
`;

const StyledAvatar = styled(Image)`
  display: block;
  width: ${defaults.AVATAR_SIZE}px;
  height: ${defaults.AVATAR_SIZE}px;
  min-width: ${defaults.AVATAR_SIZE}px;
  min-height: ${defaults.AVATAR_SIZE}px;
  max-width: ${defaults.AVATAR_SIZE}px;
  max-height: ${defaults.AVATAR_SIZE}px;
  object-fit: cover;
  border-radius: ${defaults.AVATAR_BORDER_RADIUS};
`;

const StatusDot = styled.span<{ $available: boolean }>`
  position: absolute;
  right: 2px;
  bottom: 2px;
  width: ${defaults.STATUS_DOT_SIZE}px;
  height: ${defaults.STATUS_DOT_SIZE}px;
  border-radius: 50%;
  border: 2px solid ${colors.STATUS_DOT_BORDER};
  background-color: ${({ $available }) =>
    $available ? colors.AVAILABLE_DOT : colors.UNAVAILABLE_DOT};
  box-sizing: border-box;
`;

const AvailabilityBadge = styled.span<{ $available: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  max-width: 100%;
  padding: 4px 8px;
  border-radius: 999px;
  background-color: ${({ $available }) =>
    $available ? colors.AVAILABLE_BADGE_BG : colors.UNAVAILABLE_BADGE_BG};
  color: ${({ $available }) =>
    $available ? colors.AVAILABLE_BADGE_TEXT : colors.UNAVAILABLE_BADGE_TEXT};
  font-family: ${sans};
  font-size: ${badgeType.FONT_SIZE};
  font-weight: ${badgeType.FONT_WEIGHT};
  line-height: ${badgeType.LINE_HEIGHT};
  letter-spacing: 0;
`;

const BadgeIconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 0;
  color: inherit;

  svg {
    display: block;
    width: 14px;
    height: 14px;
  }
`;

const BadgeDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${colors.AVAILABLE_DOT};
  flex-shrink: 0;
`;

const BadgeLabel = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
`;

export const DoctorProfileCardSharedStyles = {
  CardButton,
  EllipsisText,
  Name,
  Designation,
  Languages,
  Experience,
  Price,
  PriceSuffix,
  AvatarWrap,
  StyledAvatar,
  StatusDot,
  AvailabilityBadge,
  BadgeIconWrap,
  BadgeDot,
  BadgeLabel,
};
