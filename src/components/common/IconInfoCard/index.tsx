"use client";

import type { IconInfoCardProps } from "@/types/iconInfoCard.types";
import { IconInfoCardStyles } from "./styles";

export default function IconInfoCard({
  icon,
  label,
  value,
  action,
  className,
}: IconInfoCardProps) {
  const handleActionClick = () => {
    action?.onClick();
  };

  return (
    <IconInfoCardStyles.Card className={className}>
      <IconInfoCardStyles.IconWrap aria-hidden>{icon}</IconInfoCardStyles.IconWrap>
      <IconInfoCardStyles.TextBlock>
        <IconInfoCardStyles.Label title={label}>{label}</IconInfoCardStyles.Label>
        <IconInfoCardStyles.Value title={value}>{value}</IconInfoCardStyles.Value>
      </IconInfoCardStyles.TextBlock>
      {action ? (
        <IconInfoCardStyles.ActionButton
          type="button"
          onClick={handleActionClick}
          aria-label={action?.ariaLabel ?? action?.label}
        >
          {action?.label}
        </IconInfoCardStyles.ActionButton>
      ) : null}
    </IconInfoCardStyles.Card>
  );
}

export type { IconInfoCardProps } from "@/types/iconInfoCard.types";
