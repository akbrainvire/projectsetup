"use client";

import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components";
import { STYLED_COMPONENTS_THEME } from "@/utility/strings";

export function StyledComponentsProvider({ children }: { children: React.ReactNode }) {
  const [styledComponentsSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsSheet.getStyleElement();
    styledComponentsSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") {
    return <ThemeProvider theme={STYLED_COMPONENTS_THEME}>{children}</ThemeProvider>;
  }

  return (
    <StyleSheetManager sheet={styledComponentsSheet.instance}>
      <ThemeProvider theme={STYLED_COMPONENTS_THEME}>{children}</ThemeProvider>
    </StyleSheetManager>
  );
}
