"use client";

import { memo, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  COUNTDOWN_TIMER_CONSTANTS,
  COUNTDOWN_TIMER_DEFAULTS,
  COUNTDOWN_TIMER_FALLBACKS,
} from "@/constants/countdownTimer";
import type { CountdownTimerProps } from "./types";
import { CountdownTimerStyles } from "./styles";

const padTime = (value: number) =>
  String(value).padStart(
    COUNTDOWN_TIMER_DEFAULTS.TIME_PAD_LENGTH,
    COUNTDOWN_TIMER_DEFAULTS.TIME_PAD_CHAR,
  );

const formatRemaining = (totalSeconds: number) => {
  const safeTotal = totalSeconds > 0 ? totalSeconds : 0;
  const minutes = Math.floor(safeTotal / COUNTDOWN_TIMER_DEFAULTS.SECONDS_PER_MINUTE);
  const seconds = safeTotal % COUNTDOWN_TIMER_DEFAULTS.SECONDS_PER_MINUTE;
  return `${padTime(minutes)}:${padTime(seconds)}`;
};

const CountdownTimerComponent = ({
  durationSeconds,
  labelKey = COUNTDOWN_TIMER_CONSTANTS.LABEL,
  label,
  autoStart = true,
  onComplete,
  className,
}: CountdownTimerProps) => {
  const { t } = useTranslation("common");

  const safeDuration = durationSeconds > 0 ? durationSeconds : 0;

  const [endAt] = useState<number>(
    () => Date.now() + safeDuration * COUNTDOWN_TIMER_DEFAULTS.TICK_INTERVAL_MS,
  );
  const [remaining, setRemaining] = useState<number>(safeDuration);

  const onCompleteRef = useRef<CountdownTimerProps["onComplete"]>(onComplete);
  const hasCompletedRef = useRef<boolean>(safeDuration === 0);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!autoStart) {
      return;
    }

    const intervalId = window.setInterval(() => {
      const diffMs = endAt - Date.now();
      const next = diffMs > 0 ? Math.ceil(diffMs / COUNTDOWN_TIMER_DEFAULTS.TICK_INTERVAL_MS) : 0;
      setRemaining(next);
      if (next <= 0) {
        window.clearInterval(intervalId);
      }
    }, COUNTDOWN_TIMER_DEFAULTS.TICK_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [autoStart, endAt]);

  useEffect(() => {
    if (remaining === 0 && !hasCompletedRef.current) {
      hasCompletedRef.current = true;
      onCompleteRef.current?.();
    }
  }, [remaining]);

  const formatted = useMemo(() => formatRemaining(remaining), [remaining]);
  const resolvedLabel =
    label ?? t(labelKey, { defaultValue: COUNTDOWN_TIMER_FALLBACKS.LABEL });

  return (
    <CountdownTimerStyles.Wrapper className={className}>
      <CountdownTimerStyles.Card>
        <CountdownTimerStyles.Label>{resolvedLabel}</CountdownTimerStyles.Label>
        <CountdownTimerStyles.Value role="timer" aria-live="polite" aria-atomic="true">
          {formatted}
        </CountdownTimerStyles.Value>
      </CountdownTimerStyles.Card>
    </CountdownTimerStyles.Wrapper>
  );
};

const CountdownTimer = memo(CountdownTimerComponent);
CountdownTimer.displayName = "CountdownTimer";

export default CountdownTimer;

export type { CountdownTimerProps } from "./types";
