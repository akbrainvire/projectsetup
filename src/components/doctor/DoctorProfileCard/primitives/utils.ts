import { DOCTOR_PROFILE_CARD_DEFAULTS } from "@/constants/doctorProfileCard";

export const formatDoctorProfileLanguages = (languages: string | string[]): string =>
  Array.isArray(languages) ? languages.join(", ") : languages;

export const formatDoctorProfilePrice = (
  price: string | number,
  currency: string = DOCTOR_PROFILE_CARD_DEFAULTS.CURRENCY,
): string => {
  const amount =
    typeof price === "number"
      ? price.toLocaleString("en-US", { maximumFractionDigits: 0 })
      : price;
  return `${currency} ${amount}`;
};
