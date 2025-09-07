import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tusonge — Let's Move Forward",
  description:
    "Empowering independence through innovative, sustainable wheelchair mobility solutions built for Kenya.",
  metadataBase: new URL("https://tusonge.org"),
  openGraph: {
    title: "Tusonge — Let's Move Forward",
    description:
      "Transforming manual wheelchairs into powered mobility solutions across East Africa.",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>        
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:m-4 focus:rounded focus:bg-foreground focus:text-background focus:px-3 focus:py-2">Skip to content</a>
        <Header />
        <main id="main" className="min-h-[70vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
