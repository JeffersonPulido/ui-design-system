import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
                <div className="min-h-screen flex flex-col">
                    <header className="border-b border-[rgb(var(--border))]">
                        <div className="max-w-6xl mx-auto px-6 py-4">
                            <h1 className="text-lg font-semibold">
                                UI Design System - Jefferson S. Pulido M.
                            </h1>
                        </div>
                    </header>

                    <main className="flex-1">{children}</main>

                    <footer className="border-t border-[rgb(var(--border))]">
                        <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-[rgb(var(--muted))]">
                            <a
                                href="https://jeffersonpulido.netlify.app/"
                                target="_blank"
                            >
                                Jefferson S. Pulido M. © {new Date().getFullYear()} Design System
                            </a>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
