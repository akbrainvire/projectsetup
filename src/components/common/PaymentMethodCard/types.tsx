import type { StaticImageData } from "next/image";

export type PaymentMethodCardProps = {
  id: string;
  label: string;
  image: StaticImageData;
  imageAlt: string;
  imageHeight?: number;
  selected: boolean;
  onSelect: (id: string) => void;
  className?: string;
};
