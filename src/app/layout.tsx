// Libraries //
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// CSS //
import "./globals.css";
// Provider MUI //
import { MuiProvider } from "./providers/MuiProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "UI Design System",
    description: "Librería de componentes reutilizables en React y Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <MuiProvider>
                    <div className="min-h-screen flex flex-col">
                        <main className="flex-1">{children}</main>
                    </div>
                </MuiProvider>
            </body>
        </html>
    );
}
