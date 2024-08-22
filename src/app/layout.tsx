import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JUGURTA HADJAM",
  description: "Generated by create Jugurta hadjam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}