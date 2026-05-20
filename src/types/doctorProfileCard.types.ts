import type { StaticImageData } from "next/image";

export type DoctorProfileCardProps = {
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  name: string;
  designation: string;
  languages: string | string[];
  price: string | number;
  currency?: string;
  isAvailable?: boolean;
  availableLabel?: string;
  unavailableLabel?: string;
  onClick?: () => void;
  className?: string;
};
