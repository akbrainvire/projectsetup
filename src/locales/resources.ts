import arCommon from "@/locales/ar/common.json";
import enCommon from "@/locales/en/common.json";
import { LANGUAGE_KEYS } from "@/utility/strings";

export const resources = {
  [LANGUAGE_KEYS.ENGLISH]: {
    common: enCommon,
  },
  [LANGUAGE_KEYS.ARABIC]: {
    common: arCommon,
  },
} as const;
