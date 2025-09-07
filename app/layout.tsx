import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://tusonge.co.ke"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tusonge — Let's Move Forward",
    description:
      "Transforming manual wheelchairs into powered mobility solutions across East Africa.",
    url: "https://tusonge.co.ke/",
    siteName: "Tusonge",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/sample-hero-oliver-tusonge.png",
        width: 1200,
        height: 630,
        alt: "Tusonge — Breaking Barriers, Building Independence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tusonge — Let's Move Forward",
    description:
      "Transforming manual wheelchairs into powered mobility solutions across East Africa.",
    images: [
      {
        url: "/sample-hero-oliver-tusonge.png",
        alt: "Tusonge — Breaking Barriers, Building Independence",
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
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MZXNJWKZ');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZXNJWKZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:m-4 focus:rounded focus:bg-foreground focus:text-background focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="min-h-[70vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
