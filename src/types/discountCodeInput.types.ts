import type { DISCOUNT_CODE_INPUT_STATES } from "@/constants/discountCodeInput";

export type DiscountCodeInputState =
  (typeof DISCOUNT_CODE_INPUT_STATES)[keyof typeof DISCOUNT_CODE_INPUT_STATES];

export type DiscountCodeInputProps = {
  value: string;
  onChange: (value: string) => void;
  onApply: () => void;
  onRemove?: () => void;
  state?: DiscountCodeInputState;
  placeholderKey?: string;
  applyLabelKey?: string;
  appliedLabelKey?: string;
  removeLabelKey?: string;
  errorMessageKey?: string;
  isLoading?: boolean;
  className?: string;
  name?: string;
};
