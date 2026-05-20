"use client";

import arEG from "antd/locale/ar_EG";
import enUS from "antd/locale/en_US";
import { ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";
import { ANTD_THEME_CONFIG, LANGUAGE_KEYS } from "@/utility/strings";

export function AntdProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === LANGUAGE_KEYS.ARABIC;

  const locale = i18n.language === LANGUAGE_KEYS.ARABIC ? arEG : enUS;

  return (
    <ConfigProvider direction={isRtl ? "rtl" : "ltr"} locale={locale} theme={ANTD_THEME_CONFIG}>
      {children}
    </ConfigProvider>
  );
}
