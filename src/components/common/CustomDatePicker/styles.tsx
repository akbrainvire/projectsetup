import styled from "styled-components";
import { SITE_COLORS as c } from "@/utility/strings";

const DatePickerWrapper = styled.div<{
  $hasError?: boolean;
  $isArabic?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  position: relative;
  direction: ${({ $isArabic }) => ($isArabic ? "rtl" : "ltr")};

  .ant-picker {
    width: 100%;
    height: 40px;
    padding: 0 11px;
    background: ${c.WHITE};
    border: 1px solid
      ${({ $hasError }) => ($hasError ? c.RED : c.PLACEHOLDER_MUTED)};
    border-radius: 5px;
    box-shadow: none;
    color: ${c.BLUE_1};
    font-family:
      Noto Sans,
      Noto Sans Arabic,
      sans-serif;
  }

  .ant-picker:hover,
  .ant-picker-focused,
  .ant-picker-status-error,
  .ant-picker-status-error:not(.ant-picker-disabled):not(
      .ant-picker-borderless
    ) {
    border-color: ${({ $hasError }) =>
      $hasError ? c.RED : c.PLACEHOLDER_GREY};
    box-shadow: none;
  }

  .ant-picker-disabled {
    background: ${c.GREY_2};
    cursor: not-allowed;
  }

  .ant-picker-input {
    height: 100%;
  }

  .ant-picker-input > input {
    color: ${c.BLUE_1};
    font-size: 16px;
    font-weight: 400;
    font-family:
      Noto Sans,
      Noto Sans Arabic,
      sans-serif;
    text-align: ${({ $isArabic }) => ($isArabic ? "right" : "left")};
  }

  .ant-picker-input > input::placeholder {
    color: ${c.PLACEHOLDER_GREY};
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
  }

  .ant-picker-suffix {
    color: ${c.DATE_PICKER_ICON};
    font-size: 16px;
  }
`;

const FieldLabel = styled.label<{ $isArabic?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  color: ${c.FIELD_LABEL};
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  text-align: ${({ $isArabic }) => ($isArabic ? "right" : "left")};
  direction: ${({ $isArabic }) => ($isArabic ? "rtl" : "ltr")};

  @media (max-width: 475px) {
    font-size: 13px;
  }
`;

const ErrorMessage = styled.p<{ $isArabic?: boolean }>`
  margin: 0;
  min-height: 1.2rem;
  color: ${c.RED};
  font-size: 0.875rem;
  text-align: ${({ $isArabic }) => ($isArabic ? "right" : "left")};
  direction: ${({ $isArabic }) => ($isArabic ? "rtl" : "ltr")};
`;

export const DatePickerStyles = {
  DatePickerWrapper,
  FieldLabel,
  ErrorMessage,
};
