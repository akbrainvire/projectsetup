"use client";

import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { useLanguageSelectOptions } from "@/hooks/useLanguageSelectOptions";
import type { SupportedLanguage } from "@/i18n";
import { ROUTES, STORAGE_KEYS, TRANSLATION_KEYS } from "@/utility/strings";
import { NavbarStyles } from "./styles";

export type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const { t, i18n } = useTranslation("common");
  const languageOptions = useLanguageSelectOptions();
  const currentLanguage = i18n.language as SupportedLanguage;

  const handleLanguageChange = (value: SupportedLanguage) => {
    //Language switch (console.log)
    console.log("[Navbar] language switch", { from: currentLanguage, to: value });
    void i18n.changeLanguage(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEYS.LOCALE, value);
    }
  };

  return (
    <NavbarStyles.Bar className={className}>
      <NavbarStyles.Inner>
        <NavbarStyles.BrandLink href={ROUTES.HOME} aria-label={t(TRANSLATION_KEYS.LAYOUT.PRODUCT)}>
          <NavbarStyles.LogoIcon aria-hidden />
        </NavbarStyles.BrandLink>
        <NavbarStyles.LanguageSelectWrapper>
          <Select
            value={currentLanguage}
            options={languageOptions}
            onChange={handleLanguageChange}
            aria-label={t(TRANSLATION_KEYS.LAYOUT.LANGUAGE)}
            popupMatchSelectWidth={false}
          />
        </NavbarStyles.LanguageSelectWrapper>
      </NavbarStyles.Inner>
    </NavbarStyles.Bar>
  );
}
