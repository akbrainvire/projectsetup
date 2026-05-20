"use client";

import dayjs, { type Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import type React from "react";
import { useTranslation } from "react-i18next";
import {
  LANGUAGE_KEYS,
  TRANSLATION_KEYS,
  type LanguageCode,
} from "@/utility/strings";
import { DatePickerStyles } from "@/components/common/CustomDatePicker/styles";

dayjs.extend(customParseFormat);

const DATE_FORMAT = "DD/MM/YYYY";
const YEAR_FORMAT = "YYYY";

export type CustomDatePickerPickerType =
  | "date"
  | "year"
  | "month"
  | "quarter"
  | "week";

export type CustomDatePickerValue = string | Date | Dayjs | null | undefined;

export type CustomDatePickerProps = {
  id?: string;
  name?: string;
  fieldName?: string;
  label?: React.ReactNode;
  title?: React.ReactNode;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  isDisabled?: boolean;
  value?: CustomDatePickerValue;
  data?: CustomDatePickerValue;
  onChange?: (value: string | null, date: Dayjs | null) => void;
  onChangeHandler?: (event: {
    target: { name?: string; value: string | null };
  }) => void;
  pickerType?: CustomDatePickerPickerType;
  yearOnly?: boolean;
  format?: string;
  dateFormatOnChange?: string;
  showLabel?: boolean;
  className?: string;
  labelClassName?: string;
  errorMessage?: string;
  hasError?: boolean;
  disabledDate?: DatePickerProps["disabledDate"];
  allowClear?: boolean;
  inputReadOnly?: boolean;
  autoFocus?: boolean;
  disableAutoFocus?: boolean;
  languageCode?: LanguageCode | string;
  getPopupContainer?: DatePickerProps["getPopupContainer"];
  placement?: DatePickerProps["placement"];
};

const parsePickerValue = (
  value: CustomDatePickerValue,
  format: string,
): Dayjs | null => {
  if (!value) {
    return null;
  }

  if (dayjs.isDayjs(value)) {
    return value;
  }

  if (value instanceof Date) {
    const dateValue = dayjs(value);
    return dateValue.isValid() ? dateValue : null;
  }

  const strictValue = dayjs(value, format, true);
  if (strictValue.isValid()) {
    return strictValue;
  }

  const looseValue = dayjs(value);
  return looseValue.isValid() ? looseValue : null;
};

export default function CustomDatePicker({
  id,
  name,
  fieldName,
  label,
  title,
  placeholder,
  required = false,
  disabled = false,
  isDisabled = false,
  value,
  data,
  onChange,
  onChangeHandler,
  pickerType = "date",
  yearOnly = false,
  format,
  dateFormatOnChange,
  showLabel = true,
  className = "",
  labelClassName = "",
  errorMessage = "",
  hasError = false,
  disabledDate,
  allowClear = true,
  inputReadOnly = true,
  autoFocus = false,
  disableAutoFocus = false,
  languageCode,
  getPopupContainer,
  placement = "bottomLeft",
}: CustomDatePickerProps) {
  const { i18n, t } = useTranslation("common");
  const activeLanguageCode = languageCode ?? i18n.language;
  const isArabic = activeLanguageCode?.startsWith(LANGUAGE_KEYS.ARABIC);
  const resolvedName = name ?? fieldName;
  const resolvedLabel = label ?? title;
  const resolvedPickerType = yearOnly ? "year" : pickerType;
  const isYearPicker = resolvedPickerType === "year";
  const resolvedFormat =
    format ?? dateFormatOnChange ?? (isYearPicker ? YEAR_FORMAT : DATE_FORMAT);
  const selectedValue = parsePickerValue(data ?? value, resolvedFormat);
  const hasValidationError = hasError || Boolean(errorMessage);
  const pickerPlaceholder =
    placeholder ??
    t(
      isYearPicker
        ? TRANSLATION_KEYS.COMMON.DATE_PICKER.YEAR_FORMAT_PLACEHOLDER
        : TRANSLATION_KEYS.COMMON.DATE_PICKER.DATE_FORMAT_PLACEHOLDER,
    );

  const handleChange: DatePickerProps["onChange"] = (date) => {
    const nextValue = date ? date.format(resolvedFormat) : null;

    onChange?.(nextValue, date);
    onChangeHandler?.({
      target: {
        name: resolvedName,
        value: nextValue,
      },
    });
  };

  return (
    <DatePickerStyles.DatePickerWrapper
      className={className}
      $hasError={hasValidationError}
      $isArabic={isArabic}
    >
      {showLabel && resolvedLabel ? (
        <DatePickerStyles.FieldLabel
          className={labelClassName}
          htmlFor={id ?? resolvedName}
          $isArabic={isArabic}
        >
          {resolvedLabel}
          {required ? <span className="required-asterisk"> *</span> : null}
        </DatePickerStyles.FieldLabel>
      ) : null}
      <DatePicker
        id={id ?? resolvedName}
        name={resolvedName}
        picker={isYearPicker ? "year" : resolvedPickerType}
        format={resolvedFormat}
        value={selectedValue}
        placeholder={pickerPlaceholder}
        disabled={disabled || isDisabled}
        disabledDate={disabledDate}
        onChange={handleChange}
        allowClear={allowClear}
        inputReadOnly={inputReadOnly}
        autoFocus={autoFocus && !disableAutoFocus}
        getPopupContainer={getPopupContainer}
        placement={placement}
        aria-required={required}
        status={hasValidationError ? "error" : undefined}
      />
      {hasValidationError ? (
        <DatePickerStyles.ErrorMessage $isArabic={isArabic}>
          {errorMessage}
        </DatePickerStyles.ErrorMessage>
      ) : null}
    </DatePickerStyles.DatePickerWrapper>
  );
}

export const CustomDatePickerInput = CustomDatePicker;
