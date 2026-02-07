"use client";
// Components //
import { ComponentDocSection, Sidebar } from "./components";
// Data //
import { COMPONENT_DOCS } from "./data";

export default function HomePage() {
    return (
        <div className="flex">
            <aside className="hidden lg:block w-72 border-r border-[rgb(var(--border))] min-h-screen sticky top-0">
                <Sidebar components={COMPONENT_DOCS} />
            </aside>

            <main className="flex-1">
                <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
                    <section className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight">
                            UI Design System
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            Librería transversal de componentes UI
                            reutilizables, accesibles y altamente
                            personalizables, diseñada para estandarizar
                            interfaces, mejorar la mantenibilidad del código y
                            escalar productos digitales en ecosistemas React y
                            Next.js.
                        </p>

                        <p className="text-sm text-gray-500 dark:text-gray-500 max-w-3xl">
                            Esta implementación hace parte de una prueba técnica
                            y demuestra criterios de arquitectura,
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
    );
}
