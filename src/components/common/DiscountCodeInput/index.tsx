"use client";

import type { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { Icons } from "@/assets/svg";
import { DISCOUNT_CODE_INPUT_STATES } from "@/constants/discountCodeInput";
import type { DiscountCodeInputProps } from "@/types/discountCodeInput.types";
import { TRANSLATION_KEYS } from "@/utility/strings";
import { DiscountCodeInputStyles } from "./styles";

export default function DiscountCodeInput({
  value,
  onChange,
  onApply,
  onRemove,
  state = DISCOUNT_CODE_INPUT_STATES.IDLE,
  placeholderKey = TRANSLATION_KEYS.DISCOUNT_CODE.PLACEHOLDER,
  applyLabelKey = TRANSLATION_KEYS.DISCOUNT_CODE.APPLY,
  appliedLabelKey = TRANSLATION_KEYS.DISCOUNT_CODE.APPLIED,
  removeLabelKey = TRANSLATION_KEYS.DISCOUNT_CODE.REMOVE,
  errorMessageKey = TRANSLATION_KEYS.DISCOUNT_CODE.ERRORS.INVALID,
  isLoading = false,
  className,
  name,
}: DiscountCodeInputProps) {
  const { t } = useTranslation("common");

  const isApplied = state === DISCOUNT_CODE_INPUT_STATES.APPLIED;
  const isError = state === DISCOUNT_CODE_INPUT_STATES.ERROR;

  const placeholder = t(placeholderKey);
  const actionLabel = isApplied
    ? onRemove
      ? t(removeLabelKey)
      : t(appliedLabelKey)
    : t(applyLabelKey);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event?.target?.value ?? "");
  };

  const handleActionClick = () => {
    if (isApplied && onRemove) {
      onRemove();
      return;
    }
    if (!isApplied) {
      onApply();
    }
  };

  return (
    <DiscountCodeInputStyles.Wrapper className={className}>
      <DiscountCodeInputStyles.Card $variant={state}>
        {isApplied ? (
          <DiscountCodeInputStyles.StatusIcon aria-hidden>
            <Icons.DiscountCheckSVG />
          </DiscountCodeInputStyles.StatusIcon>
        ) : null}
        <DiscountCodeInputStyles.Input
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
          readOnly={isApplied}
          aria-invalid={isError}
          $variant={state}
        />
        <DiscountCodeInputStyles.ActionButton
          type="button"
          onClick={handleActionClick}
          disabled={isLoading || (isApplied && !onRemove)}
          aria-label={actionLabel}
          $variant={state}
        >
          {actionLabel}
        </DiscountCodeInputStyles.ActionButton>
      </DiscountCodeInputStyles.Card>
      {isError ? (
        <DiscountCodeInputStyles.ErrorMessage role="alert">
          {t(errorMessageKey)}
        </DiscountCodeInputStyles.ErrorMessage>
      ) : null}
    </DiscountCodeInputStyles.Wrapper>
  );
}

export type { DiscountCodeInputProps } from "@/types/discountCodeInput.types";
