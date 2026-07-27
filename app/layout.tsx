import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://drumloom-practice.sites.openai.com"),
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
    images: [{ url: "/app-icon.png", width: 1024, height: 1024 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Drumloom — Practice like timing matters.",
    description:
      "Metronome, notation, playback and routines in one focused practice instrument.",
    images: ["/app-icon.png"]
  },
  icons: {
    icon: "/brand-mark.png",
    apple: "/app-icon.png"
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

