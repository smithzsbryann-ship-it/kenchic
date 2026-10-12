import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenchic | Poultry Products & Supplies",
  description: "Kenchic poultry products, day-old chicks and food. Explore our range and contact our team.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
