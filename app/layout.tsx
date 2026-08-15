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
    "Precise metronome, guided Beat and Fill Builders, readable notation, Learn This paths and focused timing modes for drummers. One purchase. No subscription.",
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
      "Metronome, Beat and Fill Builders, notation, Learn This and timing modes in one focused practice instrument.",
    images: [
      {
        url: siteConfig.absoluteAsset("/og.png"),
        width: 1200,
        height: 630,
        alt: "Zwei dunkle Smartphones mit abstraktem Metronom und Drum-Pattern im grünen Drumloom-Studiolicht"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Drumloom — Practice like timing matters.",
    description:
      "Metronome, Beat and Fill Builders, notation, Learn This and timing modes in one focused practice instrument.",
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
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
