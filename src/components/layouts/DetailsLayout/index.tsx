"use client";

import type React from "react";
import { PageShell } from "@/components/layouts/PageShell";
import { SharedLayoutStyles } from "@/components/layouts/sharedShell";

export type DetailsLayoutProps = {
  titleBar?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

export function DetailsLayout({ titleBar, footer, children }: DetailsLayoutProps) {
  return (
    <PageShell footer={footer}>
      <SharedLayoutStyles.MainColumn>
        {titleBar ? <SharedLayoutStyles.TitleBarStrip>{titleBar}</SharedLayoutStyles.TitleBarStrip> : null}
        <SharedLayoutStyles.DetailMain>{children}</SharedLayoutStyles.DetailMain>
      </SharedLayoutStyles.MainColumn>
    </PageShell>
  );
}
