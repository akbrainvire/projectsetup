export type RatingChangeHandler = (value: number) => void;

export type RatingProps = {
  value: number;
  onChange?: RatingChangeHandler;
  max?: number;
  size?: number;
  gap?: number;
  label?: string;
  labelKey?: string;
  showLabel?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  allowClear?: boolean;
  filledColor?: string;
  emptyColor?: string;
  className?: string;
  ariaLabel?: string;
};
