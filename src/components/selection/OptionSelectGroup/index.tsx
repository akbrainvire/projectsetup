"use client";

import { OPTION_SELECT_MODES } from "@/constants/optionSelectGroup";
import type {
  OptionSelectGroupProps,
  OptionSelectItem,
} from "@/types/optionSelectGroup.types";
import {
  isOptionSelected,
  resolveNextValue,
} from "./optionSelectGroup.utils";
import { resolveOptionSelectAppearance } from "./resolveOptionSelectAppearance";
import { OptionSelectGroupStyles } from "./styles";

export default function OptionSelectGroup({
  name,
  value,
  options = [],
  question,
  showQuestion = true,
  showOptions = true,
  mode = OPTION_SELECT_MODES.SINGLE,
  disabled = false,
  className,
  appearance,
  errorMessage,
  onChange,
  onOptionClick,
}: OptionSelectGroupProps) {
  const resolvedAppearance = resolveOptionSelectAppearance(appearance);
  const shouldRenderQuestion =
    showQuestion && question !== undefined && question !== null && question !== "";
  const visibleOptions = showOptions ? options : [];
  const hasError = Boolean(errorMessage);

  const handleOptionClick = (option: OptionSelectItem) => {
    if (disabled || option.disabled) {
      return;
    }

    const nextValue = resolveNextValue(option, value, mode);
    onChange?.(nextValue);
    onOptionClick?.(option, nextValue);
  };

  return (
    <OptionSelectGroupStyles.Container
      className={className}
      $appearance={resolvedAppearance}
      disabled={disabled}
      aria-invalid={hasError}
    >
      {shouldRenderQuestion ? (
        <OptionSelectGroupStyles.Question $appearance={resolvedAppearance}>
          {question}
        </OptionSelectGroupStyles.Question>
      ) : null}
      {visibleOptions.length > 0 ? (
        <OptionSelectGroupStyles.OptionsRow $appearance={resolvedAppearance}>
          {visibleOptions.map((option: OptionSelectItem) => {
            const selected = isOptionSelected(option, value, mode);
            const isOptionDisabled = disabled || option.disabled === true;

            return (
              <OptionSelectGroupStyles.OptionButton
                key={`${name}-${option.value}`}
                type="button"
                name={name}
                value={option.value}
                aria-pressed={selected}
                disabled={isOptionDisabled}
                $selected={selected}
                $disabled={isOptionDisabled}
                $appearance={resolvedAppearance}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </OptionSelectGroupStyles.OptionButton>
            );
          })}
        </OptionSelectGroupStyles.OptionsRow>
      ) : null}
      {hasError ? (
        <OptionSelectGroupStyles.ErrorMessage $appearance={resolvedAppearance} role="alert">
          {errorMessage}
        </OptionSelectGroupStyles.ErrorMessage>
      ) : null}
    </OptionSelectGroupStyles.Container>
  );
}

export type { OptionSelectGroupProps } from "@/types/optionSelectGroup.types";
