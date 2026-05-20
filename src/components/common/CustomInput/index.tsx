"use client";

import {
  EyeInvisibleOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import { useRef } from "react";
import type React from "react";
import CustomButton from "@/components/common/CustomButton";
import { CustomInputStyles as InputStyles } from "@/components/common/CustomInput/styles";
import { SITE_COLORS as c } from "@/utility/strings";

export type CustomInputProps = {
  name?: string;
  value?: string;
  placeholder?: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  type?: string;
  errorMessage?: string;
  required?: boolean;
  inputBackground?: string;
  inputColor?: string;
  placeHolderColor?: string;
  opacity?: string;
  isBorder?: boolean;
  borderRadius?: string;
  showLabel?: boolean;
  customWrapperClass?: string;
  countryCodeOptions?: Array<{ countryCode?: string; phoneCode?: string }>;
  selectedCountryCode?: string;
  onCountryCodeChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  showDropdown?: boolean;
  isValid?: boolean;
  disabled?: boolean;
  inputClass?: string;
  isVerified?: boolean;
  verifyTag?: boolean;
  labelClass?: string;
  labelIcon?: React.ReactNode;
  labelCallback?: () => void;
  verifyCallback?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onToggleEyeIcon?: () => void;
  showSearchIcon?: boolean;
  showPassWordIcon?: boolean;
  isPasswordVisible?: boolean;
  isMessageRelative?: boolean;
  messageBoxHeight?: string;
  disabledPhoneCode?: boolean;
  height?: string;
  allowOnlyNumber?: boolean;
  labelClassName?: string;
  top?: string;
  disableAutoFocus?: boolean;
  hideErrorMessageBox?: boolean;
  max?: string | number | null;
  showRightIconFixed?: boolean;
  rightIcon?: React.ReactNode;
  customClassName?: string;
  postText?: boolean;
  id?: string;
  isOtpVerifying?: boolean;
  showLabelTooltip?: boolean;
  prefix?: boolean;
  preFixText?: string;
  postfix?: boolean;
  postFixText?: string;
  maxLength?: number | null;
  min?: string | number | null;
  showTooltip?: boolean;
  tooltipPlacement?: "top" | "left" | "right" | "bottom";
  tooltipTitle?: React.ReactNode;
  errorMessageClass?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  hideValuesOnHover?: boolean;
  verifyButtonText?: React.ReactNode;
  verifiedLabel?: React.ReactNode;
  autoComplete?: string;
};

export default function CustomInput({
  name,
  value,
  placeholder,
  onChangeHandler,
  label,
  type,
  errorMessage,
  required = false,
  inputBackground,
  inputColor,
  placeHolderColor,
  opacity,
  isBorder = true,
  borderRadius = "5px",
  showLabel = true,
  customWrapperClass,
  countryCodeOptions,
  selectedCountryCode,
  onCountryCodeChange,
  showDropdown = false,
  isValid = false,
  disabled = false,
  inputClass,
  isVerified = false,
  verifyTag = false,
  labelClass = "",
  labelIcon,
  labelCallback = () => {},
  verifyCallback = () => {},
  onToggleEyeIcon = () => {},
  showSearchIcon = false,
  showPassWordIcon = false,
  isPasswordVisible = false,
  isMessageRelative = false,
  messageBoxHeight = "",
  disabledPhoneCode = false,
  height = "",
  allowOnlyNumber = true,
  labelClassName,
  top,
  disableAutoFocus = false,
  hideErrorMessageBox = false,
  max = null,
  showRightIconFixed = false,
  rightIcon = null,
  customClassName = "",
  postText = false,
  id = "",
  isOtpVerifying = false,
  showLabelTooltip = false,
  prefix = false,
  preFixText = "",
  postfix = false,
  postFixText = "",
  maxLength = null,
  min = null,
  showTooltip = false,
  tooltipPlacement = "bottom",
  tooltipTitle = null,
  errorMessageClass = "",
  inputProps = {},
  hideValuesOnHover = false,
  verifyButtonText = "Verify",
  verifiedLabel = "Verified",
  autoComplete,
}: CustomInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const verifyButtonProps = {
    color: c.ORANGE,
    backgroundColor: "transparent",
    isHideBoxShadow: true,
    customHover: "none",
    customPadding: "0",
  };

  const renderInput = () => {
    const input = (
      <InputStyles.StyledInput
        {...inputProps}
        id={id}
        ref={inputRef}
        type={type}
        name={name}
        title={
          hideValuesOnHover
            ? ""
            : showTooltip
              ? ""
              : !disabled && typeof value === "string" && value !== ""
                ? value
                : (placeholder ?? "")
        }
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChangeHandler(e);
        }}
        onKeyDown={(e) => {
          if (type === "number" && allowOnlyNumber) {
            const allowedKeys = [
              "Backspace",
              "Tab",
              "ArrowLeft",
              "ArrowRight",
              "Delete",
              "Home",
              "End",
            ];
            if (
              !/[0-9]/.test(e.key) &&
              !allowedKeys.includes(e.key) &&
              !(e.ctrlKey || e.metaKey)
            ) {
              e.preventDefault();
            }
          }
        }}
        onWheel={(e: React.WheelEvent<HTMLInputElement>) => {
          if (type === "number") {
            (e.target as HTMLInputElement)?.blur();
          }
        }}
        $backgroundColor={inputBackground}
        $placeHolderColor={placeHolderColor}
        $opacity={opacity}
        $color={inputColor}
        $borderRadius={borderRadius}
        $showDropdown={showDropdown}
        $isValid={isValid}
        $disabled={disabled}
        className={inputClass}
        $showSearchIcon={showSearchIcon || showPassWordIcon}
        autoFocus={!disableAutoFocus}
        max={max ?? undefined}
        min={min ?? undefined}
        maxLength={maxLength ?? undefined}
        $showRightIconFixed={showRightIconFixed}
        autoComplete={autoComplete}
      />
    );

    if (showTooltip) {
      return (
        <Tooltip
          title={tooltipTitle || value || placeholder}
          placement={tooltipPlacement}
        >
          <InputStyles.TooltipInputAnchor>{input}</InputStyles.TooltipInputAnchor>
        </Tooltip>
      );
    }

    return input;
  };

  return (
    <InputStyles.StyledInputWrapper className={customWrapperClass}>
      {showLabel ? (
        <InputStyles.InputGroup className="label_group">
          <InputStyles.InfoLabelWrapper
            className={verifyTag ? "verifiedWrapper" : "notVerifiedWrapper"}
          >
            <InputStyles.StyledInputLabel
              className={`${labelClass} ${labelClassName ?? ""}`}
              onClick={labelCallback}
            >
              {labelIcon}
              {showLabelTooltip ? (
                <Tooltip title={label}>
                  <span>{label}</span>
                </Tooltip>
              ) : (
                <div>
                  {label}
                  {required && label ? (
                    <span className="required-asterisk"> *</span>
                  ) : null}
                </div>
              )}
            </InputStyles.StyledInputLabel>
          </InputStyles.InfoLabelWrapper>
          {verifyTag ? (
            <InputStyles.StyledInputLabel>
              {isVerified ? (
                <InputStyles.VerifyTag>{verifiedLabel}</InputStyles.VerifyTag>
              ) : (
                <CustomButton
                  {...verifyButtonProps}
                  text={verifyButtonText}
                  onClick={(e) => !isOtpVerifying && verifyCallback(e)}
                  isOtpVerifying={isOtpVerifying}
                />
              )}
            </InputStyles.StyledInputLabel>
          ) : null}
        </InputStyles.InputGroup>
      ) : null}

      <InputStyles.InputGroup>
        {showDropdown ? (
          <InputStyles.CountryCodeSelect
            value={selectedCountryCode}
            onChange={onCountryCodeChange}
            disabled={disabled || disabledPhoneCode}
            $isValid={isValid}
            $isBorder={isBorder}
          >
            {countryCodeOptions?.length
              ? countryCodeOptions.map((option) => (
                  <option
                    key={"country_" + option?.countryCode}
                    value={option?.phoneCode}
                  >
                    {`+${option?.phoneCode}`}
                  </option>
                ))
              : null}
          </InputStyles.CountryCodeSelect>
        ) : null}
        <InputStyles.InputWrapper
          $borderRadius={borderRadius}
          $isBorder={isBorder}
          $showDropdown={showDropdown}
          $isValid={isValid}
          $backgroundColor={inputBackground}
          $showSearchIcon={showSearchIcon || showPassWordIcon}
          $showRightIconFixed={showRightIconFixed}
          $height={height}
        >
          <InputStyles.PrefixWrapper>
            {prefix ? (
              <InputStyles.PrefixInnerWrapper>
                <InputStyles.PreFixContext>{preFixText}</InputStyles.PreFixContext>
              </InputStyles.PrefixInnerWrapper>
            ) : null}
            {renderInput()}
            {postfix ? (
              <InputStyles.PostfixInnerWrapper>
                <InputStyles.PostfixContext>{postFixText}</InputStyles.PostfixContext>
              </InputStyles.PostfixInnerWrapper>
            ) : null}
          </InputStyles.PrefixWrapper>

          {showSearchIcon || showRightIconFixed || rightIcon ? (
            <InputStyles.RightIcon
              $showRightIconFixed={showRightIconFixed}
              className={customClassName}
              $postText={postText}
              onClick={() => {
                inputRef?.current?.focus();
              }}
            >
              {showRightIconFixed || rightIcon ? (
                rightIcon
              ) : (
                <InputStyles.SearchTriggerIcon>
                  <SearchOutlined />
                </InputStyles.SearchTriggerIcon>
              )}
            </InputStyles.RightIcon>
          ) : null}
          {showPassWordIcon ? (
            <InputStyles.RightIcon>
              <InputStyles.IconContainer onClick={() => onToggleEyeIcon()}>
                {isPasswordVisible ? (
                  <InputStyles.PasswordToggleIcon>
                    <EyeOutlined />
                  </InputStyles.PasswordToggleIcon>
                ) : (
                  <InputStyles.PasswordToggleIcon>
                    <EyeInvisibleOutlined />
                  </InputStyles.PasswordToggleIcon>
                )}
              </InputStyles.IconContainer>
            </InputStyles.RightIcon>
          ) : null}
        </InputStyles.InputWrapper>
      </InputStyles.InputGroup>
      {!hideErrorMessageBox || errorMessage ? (
        <InputStyles.errorMessage
          className={errorMessageClass}
          $isMessageRelative={isMessageRelative}
          $messageBoxHeight={messageBoxHeight}
          $top={top}
        >
          {errorMessage ? errorMessage : null}
        </InputStyles.errorMessage>
      ) : null}
    </InputStyles.StyledInputWrapper>
  );
}
