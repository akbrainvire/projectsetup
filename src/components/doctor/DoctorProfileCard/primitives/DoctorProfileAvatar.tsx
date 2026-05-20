"use client";

import defaultDoctorImage from "@/assets/doctorimage1.jpg";
import { DOCTOR_PROFILE_CARD_DEFAULTS } from "@/constants/doctorProfileCard";
import type { StaticImageData } from "next/image";
import { DoctorProfileCardSharedStyles } from "./sharedStyles";

type DoctorProfileAvatarProps = {
  imageSrc?: string | StaticImageData;
  imageAlt: string;
  isAvailable: boolean;
  showStatusDot?: boolean;
};

export default function DoctorProfileAvatar({
  imageSrc,
  imageAlt,
  isAvailable,
  showStatusDot = true,
}: DoctorProfileAvatarProps) {
  const resolvedImage = imageSrc ?? defaultDoctorImage;

  return (
    <DoctorProfileCardSharedStyles.AvatarWrap>
      <DoctorProfileCardSharedStyles.StyledAvatar
        src={resolvedImage}
        alt={imageAlt}
        width={DOCTOR_PROFILE_CARD_DEFAULTS.AVATAR_SIZE_OPTIMIZED}
        height={DOCTOR_PROFILE_CARD_DEFAULTS.AVATAR_SIZE_OPTIMIZED}
        quality={100}
        sizes={`${DOCTOR_PROFILE_CARD_DEFAULTS.AVATAR_SIZE}px`}
        unoptimized
      />
      {showStatusDot ? (
        <DoctorProfileCardSharedStyles.StatusDot $available={isAvailable} aria-hidden />
      ) : null}
    </DoctorProfileCardSharedStyles.AvatarWrap>
  );
}
