"use client";

import defaultHeroImage from "@/assets/card1.jpg";
import CustomButton from "@/components/common/CustomButton";
import { BUTTON_ICON_POSITIONS, BUTTON_VARIANTS } from "@/constants/button";
import type { ConsultPhysicianHeroProps } from "./types";
import { ConsultPhysicianHeroStyles } from "./styles";

export default function ConsultPhysicianHero({
  title,
  description,
  badgeLabel,
  actionLabel,
  actionIcon,
  imageSrc,
  imageAlt = "",
  onStartVideoCall,
  isActionLoading = false,
  isActionDisabled = false,
  className,
}: ConsultPhysicianHeroProps) {
  const resolvedImage = imageSrc ?? defaultHeroImage;

  return (
    <ConsultPhysicianHeroStyles.Card className={className}>
      <ConsultPhysicianHeroStyles.BackgroundImage
        src={resolvedImage}
        alt={imageAlt || title}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 60vw"
      />
      <ConsultPhysicianHeroStyles.Overlay />
      <ConsultPhysicianHeroStyles.Content>
        <ConsultPhysicianHeroStyles.Badge>
          <ConsultPhysicianHeroStyles.BadgeDot aria-hidden />
          {badgeLabel}
        </ConsultPhysicianHeroStyles.Badge>
        <ConsultPhysicianHeroStyles.Title>{title}</ConsultPhysicianHeroStyles.Title>
        <ConsultPhysicianHeroStyles.Description>
          {description}
        </ConsultPhysicianHeroStyles.Description>
        <ConsultPhysicianHeroStyles.ActionWrap>
          <CustomButton
            text={actionLabel}
            appearance={{ variant: BUTTON_VARIANTS.SECONDARY }}
            iconConfig={
              actionIcon
                ? {
                    enabled: true,
                    icon: actionIcon,
                    position: BUTTON_ICON_POSITIONS.LEFT,
                  }
                : undefined
            }
            state={{
              loading: isActionLoading,
              disabled: isActionDisabled,
            }}
            events={{ onClick: onStartVideoCall }}
          />
        </ConsultPhysicianHeroStyles.ActionWrap>
      </ConsultPhysicianHeroStyles.Content>
    </ConsultPhysicianHeroStyles.Card>
  );
}

export type { ConsultPhysicianHeroProps } from "./types";
