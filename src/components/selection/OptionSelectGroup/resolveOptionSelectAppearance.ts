import {
  OPTION_SELECT_GROUP_COLORS,
  OPTION_SELECT_GROUP_DEFAULTS,
  OPTION_SELECT_GROUP_ERROR,
  OPTION_SELECT_GROUP_TYPOGRAPHY,
} from "@/constants/optionSelectGroup";
import type {
  OptionSelectAppearance,
  ResolvedOptionSelectAppearance,
} from "@/types/optionSelectGroup.types";

export const resolveOptionSelectAppearance = (
  appearance?: OptionSelectAppearance,
): ResolvedOptionSelectAppearance => {
  const questionType = OPTION_SELECT_GROUP_TYPOGRAPHY.QUESTION;
  const optionType = OPTION_SELECT_GROUP_TYPOGRAPHY.OPTION;
  const colors = OPTION_SELECT_GROUP_COLORS;
  const defaults = OPTION_SELECT_GROUP_DEFAULTS;

  return {
    maxWidth: appearance?.maxWidth ?? defaults.MAX_WIDTH,
    gap: appearance?.gap ?? defaults.GAP,
    optionsGap: appearance?.optionsGap ?? defaults.OPTIONS_GAP,
    borderRadius: appearance?.borderRadius ?? defaults.BORDER_RADIUS,
    selectedBackgroundColor:
      appearance?.selectedBackgroundColor ?? colors.SELECTED_BACKGROUND,
    selectedColor: appearance?.selectedColor ?? colors.SELECTED_TEXT,
    selectedBorderColor: appearance?.selectedBorderColor ?? colors.SELECTED_BORDER,
    unselectedBackgroundColor:
      appearance?.unselectedBackgroundColor ?? colors.UNSELECTED_BACKGROUND,
    unselectedColor: appearance?.unselectedColor ?? colors.UNSELECTED_TEXT,
    unselectedBorderColor:
      appearance?.unselectedBorderColor ?? colors.UNSELECTED_BORDER,
    questionColor: appearance?.questionColor ?? colors.QUESTION_TEXT,
    questionFontSize: appearance?.questionFontSize ?? questionType.FONT_SIZE,
    questionFontWeight: appearance?.questionFontWeight ?? questionType.FONT_WEIGHT,
    questionLineHeight: appearance?.questionLineHeight ?? questionType.LINE_HEIGHT,
    optionFontSize: appearance?.optionFontSize ?? optionType.FONT_SIZE,
    optionFontWeight: appearance?.optionFontWeight ?? optionType.FONT_WEIGHT,
    optionLineHeight: appearance?.optionLineHeight ?? optionType.LINE_HEIGHT,
    optionPadding: appearance?.optionPadding ?? defaults.OPTION_PADDING,
    optionMinHeight: appearance?.optionMinHeight ?? defaults.OPTION_MIN_HEIGHT,
    errorColor: appearance?.errorColor ?? colors.ERROR_TEXT,
    errorFontSize: appearance?.errorFontSize ?? OPTION_SELECT_GROUP_ERROR.FONT_SIZE,
  };
};
