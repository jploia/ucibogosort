import type { Metadata } from "next";
import { Cabin, Jersey_20 } from "next/font/google";
import "./globals.css";

const cabinSans = Cabin({
  variable: "--font-cabin-sans",
  subsets: ["latin"],
});

const jersey = Jersey_20({
  variable: "--font-jersey-20",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cabinSans.variable} ${jersey.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
