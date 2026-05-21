"use client";

import { Icons } from "@/assets/svg";
import {
  SELECTABLE_SERVICE_CARD_COLORS,
} from "@/constants/selectableServiceCard";
import type { SelectableServiceCardProps } from "./types";
import { resolveSelectableServiceCardAppearance } from "./resolveSelectableServiceCardAppearance";
import { SelectableServiceCardStyles } from "./styles";

export default function SelectableServiceCard({
  title,
  description,
  icon,
  iconBackgroundColor,
  badge,
  showBadge = true,
  selected = false,
  showSelectedCheck = true,
  selectedCheckIcon,
  disabled = false,
  className,
  appearance,
  errorMessage,
  onClick,
}: SelectableServiceCardProps) {
  const resolvedAppearance = resolveSelectableServiceCardAppearance(appearance);
  const shouldShowBadge = showBadge && badge?.label !== undefined && badge?.label !== "";
  const shouldShowSelectedCheck = selected && showSelectedCheck;
  const resolvedCheckIcon = selectedCheckIcon ?? <Icons.CheckCircleFilledSVG />;
  const hasError = Boolean(errorMessage);

  const badgeBackgroundColor =
    badge?.backgroundColor ?? SELECTABLE_SERVICE_CARD_COLORS.BADGE_BACKGROUND;
  const badgeColor = badge?.color ?? SELECTABLE_SERVICE_CARD_COLORS.BADGE_TEXT;

  const handleClick = () => {
    if (disabled) {
      return;
    }
    onClick?.();
  };

  return (
    <>
      <SelectableServiceCardStyles.CardButton
        type="button"
        className={className}
        disabled={disabled}
        aria-pressed={selected}
        aria-invalid={hasError}
        $selected={selected}
        $disabled={disabled}
        $appearance={resolvedAppearance}
        onClick={handleClick}
      >
        {shouldShowSelectedCheck ? (
          <SelectableServiceCardStyles.SelectedCheckWrap
            $appearance={resolvedAppearance}
            aria-hidden
          >
            {resolvedCheckIcon}
          </SelectableServiceCardStyles.SelectedCheckWrap>
        ) : null}
        <SelectableServiceCardStyles.HeaderRow $appearance={resolvedAppearance}>
          <SelectableServiceCardStyles.IconCircle
            $iconBackgroundColor={iconBackgroundColor}
            $appearance={resolvedAppearance}
          >
            {icon}
          </SelectableServiceCardStyles.IconCircle>
          {shouldShowBadge ? (
            <SelectableServiceCardStyles.Badge
              $backgroundColor={badgeBackgroundColor}
              $color={badgeColor}
              $appearance={resolvedAppearance}
            >
              {badge?.label}
            </SelectableServiceCardStyles.Badge>
          ) : null}
        </SelectableServiceCardStyles.HeaderRow>
        <SelectableServiceCardStyles.ContentBlock $appearance={resolvedAppearance}>
          <SelectableServiceCardStyles.Title $appearance={resolvedAppearance}>
            {title}
          </SelectableServiceCardStyles.Title>
          <SelectableServiceCardStyles.Description $appearance={resolvedAppearance}>
            {description}
          </SelectableServiceCardStyles.Description>
        </SelectableServiceCardStyles.ContentBlock>
      </SelectableServiceCardStyles.CardButton>
      {hasError ? (
        <SelectableServiceCardStyles.ErrorMessage $appearance={resolvedAppearance} role="alert">
          {errorMessage}
        </SelectableServiceCardStyles.ErrorMessage>
      ) : null}
    </>
  );
}

export type { SelectableServiceCardProps } from "./types";
