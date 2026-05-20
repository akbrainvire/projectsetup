import type React from "react";

export type OptionSelectMode = "single" | "multiple";

export type OptionSelectItem = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type OptionSelectValue = {
  label: string;
  value: string;
};

export type OptionSelectSingleValue = OptionSelectValue | null;

export type OptionSelectMultipleValue = OptionSelectValue[];

export type OptionSelectGroupValue = OptionSelectSingleValue | OptionSelectMultipleValue;

export type OptionSelectAppearance = {
  maxWidth?: string;
  gap?: string;
  optionsGap?: string;
  borderRadius?: string;
  selectedBackgroundColor?: string;
  selectedColor?: string;
  selectedBorderColor?: string;
  unselectedBackgroundColor?: string;
  unselectedColor?: string;
  unselectedBorderColor?: string;
  questionColor?: string;
  questionFontSize?: string;
  questionFontWeight?: string | number;
  questionLineHeight?: string;
  optionFontSize?: string;
  optionFontWeight?: string | number;
  optionLineHeight?: string;
  optionPadding?: string;
  optionMinHeight?: string;
  errorColor?: string;
  errorFontSize?: string;
};

export type ResolvedOptionSelectAppearance = {
  maxWidth: string;
  gap: string;
  optionsGap: string;
  borderRadius: string;
  selectedBackgroundColor: string;
  selectedColor: string;
  selectedBorderColor: string;
  unselectedBackgroundColor: string;
  unselectedColor: string;
  unselectedBorderColor: string;
  questionColor: string;
  questionFontSize: string;
  questionFontWeight: string | number;
  questionLineHeight: string;
  optionFontSize: string;
  optionFontWeight: string | number;
  optionLineHeight: string;
  optionPadding: string;
  optionMinHeight: string;
  errorColor: string;
  errorFontSize: string;
};

export type OptionSelectGroupProps = {
  name: string;
  value?: OptionSelectGroupValue;
  options?: OptionSelectItem[];
  question?: React.ReactNode;
  showQuestion?: boolean;
  showOptions?: boolean;
  mode?: OptionSelectMode;
  disabled?: boolean;
  className?: string;
  appearance?: OptionSelectAppearance;
  errorMessage?: string;
  onChange?: (value: OptionSelectGroupValue) => void;
  onOptionClick?: (option: OptionSelectItem, formValue: OptionSelectGroupValue) => void;
};
