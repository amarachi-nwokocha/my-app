import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fonts.css";
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
  title: "Pharaoh’s Hounds Tattoos | Custom Tattoo Shop in Lekki, Lagos",
  description:
    "Pharaoh’s Hounds Tattoos brings fearless, custom tattoo designs to life—blackwork, color, and art that turns skin into a masterpiece.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Pharaoh’s Hounds Tattoos | Bold, Custom Ink",
    description:
      "Fearless tattoo designs in blackwork and color. Turning skin into living art in Lekki, Lagos.",
    url: "https://www.pharoahshoundtattoostudios.com/",
    siteName: "Pharaoh’s Hounds Tattoos",
    images: [
      {
        url: "https://www.pharoahshoundtattoostudios.com/preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pharaoh’s Hounds Tattoos artwork",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharaoh\u2019s Hounds Tattoos | Bold, Custom Ink",
    description:
      "Fearless tattoo designs in blackwork and color. Turning skin into living art in Lekki, Lagos.",
    images: ["https://www.pharoahshoundtattoostudios.com/preview-image.png"],
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
        {/* Extra SEO Meta Tags */}
        <meta
          name="keywords"
          content="tattoo shop Lekki, tattoo artist Lagos, custom tattoos, blackwork tattoos, color tattoos, professional tattoo studio"
        />
        <link
          rel="canonical"
          href="https://www.pharoahshoundtattoostudios.com/"
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TattooParlor",
              name: "Pharaoh’s Hounds Tattoos",
              image:
                "https://www.pharoahshoundtattoostudios.com/logo.jpg",
              description:
                "Fearless tattoo designs in blackwork and color. Turning skin into living art in Lekki, Lagos.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "28 Fola Osibo Rd, Street",
                addressLocality: "Lekki",
                addressRegion: "Lagos",
                postalCode: "106104",
                addressCountry: "NG",
              },
              telephone: "0902 030 9802",
              url: "https://www.pharoahshoundtattoostudios.com/",
            }),
          }}
        />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K267T5SBMG"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K267T5SBMG');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
