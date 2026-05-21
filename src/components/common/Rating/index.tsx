"use client";

import { memo, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Icons } from "@/assets/svg";
import { RATING_CONSTANTS, RATING_DEFAULTS } from "@/constants/rating";
import type { RatingProps } from "./types";
import { SITE_COLORS } from "@/utility/strings";
import { RatingStyles } from "./styles";

const clampValue = (next: number, max: number) => {
  if (Number.isNaN(next)) {
    return RATING_DEFAULTS.MIN;
  }
  if (next < RATING_DEFAULTS.MIN) {
    return RATING_DEFAULTS.MIN;
  }
  if (next > max) {
    return max;
  }
  return next;
};

const RatingComponent = ({
  value,
  onChange,
  max = RATING_DEFAULTS.MAX,
  size = RATING_DEFAULTS.SIZE,
  gap = RATING_DEFAULTS.GAP,
  label,
  labelKey = RATING_CONSTANTS.LABEL_KEY,
  showLabel = true,
  readOnly = false,
  disabled = false,
  allowClear = false,
  filledColor = SITE_COLORS.AMBER,
  emptyColor = SITE_COLORS.LIGHT_GREY,
  className,
  ariaLabel,
}: RatingProps) => {
  const { t } = useTranslation("common");

  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const safeMax = max > 0 ? Math.floor(max) : RATING_DEFAULTS.MAX;
  const safeValue = clampValue(value, safeMax);
  const isInteractive = !readOnly && !disabled && Boolean(onChange);

  const displayValue = hoverValue ?? safeValue;

  const resolvedLabel = useMemo(() => {
    if (label !== undefined) {
      return label;
    }
    return t(labelKey);
  }, [label, labelKey, t]);

  const resolvedGroupLabel = useMemo(() => {
    if (ariaLabel) {
      return ariaLabel;
    }
    return t(RATING_CONSTANTS.ARIA.GROUP_KEY);
  }, [ariaLabel, t]);

  const stars = useMemo(
    () => Array.from({ length: safeMax }, (_, index: number) => index + 1),
    [safeMax]
  );

  const handleStarClick = (starValue: number) => {
    if (!isInteractive) {
      return;
    }
    const nextValue =
      allowClear && safeValue === starValue
        ? RATING_DEFAULTS.MIN
        : starValue;
    onChange?.(nextValue);
  };

  const handleStarMouseEnter = (starValue: number) => {
    if (!isInteractive) {
      return;
    }
    setHoverValue(starValue);
  };

  const handleStarMouseLeave = () => {
    if (!isInteractive) {
      return;
    }
    setHoverValue(null);
  };

  return (
    <RatingStyles.Wrapper
      className={className}
      role="group"
      aria-label={resolvedGroupLabel}
    >
      {showLabel ? <RatingStyles.Label>{resolvedLabel}</RatingStyles.Label> : null}
      <RatingStyles.StarRow
        $gap={gap}
        role={isInteractive ? "radiogroup" : undefined}
        aria-label={isInteractive ? resolvedGroupLabel : undefined}
      >
        {stars.map((starValue: number) => {
          const isActive = starValue <= displayValue;
          const ariaStarLabel = t(RATING_CONSTANTS.ARIA.STAR_KEY, {
            value: starValue,
            max: safeMax,
          });

          return (
            <RatingStyles.StarButton
              key={`rating-star-${starValue}`}
              type="button"
              $size={size}
              $active={isActive}
              $interactive={isInteractive}
              $filledColor={filledColor}
              $emptyColor={emptyColor}
              disabled={disabled}
              aria-label={ariaStarLabel}
              aria-checked={isInteractive ? safeValue === starValue : undefined}
              role={isInteractive ? "radio" : undefined}
              tabIndex={isInteractive ? 0 : -1}
              onClick={() => handleStarClick(starValue)}
              onMouseEnter={() => handleStarMouseEnter(starValue)}
              onMouseLeave={handleStarMouseLeave}
              onFocus={() => handleStarMouseEnter(starValue)}
              onBlur={handleStarMouseLeave}
            >
              <Icons.RatingStarSVG />
            </RatingStyles.StarButton>
          );
        })}
      </RatingStyles.StarRow>
    </RatingStyles.Wrapper>
  );
};

const Rating = memo(RatingComponent);
Rating.displayName = "Rating";

export default Rating;

export type { RatingProps } from "./types";
