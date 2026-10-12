import type { Metadata } from "next";
import { EB_Garamond, Caveat } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Conejo Valley Family Counseling",
  description: "High-end family counseling and therapy services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${caveat.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}