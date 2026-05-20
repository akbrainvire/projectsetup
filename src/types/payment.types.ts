import type { StaticImageData } from "next/image";

export type PaymentMethodId =
  | "creditCard"
  | "applePay"
  | "stcPay"
  | "cashOnDelivery"
  | "tamara"
  | "tabby";

export type PaymentMethodOption = {
  id: PaymentMethodId;
  labelKey: string;
  altKey: string;
  image: StaticImageData;
  imageHeight?: number;
};

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
