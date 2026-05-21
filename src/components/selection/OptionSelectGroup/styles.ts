import styled from "styled-components";
import { NotoSansFont } from "@/styles/fonts";
import type { ResolvedOptionSelectAppearance } from "./types";

const sans = NotoSansFont.style.fontFamily;

const Container = styled.fieldset<{ $appearance: ResolvedOptionSelectAppearance }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $appearance }) => $appearance.gap};
  width: min(100%, ${({ $appearance }) => $appearance.maxWidth});
  max-width: ${({ $appearance }) => $appearance.maxWidth};
  align-self: flex-start;
  border: none;
  margin: 0;
  padding: 0;
  min-width: 0;
`;

const Question = styled.legend<{ $appearance: ResolvedOptionSelectAppearance }>`
  font-family: ${sans};
  font-size: ${({ $appearance }) => $appearance.questionFontSize};
  font-weight: ${({ $appearance }) => $appearance.questionFontWeight};
  line-height: ${({ $appearance }) => $appearance.questionLineHeight};
  color: ${({ $appearance }) => $appearance.questionColor};
  padding: 0;
  margin: 0;
  float: left;
  width: 100%;
`;

const OptionsRow = styled.div<{ $appearance: ResolvedOptionSelectAppearance }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ $appearance }) => $appearance.optionsGap};
  width: 100%;
`;

const OptionButton = styled.button<{
  $selected: boolean;
  $appearance: ResolvedOptionSelectAppearance;
  $disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ $appearance }) => $appearance.optionMinHeight};
  padding: ${({ $appearance }) => $appearance.optionPadding};
  border-radius: ${({ $appearance }) => $appearance.borderRadius};
  border: 1px solid
    ${({ $selected, $appearance }) =>
      $selected ? $appearance.selectedBorderColor : $appearance.unselectedBorderColor};
  background-color: ${({ $selected, $appearance }) =>
    $selected ? $appearance.selectedBackgroundColor : $appearance.unselectedBackgroundColor};
  color: ${({ $selected, $appearance }) =>
    $selected ? $appearance.selectedColor : $appearance.unselectedColor};
  font-family: ${sans};
  font-size: ${({ $appearance }) => $appearance.optionFontSize};
  font-weight: ${({ $appearance }) => $appearance.optionFontWeight};
  line-height: ${({ $appearance }) => $appearance.optionLineHeight};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  box-sizing: border-box;
  white-space: nowrap;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  &:focus-visible {
    outline: 2px solid ${({ $appearance }) => $appearance.selectedBackgroundColor};
    outline-offset: 2px;
  }
`;

const ErrorMessage = styled.span<{ $appearance: ResolvedOptionSelectAppearance }>`
  font-family: ${sans};
  font-size: ${({ $appearance }) => $appearance.errorFontSize};
  color: ${({ $appearance }) => $appearance.errorColor};
  line-height: 1.25;
  width: 100%;
`;

export const OptionSelectGroupStyles = {
  Container,
  Question,
  OptionsRow,
  OptionButton,
  ErrorMessage,
};
