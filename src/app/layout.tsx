import { Inter } from "next/font/google";

import "./globals.css";
import { ReactNode } from "react";
import { StandardData } from "@/data/standard-data";

export const metadata = {
    title: `${StandardData.name} | ${StandardData.about}`,
    description: StandardData.summary, // note: these are shared since the title and desc.
                                       // for html doesn't matter with multifacilitation
    icons: ["./favicon.ico"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" style={{ fontFamily: "Arial, ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';" }}>
            <head>
                <meta name="darkreader-lock" />
            </head>
            <body className="image bg-size-4 anim bg-black bg-[url('/bg-pattern.png')] bg-fixed print:bg-white">
                {children}
            </body>
        </html>
    );
}
