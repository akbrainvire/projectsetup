"use client";

import type { LoaderProps } from "./types";
import { LoaderStyles } from "./styles";

export default function Loader({
  className,
  overlay = false,
  label,
}: LoaderProps) {
  return (
    <LoaderStyles.Root
      className={className}
      $overlay={overlay}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <LoaderStyles.Spinner aria-hidden />
      {label ? <LoaderStyles.Label>{label}</LoaderStyles.Label> : null}
    </LoaderStyles.Root>
  );
}

export type { LoaderProps } from "./types";
