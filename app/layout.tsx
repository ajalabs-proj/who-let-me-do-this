import type { Metadata } from "next";
import { IBM_Plex_Serif, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const plexSerif = IBM_Plex_Serif({
  variable: "--font-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nouriehair.com"),
  title: "Nourie™ — Functional fiber technology for prolonged scalp contact",
  description:
    "Nourie™ is a bio-derived fiber system engineered for scalp health during weeks of continuous wear. Designed and clinically tested by Aja Labs.",
  openGraph: {
    title: "Nourie™ by Aja Labs",
    description: "Functional fiber technology for prolonged scalp contact.",
    url: "https://nouriehair.com",
    siteName: "Nourie™",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nourie™ by Aja Labs",
    description: "Functional fiber technology for prolonged scalp contact.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexSerif.variable} ${plexSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a href="#top" className="skip-link">Skip to content</a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
