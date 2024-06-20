import { Inter } from "next/font/google";

import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <head>
                <meta name="darkreader-lock" />
            </head>
            <body className="image bg-size-4 anim bg-black bg-[url('/bg-pattern.png')] bg-fixed print:bg-white">
                {children}
            </body>
        </html>
    );
}
