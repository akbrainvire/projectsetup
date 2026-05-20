import styled from "styled-components";
import { SITE_COLORS as c } from "@/utility/strings";

const SelectorWrapper = styled.div<{
  $hasError?: boolean;
  $isArabic?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  position: relative;
  direction: ${({ $isArabic }) => ($isArabic ? "rtl" : "ltr")};
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

const OptionsGrid = styled.div<{
  $columns: number;
  $isArabic?: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(
    ${({ $columns }) => Math.max($columns, 1)},
    minmax(0, 1fr)
  );
  gap: 17px;
  width: 100%;
  direction: ${({ $isArabic }) => ($isArabic ? "rtl" : "ltr")};

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const SelectorButton = styled.button<{ $isSelected?: boolean }>`
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid
    ${({ $isSelected }) =>
      $isSelected ? c.PATIENT_PROFILE_PRIMARY : c.PLACEHOLDER_MUTED};
  border-radius: 5px;
  background: ${({ $isSelected }) =>
    $isSelected ? c.BUTTON_SELECTOR_ACTIVE_BACKGROUND : c.WHITE};
  color: ${({ $isSelected }) =>
    $isSelected ? c.PATIENT_PROFILE_PRIMARY : c.PLACEHOLDER_MUTED};
  cursor: pointer;
  font-family:
    Noto Sans,
    Noto Sans Arabic,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;

  &:focus-visible {
    outline: 2px solid ${c.PATIENT_PROFILE_PRIMARY};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
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

export const CustomButtonSelectorStyles = {
  SelectorWrapper,
  FieldLabel,
  OptionsGrid,
  SelectorButton,
  ErrorMessage,
};
