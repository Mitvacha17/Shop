import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Dancing_Script, Inter, Noto_Sans_Lao } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-cursive" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const notoLaos = Noto_Sans_Lao({ subsets: ["lao", "latin"], variable: "--font-lao", display: 'swap' });

export const metadata: Metadata = {
  title: "With Love | Valentine's Experience",
  description: "A beautiful, personalized romantic experience to share your love. Letter, songs, photos, and a special quiz.",
  keywords: ["valentine", "love", "romance", "personalized gift", "digital letter"],
  authors: [{ name: "With Love" }],
  themeColor: "#fb7185", // rose-400
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  openGraph: {
    title: "With Love | Valentine's Experience",
    description: "A beautiful, personalized romantic experience to share your love.",
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
    description: "A beautiful, personalized romantic experience to share your love.",
    images: ["/og-image.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${dancing.variable} ${notoLaos.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
