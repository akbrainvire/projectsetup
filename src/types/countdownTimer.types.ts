export type CountdownTimerProps = {
  durationSeconds: number;
  labelKey?: string;
  label?: string;
  autoStart?: boolean;
  onComplete?: () => void;
  className?: string;
};
