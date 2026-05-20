"use client";

import type React from "react";
import { PageShell } from "@/components/layouts/PageShell";
import { SharedLayoutStyles } from "@/components/layouts/sharedShell";

export type ListingLayoutProps = {
  titleBar?: React.ReactNode;
  filters?: React.ReactNode;
  search?: React.ReactNode;
  toolbarActions?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

export function ListingLayout({
  titleBar,
  filters,
  search,
  toolbarActions,
  header,
  footer,
  children,
}: ListingLayoutProps) {
  const hasToolbar = Boolean(filters) || Boolean(search) || Boolean(toolbarActions);

  return (
    <PageShell footer={footer}>
      <SharedLayoutStyles.MainColumn>
        {titleBar ? <SharedLayoutStyles.TitleBarStrip>{titleBar}</SharedLayoutStyles.TitleBarStrip> : null}
        {hasToolbar ? (
          <SharedLayoutStyles.ListToolbar>
            <SharedLayoutStyles.ListToolbarStart>
              {filters ? <>{filters}</> : null}
              {search ? <>{search}</> : null}
            </SharedLayoutStyles.ListToolbarStart>
            {toolbarActions ? (
              <SharedLayoutStyles.ListToolbarEnd>{toolbarActions}</SharedLayoutStyles.ListToolbarEnd>
            ) : null}
          </SharedLayoutStyles.ListToolbar>
        ) : null}
        {header ? (
          <SharedLayoutStyles.ListSectionHeader>{header}</SharedLayoutStyles.ListSectionHeader>
        ) : null}
        <SharedLayoutStyles.ListSurface>{children}</SharedLayoutStyles.ListSurface>
      </SharedLayoutStyles.MainColumn>
    </PageShell>
  );
}
