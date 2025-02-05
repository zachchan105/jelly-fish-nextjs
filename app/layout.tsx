import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import AppWalletProvider from "@/components/AppWalletProvider";
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jelly-fish-nextjs.vercel.app"),
  title: "Jelly Fish Coin | Made by the Jelly Gang on Solana",
  description: "Dive into Jelly Fish Coin, the vibrant cryptocurrency platform created by the Jelly Gang and powered by the Solana blockchain. Join the movement today!",
  openGraph: {
    type: "website",
    url: "https://jelly-fish-nextjs.vercel.app",
    title: "Jelly Fish Coin | Made by the Jelly Gang on Solana",
    description: "Jelly Fish Coin is a vibrant cryptocurrency platform built by the Jelly Gang on the Solana blockchain. Be part of a thriving community and explore innovative crypto solutions.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jelly Fish Coin Open Graph Image | Made by the Jelly Gang on Solana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    //site: "@jellyfishcoin", // Replace with the official Twitter handle
    title: "Jelly Fish Coin | Made by the Jelly Gang on Solana",
    description: "Join the Jelly Gang and explore Jelly Fish Coin, a community-driven token powered by the Solana blockchain. Dive into the vibrant world of crypto innovation.",
    images: [
      {
        url: "/opengraph-image.jpg",
        alt: "Jelly Fish Coin | Made by the Jelly Gang on Solana",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8932137119645836"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AppWalletProvider>
            {children}
          </AppWalletProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
