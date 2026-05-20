import styled from "styled-components";
import {
  DOCTOR_PROFILE_CARD_COLORS,
  DOCTOR_PROFILE_CARD_DEFAULTS,
} from "@/constants/doctorProfileCard";
import { NotoSansFont } from "@/styles/fonts";
import { SITE_COLORS as c } from "@/utility/strings";

const sans = NotoSansFont.style.fontFamily;
const defaults = DOCTOR_PROFILE_CARD_DEFAULTS;
const colors = DOCTOR_PROFILE_CARD_COLORS;
const avatarSize = `${defaults.AVATAR_SIZE}px`;

const CardSurface = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${defaults.GAP};
  width: 100%;
  padding: ${defaults.PADDING};
  border-radius: ${defaults.BORDER_RADIUS};
  border: 1px solid ${colors.BORDER};
  background: ${c.WHITE};
  box-sizing: border-box;
  font-family: ${sans};
  min-width: 0;
`;

const AvatarCell = styled.div`
  flex-shrink: 0;
  width: ${avatarSize};
  height: ${avatarSize};
  min-width: ${avatarSize};
  min-height: ${avatarSize};
  max-width: ${avatarSize};
  max-height: ${avatarSize};
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${avatarSize};
  min-width: 0;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${defaults.CONTENT_GAP};
  min-width: 0;
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${defaults.GAP};
  width: 100%;
  min-width: 0;
  flex-shrink: 0;
  padding-top: 5px;
`;

export const DoctorProfileCardStyles = {
  CardSurface,
  AvatarCell,
  Body,
  Details,
  FooterRow,
};
