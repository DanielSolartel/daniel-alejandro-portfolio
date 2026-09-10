import type { Metadata, Viewport } from "next";
import { portfolio } from "@/data/portfolio";
import "./globals.css";
export const metadata: Metadata = {
  title: `${portfolio.name} · Portafolio`,
  description: portfolio.headline,
  openGraph: {
    title: `${portfolio.name} · Portafolio`,
    description: portfolio.headline,
    type: "website",
    locale: "es_CO",
    siteName: portfolio.name,
  },
  twitter: {
    card: "summary",
    title: `${portfolio.name} · Portafolio`,
    description: portfolio.headline,
  },
  robots: { index: false, follow: false },
};
export const viewport: Viewport = {
  themeColor: "#07090f",
  colorScheme: "dark",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
