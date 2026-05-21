"use client";

import defaultDoctorImage from "@/assets/doctorimage1.jpg";
import CustomButton from "@/components/common/CustomButton";
import { BUTTON_VARIANTS } from "@/constants/button";
import {
  DOCTOR_APPOINTMENT_CARD_DEFAULTS,
  DOCTOR_APPOINTMENT_CARD_TYPOGRAPHY,
} from "@/constants/cards";
import type { DoctorAppointmentCardProps } from "./types";
import { SITE_COLORS } from "@/utility/strings";
import { DoctorAppointmentCardStyles } from "./styles";

const DEFAULT_FOR_LABEL = "For";

export default function DoctorAppointmentCard({
  imageSrc,
  imageAlt = "",
  doctorName,
  specialty,
  appointmentType,
  forLabel = DEFAULT_FOR_LABEL,
  patientFor,
  appointmentTime,
  actionLabel,
  onActionClick,
  className,
}: DoctorAppointmentCardProps) {
  const resolvedImage = imageSrc ?? defaultDoctorImage;
  const doctorMeta = `${specialty} • ${appointmentType}`;
  const patientLine = `${forLabel} ( ${patientFor} )`;

  return (
    <DoctorAppointmentCardStyles.Card className={className}>
      <DoctorAppointmentCardStyles.TopSection>
        <DoctorAppointmentCardStyles.AvatarWrap>
          <DoctorAppointmentCardStyles.StyledAvatar
            src={resolvedImage}
            alt={imageAlt || doctorName}
            width={DOCTOR_APPOINTMENT_CARD_DEFAULTS.AVATAR_SIZE_OPTIMIZED}
            height={DOCTOR_APPOINTMENT_CARD_DEFAULTS.AVATAR_SIZE_OPTIMIZED}
            quality={100}
            sizes={`${DOCTOR_APPOINTMENT_CARD_DEFAULTS.AVATAR_SIZE}px`}
            priority
            unoptimized
          />
        </DoctorAppointmentCardStyles.AvatarWrap>
        <DoctorAppointmentCardStyles.DoctorInfo>
          <DoctorAppointmentCardStyles.DoctorName title={doctorName}>
            {doctorName}
          </DoctorAppointmentCardStyles.DoctorName>
          <DoctorAppointmentCardStyles.DoctorMeta title={doctorMeta}>
            {doctorMeta}
          </DoctorAppointmentCardStyles.DoctorMeta>
        </DoctorAppointmentCardStyles.DoctorInfo>
      </DoctorAppointmentCardStyles.TopSection>

      <DoctorAppointmentCardStyles.Divider />

      <DoctorAppointmentCardStyles.BottomSection>
        <DoctorAppointmentCardStyles.AppointmentInfo>
          <DoctorAppointmentCardStyles.AppointmentLine title={patientLine}>
            {patientLine}
          </DoctorAppointmentCardStyles.AppointmentLine>
          <DoctorAppointmentCardStyles.AppointmentLine title={appointmentTime}>
            {appointmentTime}
          </DoctorAppointmentCardStyles.AppointmentLine>
        </DoctorAppointmentCardStyles.AppointmentInfo>
        <DoctorAppointmentCardStyles.ActionWrap>
          <CustomButton
            text={actionLabel}
            appearance={{
              variant: BUTTON_VARIANTS.CUSTOM,
              backgroundColor: SITE_COLORS.WHITE,
              color: SITE_COLORS.TEAL_PRIMARY,
              border: "none",
              hideBoxShadow: true,
              borderRadius: DOCTOR_APPOINTMENT_CARD_TYPOGRAPHY.ACTION_BUTTON.BORDER_RADIUS,
              padding: DOCTOR_APPOINTMENT_CARD_TYPOGRAPHY.ACTION_BUTTON.PADDING,
              height: DOCTOR_APPOINTMENT_CARD_TYPOGRAPHY.ACTION_BUTTON.HEIGHT,
              minWidth: DOCTOR_APPOINTMENT_CARD_TYPOGRAPHY.ACTION_BUTTON.MIN_WIDTH,
              fontSize: DOCTOR_APPOINTMENT_CARD_TYPOGRAPHY.ACTION_BUTTON.FONT_SIZE,
              fontWeight: DOCTOR_APPOINTMENT_CARD_TYPOGRAPHY.ACTION_BUTTON.FONT_WEIGHT,
            }}
            events={{ onClick: onActionClick }}
          />
        </DoctorAppointmentCardStyles.ActionWrap>
      </DoctorAppointmentCardStyles.BottomSection>
    </DoctorAppointmentCardStyles.Card>
  );
}

export type { DoctorAppointmentCardProps } from "./types";
