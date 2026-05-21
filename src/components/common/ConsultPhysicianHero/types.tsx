import type { ReactNode } from "react";

export type ConsultPhysicianHeroProps = {
  title: string;
  description: string;
  badgeLabel: string;
  actionLabel: string;
  actionIcon?: ReactNode;
  imageSrc?: string | import("next/image").StaticImageData;
  imageAlt?: string;
  onStartVideoCall?: () => void;
  isActionLoading?: boolean;
  isActionDisabled?: boolean;
  className?: string;
};
