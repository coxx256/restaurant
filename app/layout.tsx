import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { site } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bellavista.ug"),
  title: {
    default: "Bella Vista Restaurant — Fine Dining in Kampala",
    template: "%s | Bella Vista Restaurant",
  },
  description: site.description,
  applicationName: site.legalName,
  keywords: [
    "Bella Vista Restaurant",
    "fine dining Kampala",
    "restaurant Kololo",
    "Kampala restaurant",
    "East African fine dining",
    "Lake Victoria perch",
    "romantic restaurant Kampala",
    "Acacia Avenue restaurant",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    title: "Bella Vista Restaurant — A table with a view",
    description: site.description,
    type: "website",
    locale: "en_UG",
    siteName: site.legalName,
    url: "/",
    images: [
      {
        url: "/images/hero.jpg",
        width: 2000,
        height: 1333,
        alt: "A candlelit table at Bella Vista Restaurant in Kampala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bella Vista Restaurant — A table with a view",
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f1e6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans">
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
