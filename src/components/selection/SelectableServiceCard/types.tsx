import type React from "react";

export type SelectableServiceCardBadge = {
  label: string;
  backgroundColor?: string;
  color?: string;
};

export type SelectableServiceCardAppearance = {
  maxWidth?: string;
  minHeight?: string;
  padding?: string;
  borderRadius?: string;
  gap?: string;
  headerGap?: string;
  contentGap?: string;
  selectedBorderColor?: string;
  selectedBorderWidth?: string;
  unselectedBorderColor?: string;
  unselectedBorderWidth?: string;
  backgroundColor?: string;
  titleColor?: string;
  titleFontSize?: string;
  titleFontWeight?: string | number;
  titleLineHeight?: string;
  descriptionColor?: string;
  descriptionFontSize?: string;
  descriptionFontWeight?: string | number;
  descriptionLineHeight?: string;
  iconSize?: string;
  iconBorderRadius?: string;
  badgeFontSize?: string;
  badgeFontWeight?: string | number;
  badgePadding?: string;
  badgeBorderRadius?: string;
  errorColor?: string;
  errorFontSize?: string;
};

export type ResolvedSelectableServiceCardAppearance = {
  maxWidth: string;
  minHeight: string;
  padding: string;
  borderRadius: string;
  gap: string;
  headerGap: string;
  contentGap: string;
  selectedBorderColor: string;
  selectedBorderWidth: string;
  unselectedBorderColor: string;
  unselectedBorderWidth: string;
  backgroundColor: string;
  titleColor: string;
  titleFontSize: string;
  titleFontWeight: string | number;
  titleLineHeight: string;
  descriptionColor: string;
  descriptionFontSize: string;
  descriptionFontWeight: string | number;
  descriptionLineHeight: string;
  iconSize: string;
  iconBorderRadius: string;
  badgeFontSize: string;
  badgeFontWeight: string | number;
  badgePadding: string;
  badgeBorderRadius: string;
  errorColor: string;
  errorFontSize: string;
};

export type SelectableServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBackgroundColor: string;
  badge?: SelectableServiceCardBadge | null;
  showBadge?: boolean;
  selected?: boolean;
  showSelectedCheck?: boolean;
  selectedCheckIcon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  appearance?: SelectableServiceCardAppearance;
  errorMessage?: string;
  onClick?: () => void;
};
