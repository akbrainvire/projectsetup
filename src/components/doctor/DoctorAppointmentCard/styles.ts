import Image from "next/image";
import styled from "styled-components";
import {
  DOCTOR_APPOINTMENT_CARD_DEFAULTS,
  DOCTOR_APPOINTMENT_CARD_GRADIENT,
  DOCTOR_APPOINTMENT_CARD_TYPOGRAPHY,
} from "@/constants/cards";
import { ellipsisTextStyles } from "@/styles/commonStyles";
import { NotoSansFont } from "@/styles/fonts";
import { SITE_COLORS as c } from "@/utility/strings";

const sans = NotoSansFont.style.fontFamily;
const defaults = DOCTOR_APPOINTMENT_CARD_DEFAULTS;
const nameType = DOCTOR_APPOINTMENT_CARD_TYPOGRAPHY.DOCTOR_NAME;
const metaType = DOCTOR_APPOINTMENT_CARD_TYPOGRAPHY.DOCTOR_META;
const appointmentType = DOCTOR_APPOINTMENT_CARD_TYPOGRAPHY.APPOINTMENT_LINE;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${defaults.GAP_SECTIONS};
  width: 100%;
  max-width: ${defaults.MAX_WIDTH};
  padding: ${defaults.PADDING};
  border-radius: ${defaults.BORDER_RADIUS};
  background: ${DOCTOR_APPOINTMENT_CARD_GRADIENT};
  overflow: hidden;
  font-family: ${sans};
  color: ${c.WHITE};
  box-sizing: border-box;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${defaults.GAP_AVATAR_INFO};
  min-width: 0;
`;

const AvatarWrap = styled.div`
  flex-shrink: 0;
  width: ${defaults.AVATAR_SIZE}px;
  height: ${defaults.AVATAR_SIZE}px;
  border-radius: 12px;
  overflow: hidden;
  background: ${c.WHITE};
`;

const StyledAvatar = styled(Image)`
  width: ${defaults.AVATAR_SIZE}px;
  height: ${defaults.AVATAR_SIZE}px;
  object-fit: cover;
`;

const DoctorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${defaults.GAP_NAME_META};
  min-width: 0;
  flex: 1;
`;

const EllipsisText = styled.span`
  ${ellipsisTextStyles}
  font-family: ${sans};
  letter-spacing: 0;
`;

const DoctorName = styled(EllipsisText)`
  font-size: ${nameType.FONT_SIZE};
  font-weight: ${nameType.FONT_WEIGHT};
  line-height: ${nameType.LINE_HEIGHT};
`;

const DoctorMeta = styled(EllipsisText)`
  font-size: ${metaType.FONT_SIZE};
  font-weight: ${metaType.FONT_WEIGHT};
  line-height: ${metaType.LINE_HEIGHT};
`;

const Divider = styled.hr`
  margin: 0;
  border: none;
  border-top: 1px solid ${defaults.DIVIDER_COLOR};
  width: 100%;
  flex-shrink: 0;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${defaults.GAP_BOTTOM_ROW};
  min-width: 0;
`;

const AppointmentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${defaults.GAP_APPOINTMENT_LINES};
  min-width: 0;
  flex: 1;
`;

const AppointmentLine = styled(EllipsisText)`
  font-size: ${appointmentType.FONT_SIZE};
  font-weight: ${appointmentType.FONT_WEIGHT};
  line-height: ${appointmentType.LINE_HEIGHT};
`;

const ActionWrap = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;

  button {
    justify-content: center;
  }

  button span {
    line-height: ${DOCTOR_APPOINTMENT_CARD_TYPOGRAPHY.ACTION_BUTTON.LINE_HEIGHT};
    text-align: center;
  }
`;

export const DoctorAppointmentCardStyles = {
  Card,
  TopSection,
  AvatarWrap,
  StyledAvatar,
  DoctorInfo,
  DoctorName,
  DoctorMeta,
  Divider,
  BottomSection,
  AppointmentInfo,
  AppointmentLine,
  ActionWrap,
};
