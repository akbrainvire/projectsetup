import {
  SELECTABLE_SERVICE_CARD_COLORS,
  SELECTABLE_SERVICE_CARD_DEFAULTS,
  SELECTABLE_SERVICE_CARD_ERROR,
  SELECTABLE_SERVICE_CARD_TYPOGRAPHY,
} from "@/constants/selectableServiceCard";
import type {
  ResolvedSelectableServiceCardAppearance,
  SelectableServiceCardAppearance,
} from "./types";

export const resolveSelectableServiceCardAppearance = (
  appearance?: SelectableServiceCardAppearance,
): ResolvedSelectableServiceCardAppearance => {
  const defaults = SELECTABLE_SERVICE_CARD_DEFAULTS;
  const colors = SELECTABLE_SERVICE_CARD_COLORS;
  const titleType = SELECTABLE_SERVICE_CARD_TYPOGRAPHY.TITLE;
  const descriptionType = SELECTABLE_SERVICE_CARD_TYPOGRAPHY.DESCRIPTION;
  const badgeType = SELECTABLE_SERVICE_CARD_TYPOGRAPHY.BADGE;

  return {
    maxWidth: appearance?.maxWidth ?? defaults.MAX_WIDTH,
    minHeight: appearance?.minHeight ?? defaults.MIN_HEIGHT,
    padding: appearance?.padding ?? defaults.PADDING,
    borderRadius: appearance?.borderRadius ?? defaults.BORDER_RADIUS,
    gap: appearance?.gap ?? defaults.GAP,
    headerGap: appearance?.headerGap ?? defaults.HEADER_GAP,
    contentGap: appearance?.contentGap ?? defaults.CONTENT_GAP,
    selectedBorderColor: appearance?.selectedBorderColor ?? colors.SELECTED_BORDER,
    selectedBorderWidth: appearance?.selectedBorderWidth ?? defaults.SELECTED_BORDER_WIDTH,
    unselectedBorderColor: appearance?.unselectedBorderColor ?? colors.UNSELECTED_BORDER,
    unselectedBorderWidth: appearance?.unselectedBorderWidth ?? defaults.UNSELECTED_BORDER_WIDTH,
    backgroundColor: appearance?.backgroundColor ?? colors.BACKGROUND,
    titleColor: appearance?.titleColor ?? colors.TITLE,
    titleFontSize: appearance?.titleFontSize ?? titleType.FONT_SIZE,
    titleFontWeight: appearance?.titleFontWeight ?? titleType.FONT_WEIGHT,
    titleLineHeight: appearance?.titleLineHeight ?? titleType.LINE_HEIGHT,
    descriptionColor: appearance?.descriptionColor ?? colors.DESCRIPTION,
    descriptionFontSize: appearance?.descriptionFontSize ?? descriptionType.FONT_SIZE,
    descriptionFontWeight: appearance?.descriptionFontWeight ?? descriptionType.FONT_WEIGHT,
    descriptionLineHeight: appearance?.descriptionLineHeight ?? descriptionType.LINE_HEIGHT,
    iconSize: appearance?.iconSize ?? defaults.ICON_SIZE,
    iconBorderRadius: appearance?.iconBorderRadius ?? defaults.ICON_BORDER_RADIUS,
    badgeFontSize: appearance?.badgeFontSize ?? badgeType.FONT_SIZE,
    badgeFontWeight: appearance?.badgeFontWeight ?? badgeType.FONT_WEIGHT,
    badgePadding: appearance?.badgePadding ?? defaults.BADGE_PADDING,
    badgeBorderRadius: appearance?.badgeBorderRadius ?? defaults.BADGE_BORDER_RADIUS,
    errorColor: appearance?.errorColor ?? colors.ERROR_TEXT,
    errorFontSize: appearance?.errorFontSize ?? SELECTABLE_SERVICE_CARD_ERROR.FONT_SIZE,
  };
};
