"use client";

import type React from "react";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEYS } from "@/utility/strings";
import { PageShellStyles } from "@/components/layouts/PageShell/styles";
import { SharedLayoutStyles } from "@/components/layouts/sharedShell";

export type PageShellProps = {
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function PageShell({ children, footer }: PageShellProps) {
  const { t } = useTranslation("common");
  const footerContent =
    footer !== undefined ? (
      footer
    ) : (
      <PageShellStyles.FooterInner>
        <span>{t(TRANSLATION_KEYS.LAYOUT.FOOTER)}</span>
      </PageShellStyles.FooterInner>
    );

  return (
    <SharedLayoutStyles.Viewport>
      <SharedLayoutStyles.PageShellBody>{children}</SharedLayoutStyles.PageShellBody>
      <SharedLayoutStyles.FooterSlot>{footerContent}</SharedLayoutStyles.FooterSlot>
    </SharedLayoutStyles.Viewport>
  );
}
