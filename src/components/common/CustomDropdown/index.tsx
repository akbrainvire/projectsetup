"use client";

import type React from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import {
  LANGUAGE_KEYS,
  type LanguageCode,
} from "@/utility/strings";
import { DropdownStyles } from "@/components/common/CustomDropdown/styles";

export type CustomDropdownOption = {
  label: React.ReactNode;
  value: string | number | boolean;
  disabled?: boolean;
};

export type CustomDropdownChangeEvent = {
  target: {
    name?: string;
    value: string | number | boolean | Array<string | number | boolean> | null;
    option?: unknown;
  };
};

export type CustomDropdownProps = {
  label?: React.ReactNode;
  showLabel?: boolean;
  options?: CustomDropdownOption[];
  placeholder?: string;
  onChangeHandler?: (event: CustomDropdownChangeEvent) => void;
  onChange?: (
    value: string | number | boolean | Array<string | number | boolean> | null,
    option?: unknown,
  ) => void;
  value?: string | number | boolean | Array<string | number | boolean> | null;
  allowClear?: boolean;
  defaultValue?: SelectProps["defaultValue"];
  fieldName?: string;
  name?: string;
  mode?: SelectProps["mode"];
  isDropdown?: boolean;
  withSearch?: boolean;
  required?: boolean;
  isFullWidth?: boolean;
  borderRadius?: number;
  customClass?: string;
  customContainerClass?: string;
  allowUserInput?: boolean;
  errorMessage?: React.ReactNode;
  backgroundColor?: string;
  disabled?: boolean;
  hideErrorMessage?: boolean;
  customHeight?: string;
  minWidth?: string;
  maxTagCount?: number;
  languageCode?: LanguageCode | string;
  className?: string;
};

export default function CustomDropdown({
  label,
  showLabel = true,
  options = [],
  placeholder,
  onChangeHandler,
  onChange,
  value = null,
  allowClear = false,
  defaultValue,
  fieldName,
  name,
  mode,
  withSearch = false,
  required = false,
  isFullWidth = false,
  borderRadius = 5,
  customClass = "",
  customContainerClass = "",
  allowUserInput = false,
  errorMessage,
  backgroundColor,
  disabled = false,
  hideErrorMessage = false,
  customHeight = "40px",
  minWidth = "",
  maxTagCount = 2,
  languageCode,
  className = "",
}: CustomDropdownProps) {
  const { i18n } = useTranslation();
  const activeLanguageCode = languageCode ?? i18n.language;
  const isArabic = activeLanguageCode?.startsWith(LANGUAGE_KEYS.ARABIC);
  const resolvedName = name ?? fieldName;
  const hasError = Boolean(errorMessage);

  const handleChange: SelectProps["onChange"] = (selectedValue, option) => {
    const nextValue =
      selectedValue === undefined
        ? null
        : (selectedValue as
            | string
            | number
            | boolean
            | Array<string | number | boolean>);

    onChange?.(nextValue, option);
    onChangeHandler?.({
      target: {
        name: resolvedName,
        value: nextValue,
        option,
      },
    });
  };

  return (
    <DropdownStyles.StyledDropdownWrapper
      className={`${customContainerClass} ${className}`}
      $isFullWidth={isFullWidth}
      $hasError={hasError}
      $isArabic={isArabic}
    >
      {showLabel && label ? (
        <DropdownStyles.StyledDropdownLabel $isArabic={isArabic}>
          {label}
          {required ? <span className="required-asterisk"> *</span> : null}
        </DropdownStyles.StyledDropdownLabel>
      ) : null}
      <DropdownStyles.StyledSelect
        className={customClass}
        id={resolvedName}
        options={options as SelectProps["options"]}
        value={value ?? undefined}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={handleChange}
        allowClear={allowClear}
        disabled={disabled}
        mode={mode}
        showSearch={withSearch || allowUserInput}
        optionFilterProp="label"
        maxTagCount={maxTagCount}
        suffixIcon={<DownOutlined />}
        $borderRadius={borderRadius}
        $backgroundColor={backgroundColor}
        $height={customHeight}
        $minWidth={minWidth}
        $hasError={hasError}
        $isArabic={isArabic}
      />
      {!hideErrorMessage && hasError ? (
        <DropdownStyles.ErrorMessage $isArabic={isArabic}>
          {errorMessage}
        </DropdownStyles.ErrorMessage>
      ) : null}
    </DropdownStyles.StyledDropdownWrapper>
  );
}
