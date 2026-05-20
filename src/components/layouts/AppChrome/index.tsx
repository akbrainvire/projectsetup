"use client";

import type React from "react";
import Navbar from "@/components/layout/Navbar";
import { AppChromeStyles } from "@/components/layouts/AppChrome/styles";

export type AppChromeProps = {
  children: React.ReactNode;
};

export function AppChrome({ children }: AppChromeProps) {
  return (
    <AppChromeStyles.Root>
      <Navbar />
      <AppChromeStyles.Main>{children}</AppChromeStyles.Main>
    </AppChromeStyles.Root>
  );
}
