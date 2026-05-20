"use client";

import type React from "react";
import { useTranslation } from "react-i18next";
import {
  LANGUAGE_KEYS,
  type LanguageCode,
} from "@/utility/strings";
import { CustomButtonSelectorStyles as SelectorStyles } from "@/components/common/CustomButtonSelector/styles";

export type CustomButtonSelectorOption<
  TOptionId extends string | number = string | number,
> = {
  id: TOptionId;
  label: React.ReactNode;
  disabled?: boolean;
};

export type CustomButtonSelectorProps<
  TOptionId extends string | number = string | number,
> = {
  label?: React.ReactNode;
  options: Array<CustomButtonSelectorOption<TOptionId>>;
  value?: TOptionId | null;
  onChange: (id: TOptionId) => void;
  required?: boolean;
  disabled?: boolean;
  name?: string;
  className?: string;
  buttonClassName?: string;
  errorMessage?: string;
  showLabel?: boolean;
  columns?: number;
  languageCode?: LanguageCode | string;
};

export default function CustomButtonSelector<
  TOptionId extends string | number = string | number,
>({
  label,
  options,
  value = null,
  onChange,
  required = false,
  disabled = false,
  name,
  className = "",
  buttonClassName = "",
  errorMessage = "",
  showLabel = true,
  columns,
  languageCode,
}: CustomButtonSelectorProps<TOptionId>) {
  const { i18n } = useTranslation();
  const activeLanguageCode = languageCode ?? i18n.language;
  const isArabic = activeLanguageCode?.startsWith(LANGUAGE_KEYS.ARABIC);

  return (
    <SelectorStyles.SelectorWrapper
      className={className}
      $isArabic={isArabic}
      $hasError={Boolean(errorMessage)}
    >
      {showLabel && label ? (
        <SelectorStyles.FieldLabel $isArabic={isArabic}>
          {label}
          {required ? <span className="required-asterisk"> *</span> : null}
        </SelectorStyles.FieldLabel>
      ) : null}
      <SelectorStyles.OptionsGrid
        $columns={columns ?? options.length}
        $isArabic={isArabic}
      >
        {options.map((option) => {
          const isSelected = value === option.id;
          const isDisabled = disabled || option.disabled;

          return (
            <SelectorStyles.SelectorButton
              key={String(option.id)}
              type="button"
              name={name}
              className={buttonClassName}
              disabled={isDisabled}
              aria-pressed={isSelected}
              $isSelected={isSelected}
              onClick={() => {
                if (!isDisabled) {
                  onChange(option.id);
                }
              }}
            >
              {option.label}
            </SelectorStyles.SelectorButton>
          );
        })}
      </SelectorStyles.OptionsGrid>
      {errorMessage ? (
        <SelectorStyles.ErrorMessage $isArabic={isArabic}>
          {errorMessage}
        </SelectorStyles.ErrorMessage>
      ) : null}
    </SelectorStyles.SelectorWrapper>
  );
}
