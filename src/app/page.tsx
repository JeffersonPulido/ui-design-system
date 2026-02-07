// Components //
import { DocTabs } from "./components";
// Data //
import { ButtonDoc } from "./data";

export default function HomePage() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
            <section className="space-y-4">
                <h1 className="text-4xl font-bold">UI Design System</h1>
                <p className="text-lg text-[rgb(var(--muted))]">
                    Documentación de componentes reutilizables y accesibles.
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
        </main>
    );
}
