import type React from "react";

export type ServiceNavigationCardProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBackgroundColor: string;
  caretIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};
