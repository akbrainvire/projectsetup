"use client";

import Image from "next/image";
import type { PaymentMethodCardProps } from "@/types/payment.types";
import { PaymentMethodCardStyles } from "./styles";

const DEFAULT_IMAGE_HEIGHT = 22;

export default function PaymentMethodCard({
  id,
  label,
  image,
  imageAlt,
  imageHeight = DEFAULT_IMAGE_HEIGHT,
  selected,
  onSelect,
  className,
}: PaymentMethodCardProps) {
  const handleSelect = () => {
    onSelect(id);
  };

  return (
    <PaymentMethodCardStyles.Card
      type="button"
      role="radio"
      aria-checked={selected}
      className={className}
      onClick={handleSelect}
      $selected={selected}
    >
      <PaymentMethodCardStyles.Radio aria-hidden $selected={selected}>
        {selected ? <PaymentMethodCardStyles.RadioDot /> : null}
      </PaymentMethodCardStyles.Radio>
      <PaymentMethodCardStyles.Label>{label}</PaymentMethodCardStyles.Label>
      <PaymentMethodCardStyles.ImageSlot aria-hidden>
        <Image src={image} alt={imageAlt} height={imageHeight} />
      </PaymentMethodCardStyles.ImageSlot>
    </PaymentMethodCardStyles.Card>
  );
}

export type { PaymentMethodCardProps } from "@/types/payment.types";
