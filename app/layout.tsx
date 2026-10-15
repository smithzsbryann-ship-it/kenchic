import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://kenchicfarm.com";
const siteDescription =
  "Explore poultry products in Kenya, including eggs (mayai), day-old chicks, poultry feeds and drinkers. Contact our team for product enquiries and ordering.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kenchic Farm | Poultry Products in Kenya",
    template: "%s | Kenchic Farm",
  },
  description: siteDescription,
  applicationName: "Kenchic Farm",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "poultry products Kenya",
    "day-old chicks Kenya",
    "eggs mayai Kenya",
    "poultry feeds",
    "poultry drinkers",
    "poultry farming Kenya",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Kenchic Farm",
    title: "Kenchic Farm | Poultry Products in Kenya",
    description: siteDescription,
    locale: "en_KE",
    images: [
      {
        url: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Poultry farming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenchic Farm | Poultry Products in Kenya",
    description: siteDescription,
    images: [
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&h=630&q=85",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#154d98",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE">
      <body>{children}</body>
    </html>
  );
}
