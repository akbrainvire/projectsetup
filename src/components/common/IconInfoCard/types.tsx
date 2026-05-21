import type React from "react";

export type IconInfoCardAction = {
  label: string;
  onClick: () => void;
  ariaLabel?: string;
};

export type IconInfoCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  action?: IconInfoCardAction;
  className?: string;
};
