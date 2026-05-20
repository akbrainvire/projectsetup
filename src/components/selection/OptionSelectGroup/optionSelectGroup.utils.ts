import { OPTION_SELECT_MODES } from "@/constants/optionSelectGroup";
import type {
  OptionSelectGroupValue,
  OptionSelectItem,
  OptionSelectMode,
  OptionSelectMultipleValue,
  OptionSelectSingleValue,
  OptionSelectValue,
} from "@/types/optionSelectGroup.types";

export const toOptionSelectValue = (option: OptionSelectItem): OptionSelectValue => ({
  label: option.label,
  value: option.value,
});

export const normalizeSingleValue = (
  value: OptionSelectGroupValue | undefined,
): OptionSelectSingleValue => {
  if (value === null || value === undefined) {
    return null;
  }
  if (Array.isArray(value)) {
    const first = value[0];
    if (!first) {
      return null;
    }
    return { label: first.label, value: first.value };
  }
  if (typeof value === "object" && "label" in value && "value" in value) {
    return { label: String(value.label), value: String(value.value) };
  }
  return null;
};

export const normalizeMultipleValue = (
  value: OptionSelectGroupValue | undefined,
): OptionSelectMultipleValue => {
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .filter(
      (item: OptionSelectValue) =>
        item?.label !== undefined && item?.value !== undefined && item?.value !== "",
    )
    .map((item: OptionSelectValue) => ({
      label: String(item.label),
      value: String(item.value),
    }));
};

export const isOptionSelected = (
  option: OptionSelectItem,
  value: OptionSelectGroupValue | undefined,
  mode: OptionSelectMode,
): boolean => {
  if (mode === OPTION_SELECT_MODES.MULTIPLE) {
    return normalizeMultipleValue(value).some(
      (item: OptionSelectValue) => item.value === option.value,
    );
  }
  const single = normalizeSingleValue(value);
  return single?.value === option.value;
};

export const resolveNextValue = (
  option: OptionSelectItem,
  value: OptionSelectGroupValue | undefined,
  mode: OptionSelectMode,
): OptionSelectGroupValue => {
  const optionValue = toOptionSelectValue(option);

  if (mode === OPTION_SELECT_MODES.MULTIPLE) {
    const current = normalizeMultipleValue(value);
    const exists = current.some((item: OptionSelectValue) => item.value === option.value);
    if (exists) {
      return current.filter((item: OptionSelectValue) => item.value !== option.value);
    }
    return [...current, optionValue];
  }

  return optionValue;
};

export const formatOptionSelectDisplayValue = (
  value: OptionSelectGroupValue | undefined,
  mode: OptionSelectMode,
): string => {
  if (mode === OPTION_SELECT_MODES.MULTIPLE) {
    const items = normalizeMultipleValue(value);
    if (items.length === 0) {
      return "";
    }
    return items.map((item: OptionSelectValue) => `${item.label} (${item.value})`).join(", ");
  }

  const single = normalizeSingleValue(value);
  if (!single) {
    return "";
  }
  return `${single.label} (${single.value})`;
};
