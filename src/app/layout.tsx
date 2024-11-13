import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const overpass = localFont({
    src: "./fonts/Overpass-Regular.woff2",
    variable: "--font-overpass",
    weight: "400",
});
const overpassBold = localFont({
    src: "./fonts/Overpass-Bold.woff2",
    variable: "--font-overpass-bold",
    weight: "700",
});

export const metadata: Metadata = {
    title: "Frontend Mentor | Interactive Rating Component",
    description: "A Frontend Mentor project",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-US">
            <body className={`${overpass.variable} ${overpassBold.variable}`}>
                {children}
            </body>
        </html>
    );
}
