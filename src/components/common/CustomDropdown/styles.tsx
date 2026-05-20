import { Select } from "antd";
import styled from "styled-components";
import { SITE_COLORS as c } from "@/utility/strings";

const StyledDropdownWrapper = styled.div<{
  $isFullWidth?: boolean;
  $hasError?: boolean;
  $isArabic?: boolean;
}>`
  display: flex;
  flex: ${({ $isFullWidth }) => ($isFullWidth ? "1" : "0")};
  flex-direction: column;
  gap: 5px;
  width: 100%;
  position: relative;
  direction: ${({ $isArabic }) => ($isArabic ? "rtl" : "ltr")};
`;

const StyledDropdownLabel = styled.label<{ $isArabic?: boolean }>`
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

const StyledSelect = styled(Select)<{
  $borderRadius?: number;
  $backgroundColor?: string;
  $height?: string;
  $minWidth?: string;
  $hasError?: boolean;
  $isArabic?: boolean;
}>`
  width: 100%;
  min-width: ${({ $minWidth }) => $minWidth || "0"};
  height: ${({ $height }) => $height || "40px"};

  &.ant-select-single {
    height: ${({ $height }) => $height || "40px"};
  }

  .ant-select-selector {
    width: 100% !important;
    min-height: ${({ $height }) => $height || "40px"} !important;
    height: ${({ $height }) => $height || "40px"} !important;
    padding: 0 11px !important;
    border: 1px solid
      ${({ $hasError }) => ($hasError ? c.RED : c.PLACEHOLDER_MUTED)} !important;
    border-radius: ${({ $borderRadius }) => $borderRadius ?? 5}px !important;
    background: ${({ $backgroundColor }) =>
      $backgroundColor || c.WHITE} !important;
    box-shadow: none !important;
    align-items: center;
    direction: ${({ $isArabic }) => ($isArabic ? "rtl" : "ltr")};
  }

  &.ant-select-focused .ant-select-selector,
  &:hover .ant-select-selector {
    border-color: ${({ $hasError }) =>
      $hasError ? c.RED : c.PLACEHOLDER_GREY} !important;
    box-shadow: none !important;
  }

  &.ant-select-disabled .ant-select-selector {
    background: ${c.GREY_2} !important;
    cursor: not-allowed !important;
  }

  .ant-select-selection-search-input {
    height: 100% !important;
    font-size: 16px !important;
  }

  .ant-select-selection-item,
  .ant-select-selection-placeholder {
    color: ${c.BLUE_1};
    font-family:
      Noto Sans,
      Noto Sans Arabic,
      sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: ${({ $height }) => $height || "40px"} !important;
    text-align: ${({ $isArabic }) => ($isArabic ? "right" : "left")};
  }

  .ant-select-selection-placeholder {
    color: ${c.PLACEHOLDER_GREY};
    opacity: 1;
  }

  .ant-select-arrow {
    color: ${c.DATE_PICKER_ICON};
    font-size: 12px;
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

export const DropdownStyles = {
  StyledDropdownWrapper,
  StyledDropdownLabel,
  StyledSelect,
  ErrorMessage,
};
