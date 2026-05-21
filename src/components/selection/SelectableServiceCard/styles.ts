import styled from "styled-components";
import { SELECTABLE_SERVICE_CARD_DEFAULTS } from "@/constants/selectableServiceCard";
import { NotoSansFont } from "@/styles/fonts";
import type { ResolvedSelectableServiceCardAppearance } from "./types";

const checkDefaults = SELECTABLE_SERVICE_CARD_DEFAULTS;

const sans = NotoSansFont.style.fontFamily;

const CardButton = styled.button<{
  $selected: boolean;
  $disabled: boolean;
  $appearance: ResolvedSelectableServiceCardAppearance;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ $appearance }) => $appearance.gap};
  width: 100%;
  max-width: ${({ $appearance }) => $appearance.maxWidth};
  min-height: ${({ $appearance }) => $appearance.minHeight};
  padding: ${({ $appearance }) => $appearance.padding};
  border-radius: ${({ $appearance }) => $appearance.borderRadius};
  border-style: solid;
  border-width: ${({ $appearance }) => $appearance.selectedBorderWidth};
  border-color: ${({ $selected, $appearance }) =>
    $selected ? $appearance.selectedBorderColor : $appearance.unselectedBorderColor};
  background-color: ${({ $appearance }) => $appearance.backgroundColor};
  box-sizing: border-box;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  text-align: left;
  min-width: 0;
  flex: 1 1 260px;

  &:focus-visible {
    outline: 2px solid ${({ $appearance }) => $appearance.selectedBorderColor};
    outline-offset: 2px;
  }
`;

const SelectedCheckWrap = styled.span<{ $appearance: ResolvedSelectableServiceCardAppearance }>`
  position: absolute;
  top: ${checkDefaults.CHECK_OFFSET_TOP};
  right: ${checkDefaults.CHECK_OFFSET_RIGHT};
  width: ${({ $appearance }) => $appearance.iconSize};
  height: ${({ $appearance }) => $appearance.iconSize};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  svg {
    display: block;
    width: ${checkDefaults.CHECK_ICON_SIZE};
    height: ${checkDefaults.CHECK_ICON_SIZE};
    flex-shrink: 0;
  }
`;

const HeaderRow = styled.div<{ $appearance: ResolvedSelectableServiceCardAppearance }>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ $appearance }) => $appearance.headerGap};
  width: 100%;
  padding-right: 36px;
  box-sizing: border-box;
`;

const IconCircle = styled.span<{
  $iconBackgroundColor: string;
  $appearance: ResolvedSelectableServiceCardAppearance;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ $appearance }) => $appearance.iconSize};
  height: ${({ $appearance }) => $appearance.iconSize};
  border-radius: ${({ $appearance }) => $appearance.iconBorderRadius};
  background-color: ${({ $iconBackgroundColor }) => $iconBackgroundColor};
`;

const Badge = styled.span<{
  $backgroundColor: string;
  $color: string;
  $appearance: ResolvedSelectableServiceCardAppearance;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ $appearance }) => $appearance.badgePadding};
  border-radius: ${({ $appearance }) => $appearance.badgeBorderRadius};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};
  font-family: ${sans};
  font-size: ${({ $appearance }) => $appearance.badgeFontSize};
  font-weight: ${({ $appearance }) => $appearance.badgeFontWeight};
  line-height: 1.2;
  white-space: nowrap;
`;

const ContentBlock = styled.div<{ $appearance: ResolvedSelectableServiceCardAppearance }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $appearance }) => $appearance.contentGap};
  width: 100%;
  min-width: 0;
`;

const Title = styled.span<{ $appearance: ResolvedSelectableServiceCardAppearance }>`
  font-family: ${sans};
  font-size: ${({ $appearance }) => $appearance.titleFontSize};
  font-weight: ${({ $appearance }) => $appearance.titleFontWeight};
  line-height: ${({ $appearance }) => $appearance.titleLineHeight};
  color: ${({ $appearance }) => $appearance.titleColor};
`;

const Description = styled.span<{ $appearance: ResolvedSelectableServiceCardAppearance }>`
  font-family: ${sans};
  font-size: ${({ $appearance }) => $appearance.descriptionFontSize};
  font-weight: ${({ $appearance }) => $appearance.descriptionFontWeight};
  line-height: ${({ $appearance }) => $appearance.descriptionLineHeight};
  color: ${({ $appearance }) => $appearance.descriptionColor};
`;

const ErrorMessage = styled.span<{ $appearance: ResolvedSelectableServiceCardAppearance }>`
  font-family: ${sans};
  font-size: ${({ $appearance }) => $appearance.errorFontSize};
  color: ${({ $appearance }) => $appearance.errorColor};
  line-height: 1.25;
  width: 100%;
  margin-top: 4px;
`;

export const SelectableServiceCardStyles = {
  CardButton,
  SelectedCheckWrap,
  HeaderRow,
  IconCircle,
  Badge,
  ContentBlock,
  Title,
  Description,
  ErrorMessage,
};
