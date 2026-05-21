"use client";

import {
  DOCTOR_PROFILE_CARD_DEFAULTS,
} from "@/constants/doctorProfileCard";
import type { DoctorProfileCardProps } from "./types";
import DoctorProfileAvatar from "./primitives/DoctorProfileAvatar";
import DoctorProfileAvailabilityBadge from "./primitives/DoctorProfileAvailabilityBadge";
import { DoctorProfileCardSharedStyles } from "./primitives/sharedStyles";
import {
  formatDoctorProfileLanguages,
  formatDoctorProfilePrice,
} from "./primitives/utils";
import { DoctorProfileCardStyles } from "./styles";

export default function DoctorProfileCard({
  imageSrc,
  imageAlt = "",
  name,
  designation,
  languages,
  price,
  currency = DOCTOR_PROFILE_CARD_DEFAULTS.CURRENCY,
  isAvailable = true,
  availableLabel,
  unavailableLabel,
  onClick,
  className,
}: DoctorProfileCardProps) {
  const isUnavailable = !isAvailable;
  const languagesText = formatDoctorProfileLanguages(languages);
  const priceText = formatDoctorProfilePrice(price, currency);

  const handleClick = () => {
    if (isUnavailable) {
      return;
    }
    onClick?.();
  };

  return (
    <DoctorProfileCardSharedStyles.CardButton
      type="button"
      className={className}
      $unavailable={isUnavailable}
      disabled={isUnavailable}
      aria-disabled={isUnavailable}
      onClick={handleClick}
    >
      <DoctorProfileCardStyles.CardSurface>
        <DoctorProfileCardStyles.AvatarCell>
          <DoctorProfileAvatar
            imageSrc={imageSrc}
            imageAlt={imageAlt || name}
            isAvailable={isAvailable}
          />
        </DoctorProfileCardStyles.AvatarCell>

        <DoctorProfileCardStyles.Body>
          <DoctorProfileCardStyles.Details>
            <DoctorProfileCardSharedStyles.Name title={name}>
              {name}
            </DoctorProfileCardSharedStyles.Name>
            <DoctorProfileCardSharedStyles.Designation title={designation}>
              {designation}
            </DoctorProfileCardSharedStyles.Designation>
            <DoctorProfileCardSharedStyles.Languages>
              {languagesText}
            </DoctorProfileCardSharedStyles.Languages>
          </DoctorProfileCardStyles.Details>

          <DoctorProfileCardStyles.FooterRow>
            <DoctorProfileAvailabilityBadge
              isAvailable={isAvailable}
              availableLabel={availableLabel}
              unavailableLabel={unavailableLabel}
            />
            <DoctorProfileCardSharedStyles.Price title={priceText}>
              {priceText}
            </DoctorProfileCardSharedStyles.Price>
          </DoctorProfileCardStyles.FooterRow>
        </DoctorProfileCardStyles.Body>
      </DoctorProfileCardStyles.CardSurface>
    </DoctorProfileCardSharedStyles.CardButton>
  );
}

export type { DoctorProfileCardProps } from "./types";
