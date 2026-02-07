"use client";
// Components //
import { ComponentDocSection, Sidebar, ThemeToggle } from "./components";
// Custom Hooks //
import { useActiveSection } from "./hooks";
// Data //
import { COMPONENT_DOCS } from "./data";
// Providers //
import { useThemeMode } from "./providers/MuiProvider";

export default function HomePage() {
    const { mode } = useThemeMode();

    const activeId = useActiveSection(COMPONENT_DOCS.map((c) => c.id));

    const textSecondary = mode === "dark" ? "text-gray-400" : "text-gray-600";

    const textMuted = mode === "dark" ? "text-gray-400" : "text-gray-500";

    return (
        <>
            <header className="border-b border-[rgb(var(--border))]">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="text-lg font-semibold">
                        UI Design System - Jefferson S. Pulido M.
                    </h1>

                    <ThemeToggle />
                </div>
            </header>
            <div className="flex">
                <aside className="hidden lg:block w-auto border-r border-[rgb(var(--border))] ">
                    <div className="sticky top-0 h-screen">
                        <Sidebar
                            components={COMPONENT_DOCS}
                            activeId={activeId}
                        />
                    </div>
                </aside>

                <main className="flex-1">
                    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
                        <section className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight">
                                UI Design System
                            </h1>

                            <p className={`text-lg ${textSecondary} max-w-3xl`}>
                                Librería transversal de componentes UI
                                reutilizables, accesibles y altamente
                                personalizables, diseñada para estandarizar
                                interfaces, mejorar la mantenibilidad del código
                                y escalar productos digitales en ecosistemas
                                React y Next.js.
                            </p>

                            <p className={`text-sm ${textMuted}`}>
                                Esta implementación hace parte de una prueba
                                técnica y demuestra criterios de arquitectura,
                                accesibilidad, tipado estricto con TypeScript,
                                testing y documentación orientada a equipos de
                                desarrollo frontend en organizaciones como
                                Davivienda y Grupo Bolívar.
                            </p>
                        </section>

                        <section className="space-y-24">
                            {COMPONENT_DOCS.map((doc) => (
                                <ComponentDocSection key={doc.id} doc={doc} />
                            ))}
                        </section>
                    </div>
                </main>
            </div>
            <footer className="border-t border-[rgb(var(--border))]">
                <div className={`max-w-6xl mx-auto px-6 py-4 text-sm ${textSecondary}`}>
                    <a
                        href="https://jeffersonpulido.netlify.app/"
                        target="_blank"
                    >
                        Jefferson S. Pulido M. © {new Date().getFullYear()}{" "}
                        Design System
                    </a>
                </div>
            </footer>
        </>
    );
}
