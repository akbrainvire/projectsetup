"use client";

import { Icons } from "@/assets/svg";
import {
  DOCTOR_PROFILE_CARD_LABELS,
} from "@/constants/doctorProfileCard";
import type { ReactNode } from "react";
import { DoctorProfileCardSharedStyles } from "./sharedStyles";

type DoctorProfileAvailabilityBadgeProps = {
  isAvailable: boolean;
  availableLabel?: string;
  unavailableLabel?: string;
  availableIcon?: ReactNode;
  showAvailableDot?: boolean;
};

export default function DoctorProfileAvailabilityBadge({
  isAvailable,
  availableLabel = DOCTOR_PROFILE_CARD_LABELS.AVAILABLE,
  unavailableLabel = DOCTOR_PROFILE_CARD_LABELS.UNAVAILABLE,
  availableIcon,
  showAvailableDot = false,
}: DoctorProfileAvailabilityBadgeProps) {
  const label = isAvailable ? availableLabel : unavailableLabel;
  const resolvedIcon = availableIcon ?? <Icons.DoctorAvailableVerifiedSVG />;

  return (
    <DoctorProfileCardSharedStyles.AvailabilityBadge
      $available={isAvailable}
      aria-label={label}
    >
      {isAvailable ? (
        <DoctorProfileCardSharedStyles.BadgeIconWrap aria-hidden>
          {resolvedIcon}
        </DoctorProfileCardSharedStyles.BadgeIconWrap>
      ) : null}
      <DoctorProfileCardSharedStyles.BadgeLabel>{label}</DoctorProfileCardSharedStyles.BadgeLabel>
      {isAvailable && showAvailableDot ? (
        <DoctorProfileCardSharedStyles.BadgeDot aria-hidden />
      ) : null}
    </DoctorProfileCardSharedStyles.AvailabilityBadge>
  );
}
