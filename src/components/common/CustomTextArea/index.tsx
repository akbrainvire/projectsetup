"use client";

import { useRef } from "react";
import type React from "react";
import { CustomTextAreaStyles as TextAreaStyles } from "@/components/common/CustomTextArea/styles";

export type CustomTextAreaProps = {
  label?: React.ReactNode;
  placeholder?: string;
  placeHolderColor?: string;
  opacity?: string;
  value?: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  required?: boolean;
  containerClass?: string;
  errorMessage?: string;
  inputClass?: string;
  disabled?: boolean;
  disableAutoFocus?: boolean;
  rows?: number;
};

export default function CustomTextArea({
  label,
  placeholder,
  placeHolderColor,
  opacity,
  value,
  onChangeHandler,
  name,
  required = false,
  containerClass = "",
  errorMessage,
  inputClass = "",
  disabled,
  disableAutoFocus = false,
  rows = 5,
}: CustomTextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <TextAreaStyles.StyledTextAreaWrapper className={containerClass}>
      <TextAreaStyles.StyledTextAreaLabel>
        {label}
        {required && label ? (
          <span className="required-asterisk"> *</span>
        ) : null}
      </TextAreaStyles.StyledTextAreaLabel>
      <TextAreaStyles.StyledTextArea
        name={name}
        ref={textareaRef}
        placeholder={placeholder}
        $placeHolderColor={placeHolderColor}
        $opacity={opacity}
        value={value}
        onChange={onChangeHandler}
        rows={rows}
        disabled={disabled}
        className={`${inputClass ?? ""} ${disabled ? "disabled" : ""}`}
        autoFocus={!disableAutoFocus}
      />
      {errorMessage ? (
        <TextAreaStyles.ErrorMessage>{errorMessage}</TextAreaStyles.ErrorMessage>
      ) : null}
    </TextAreaStyles.StyledTextAreaWrapper>
  );
}
