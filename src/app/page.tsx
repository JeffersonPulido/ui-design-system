"use client";
// Components //
import { DocTabs } from "./components";
// Data //
import { ButtonDoc, CardDoc } from "./data";

export default function HomePage() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
            <section className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">
                    UI Design System
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                    Librería transversal de componentes UI reutilizables,
                    accesibles y altamente personalizables, diseñada para
                    estandarizar interfaces, mejorar la mantenibilidad del
                    código y escalar productos digitales en ecosistemas React y
                    Next.js.
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-500 max-w-3xl">
                    Esta implementación hace parte de una prueba técnica y
                    demuestra criterios de arquitectura, accesibilidad, tipado estricto con TypeScript, testing y
                    documentación orientada a equipos de desarrollo frontend en
                    organizaciones como Davivienda y Grupo Bolívar.
                </p>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">{ButtonDoc.name}</h2>
                <p className="text-[rgb(var(--muted))]">
                    {ButtonDoc.description}
                </p>

                <DocTabs
                    tabs={[
                        {
                            id: "props",
                            label: "Props",
                            content: ButtonDoc.props,
                        },
                        {
                            id: "examples",
                            label: "Ejemplos",
                            content: ButtonDoc.examples,
                        },
                        {
                            id: "code",
                            label: "Código",
                            content: (
                                <pre className="bg-black/90 text-white p-4 rounded-lg text-sm overflow-x-auto">
                                    {ButtonDoc.code}
                                </pre>
                            ),
                        },
                    ]}
                />
            </section>

            <hr />

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">{CardDoc.name}</h2>
                <p className="text-[rgb(var(--muted))]">
                    {CardDoc.description}
                </p>

                <DocTabs
                    tabs={[
                        {
                            id: "props",
                            label: "Props",
                            content: CardDoc.props,
                        },
                        {
                            id: "examples",
                            label: "Ejemplos",
                            content: CardDoc.examples,
                        },
                        {
                            id: "code",
                            label: "Código",
                            content: (
                                <pre className="bg-black/90 text-white p-4 rounded-lg text-sm overflow-x-auto">
                                    {CardDoc.code}
                                </pre>
                            ),
                        },
                    ]}
                />
            </section>
        </main>
    );
}
