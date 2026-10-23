import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { clinic } from "../config/clinic";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(clinic.siteUrl),
  title: `${clinic.name} | ${clinic.city}`,
  description: clinic.seoDescription,
  openGraph: {
    title: clinic.name,
    description: clinic.seoDescription,
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // Brand colors from config/clinic.ts become CSS variables
  const themeVars = {
    "--primary": clinic.theme.primary,
    "--primary-dark": clinic.theme.primaryDark,
    "--primary-soft": clinic.theme.primarySoft,
    "--accent": clinic.theme.accent,
  } as CSSProperties;

  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={themeVars}>{children}</body>
    </html>
  );
}
