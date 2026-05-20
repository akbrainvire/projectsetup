"use client";

import { Icons } from "@/assets/svg";
import type { ServiceNavigationCardProps } from "@/types/serviceNavigationCard.types";
import { ServiceNavigationCardStyles } from "./styles";

export default function ServiceNavigationCard({
  title,
  subtitle,
  icon,
  iconBackgroundColor,
  caretIcon,
  onClick,
  className,
  disabled = false,
}: ServiceNavigationCardProps) {
  const resolvedCaret = caretIcon ?? <Icons.CaretRightSVG />;

  const handleClick = () => {
    if (disabled) {
      return;
    }
    onClick?.();
  };

  return (
    <ServiceNavigationCardStyles.CardButton
      type="button"
      className={className}
      disabled={disabled}
      onClick={handleClick}
    >
      <ServiceNavigationCardStyles.IconCircle $iconBackgroundColor={iconBackgroundColor}>
        {icon}
      </ServiceNavigationCardStyles.IconCircle>
      <ServiceNavigationCardStyles.TextBlock>
        <ServiceNavigationCardStyles.Title title={title}>{title}</ServiceNavigationCardStyles.Title>
        <ServiceNavigationCardStyles.Subtitle title={subtitle}>
          {subtitle}
        </ServiceNavigationCardStyles.Subtitle>
      </ServiceNavigationCardStyles.TextBlock>
      <ServiceNavigationCardStyles.CaretWrap aria-hidden>
        {resolvedCaret}
      </ServiceNavigationCardStyles.CaretWrap>
    </ServiceNavigationCardStyles.CardButton>
  );
}

export type { ServiceNavigationCardProps } from "@/types/serviceNavigationCard.types";
