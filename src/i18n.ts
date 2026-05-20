import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arCommon from "@/locales/ar/common.json";
import enCommon from "@/locales/en/common.json";
import { LANGUAGE_KEYS, STORAGE_KEYS } from "@/utility/strings";

export const SUPPORTED_LANGUAGES = ["en", "ar"] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: SupportedLanguage = "en";

export const I18N_NAMESPACES = ["common"] as const;

export type I18nNamespace = (typeof I18N_NAMESPACES)[number];

export const DEFAULT_NAMESPACE: I18nNamespace = "common";

export function syncLanguageFromStorage(): void {
  if (typeof window === "undefined") return;
  const raw = window.localStorage.getItem(STORAGE_KEYS.LOCALE);
  if (raw === LANGUAGE_KEYS.ENGLISH || raw === LANGUAGE_KEYS.ARABIC) {
    void i18n.changeLanguage(raw);
  }
}

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: {
      [LANGUAGE_KEYS.ENGLISH]: { common: enCommon },
      [LANGUAGE_KEYS.ARABIC]: { common: arCommon },
    },
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: [...SUPPORTED_LANGUAGES],
    ns: [...I18N_NAMESPACES],
    defaultNS: DEFAULT_NAMESPACE,
    interpolation: { escapeValue: false },
  });
}

export default i18n;
