import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}