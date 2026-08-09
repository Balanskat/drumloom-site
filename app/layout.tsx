import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Drumloom — Drum Practice, Grooves & Metronome",
    template: "%s · Drumloom"
  },
  description:
    "Precise metronome, readable notation, drum playback and bar-accurate routines for drummers. One purchase. No subscription.",
  applicationName: "Drumloom",
  keywords: [
    "drum metronome",
    "drum practice",
    "rudiments",
    "grooves",
    "fills",
    "polyrhythm",
    "drum exercises"
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: "en_US",
    siteName: "Drumloom",
    title: "Drumloom — Practice like timing matters.",
    description:
      "Metronome, notation, playback and routines in one focused practice instrument.",
    images: [
      {
        url: siteConfig.asset("/og.png"),
        width: 1200,
        height: 630,
        alt: "Drumloom Metronom und Übungsbibliothek auf zwei iPhones"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Drumloom — Practice like timing matters.",
    description:
      "Metronome, notation, playback and routines in one focused practice instrument.",
    images: [siteConfig.asset("/og.png")]
  },
  icons: {
    icon: siteConfig.asset("/brand-mark.png"),
    apple: siteConfig.asset("/app-icon.png")
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0b",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
