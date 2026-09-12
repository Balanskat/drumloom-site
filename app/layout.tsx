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
    "Drumloom is a practice instrument for drummers: precise metronome, playable notation, bar-accurate routines and PDF, photo or screenshot import. One purchase. No subscription.",
  applicationName: "Drumloom",
  keywords: [
    "drum metronome",
    "drum practice",
    "rudiments",
    "grooves",
    "fills",
    "beat builder",
    "fill builder",
    "drum notation",
    "drum sheet music import",
    "drum notation scanner",
    "polyrhythm",
    "drum exercises"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Drumloom",
    title: "Drumloom — Practice like timing matters.",
    description:
      "A precise metronome, playable notation, routines and PDF, photo or screenshot import in one focused practice instrument.",
    images: [
      {
        url: siteConfig.absoluteAsset("/og.png"),
        width: 1200,
        height: 630,
        alt: "Drumloom Metronome and drum-pattern screens in green studio light"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Drumloom — Practice like timing matters.",
    description:
      "A precise metronome, playable notation, routines and PDF, photo or screenshot import in one focused practice instrument.",
    images: [siteConfig.absoluteAsset("/og.png")]
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
