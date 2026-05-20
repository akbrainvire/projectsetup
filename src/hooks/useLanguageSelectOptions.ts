"use client";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { SupportedLanguage } from "@/i18n";
import { LANGUAGE_KEYS, TRANSLATION_KEYS } from "@/utility/strings";

const LANGUAGE_OPTION_SPECS = [
  { value: LANGUAGE_KEYS.ENGLISH, labelKey: TRANSLATION_KEYS.LANGUAGE.IN_SELECTOR_ENGLISH },
  { value: LANGUAGE_KEYS.ARABIC, labelKey: TRANSLATION_KEYS.LANGUAGE.IN_SELECTOR_ARABIC },
] as const satisfies readonly { value: SupportedLanguage; labelKey: string }[];

export function useLanguageSelectOptions(): { value: SupportedLanguage; label: string }[] {
  const { t } = useTranslation("common");

  return useMemo(() => {
    const out: { value: SupportedLanguage; label: string }[] = [];
    for (let i = 0; i < LANGUAGE_OPTION_SPECS.length; i += 1) {
      const spec = LANGUAGE_OPTION_SPECS[i];
      if (spec) {
        out.push({ value: spec.value, label: t(spec.labelKey) });
      }
    }
    return out;
  }, [t]);
}
