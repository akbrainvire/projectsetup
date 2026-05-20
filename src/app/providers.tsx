"use client";

import "react-toastify/dist/ReactToastify.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { CookiesProvider } from "react-cookie";
import { I18nextProvider, useTranslation } from "react-i18next";
import { Provider } from "react-redux";
import { Slide, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { AntdProvider } from "@/providers/AntdProvider";
import { StyledComponentsProvider } from "@/providers/StyledComponentsProvider";
import i18n, { syncLanguageFromStorage } from "@/i18n";
import { LANGUAGE_KEYS } from "@/utility/strings";
import { store } from "@/redux/store";

function I18nDocumentSync({ children }: { children: React.ReactNode }) {
  const { i18n: i18nInstance } = useTranslation();

  useEffect(() => {
    syncLanguageFromStorage();
  }, []);

  useEffect(() => {
    const dir = i18nInstance.language === LANGUAGE_KEYS.ARABIC ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", i18nInstance.language || LANGUAGE_KEYS.ENGLISH);
  }, [i18nInstance.language]);

  return children;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <I18nDocumentSync>
            <AntdRegistry>
              <StyledComponentsProvider>
                <AntdProvider>
                  <ToastContainer transition={Slide} />
                  {children}
                </AntdProvider>
              </StyledComponentsProvider>
            </AntdRegistry>
          </I18nDocumentSync>
        </I18nextProvider>
      </Provider>
    </CookiesProvider>
  );
}
