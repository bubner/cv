import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body className="bg-black bg-[url('/bgl1.png')] bg-fixed image print:bg-white bg-size-4 anim">{children}</body>
    </html>
  );
}
