import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import { AppChrome } from "@/components/layouts/AppChrome";
import { NotoSansFont } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "UP DCS",
  description: "Scalable Next.js application shell",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={NotoSansFont.className}
      suppressHydrationWarning
    >
      <body className={NotoSansFont.className}>
        <Providers>
          <AppChrome>{children}</AppChrome>
        </Providers>
      </body>
    </html>
  );
}
