import React from "react";
import type { Metadata } from "next";
import {
  Playfair_Display,
  Dancing_Script,
  Inter,
  Noto_Sans_Lao,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-cursive",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const notoLaos = Noto_Sans_Lao({
  subsets: ["lao", "latin"],
  variable: "--font-lao",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "With Love | Valentine's Experience",
  description:
    "A beautiful, personalized romantic experience to share your love. Letter, songs, photos, and a special quiz.",
  keywords: [
    "valentine",
    "love",
    "romance",
    "personalized gift",
    "digital letter",
  ],
  authors: [{ name: "With Love" }],
  openGraph: {
    title: "With Love | Valentine's Experience",
    description:
      "A beautiful, personalized romantic experience to share your love.",
    url: "https://valentine.withlove.app",
    siteName: "With Love",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "With Love Valentine Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "With Love | Valentine's Experience",
    description:
      "A beautiful, personalized romantic experience to share your love.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#fb7185", // rose-400
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${dancing.variable} ${notoLaos.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
