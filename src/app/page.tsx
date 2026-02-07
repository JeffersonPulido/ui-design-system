import { Button } from "@/ui/components/Button";

export default function HomePage() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
            {/* Header */}
            <section className="space-y-4">
                <h1 className="text-4xl font-bold">UI Design System</h1>
                <p className="text-lg text-[rgb(var(--muted))]">
                    Librería de componentes reutilizables, accesibles y
                    consistentes para aplicaciones React y Next.js.
                </p>
            </section>

            {/* Button – Overview */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">Button</h2>

                <p className="text-[rgb(var(--muted))]">
                    El componente <strong>Button</strong> se utiliza para
                    disparar acciones del usuario. Soporta variantes visuales,
                    estados (loading, disabled) e iconos opcionales.
                </p>
            </section>

            {/* Button – Props */}
            <section className="space-y-4">
                <h3 className="text-xl font-semibold">Props disponibles</h3>

                <div className="overflow-x-auto rounded-lg border border-[rgb(var(--border))]">
                    <table className="w-full text-sm">
                        <thead className="bg-[rgba(var(--border),0.2)]">
                            <tr>
                                <th className="px-3 py-2 text-left">Prop</th>
                                <th className="px-3 py-2 text-left">Tipo</th>
                                <th className="px-3 py-2 text-left">
                                    Descripción
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                [
                                    "label",
                                    "string",
                                    "Texto principal del botón",
                                ],
                                [
                                    "variant",
                                    "primary | secondary | ghost",
                                    "Variante visual",
                                ],
                                ["icon", "ReactNode", "Icono opcional"],
                                [
                                    "iconPosition",
                                    "left | right",
                                    "Posición del icono",
                                ],
                                ["loading", "boolean", "Estado de carga"],
                                ["disabled", "boolean", "Deshabilita el botón"],
                            ].map(([prop, type, desc]) => (
                                <tr
                                    key={prop}
                                    className="border-t border-[rgb(var(--border))]"
                                >
                                    <td className="px-3 py-2 font-mono">
                                        {prop}
                                    </td>
                                    <td className="px-3 py-2">{type}</td>
                                    <td className="px-3 py-2 text-[rgb(var(--muted))]">
                                        {desc}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Button – Examples */}
            <section className="space-y-6">
                <h3 className="text-xl font-semibold">Ejemplos de uso</h3>

                <div className="space-y-4">
                    <div className="flex gap-4 flex-wrap">
                        <Button label="Primary" />
                        <Button label="Secondary" variant="secondary" />
                        <Button label="Ghost" variant="ghost" />
                    </div>

                    <div className="flex gap-4 flex-wrap">
                        <Button label="Loading" loading />
                        <Button label="Disabled" disabled />
                    </div>

                    <div className="flex gap-4 flex-wrap">
                        <Button label="Guardar" icon={<span>💾</span>} />
                        <Button
                            label="Continuar"
                            icon={<span>➡️</span>}
                            iconPosition="right"
                        />
                    </div>
                </div>
            </section>

            {/* Code */}
            <section className="space-y-4">
                <h3 className="text-xl font-semibold">Ejemplo de código</h3>

                <pre className="bg-black/90 text-white p-4 rounded-lg text-sm overflow-x-auto">
                    {`<Button
  label="Guardar"
  variant="primary"
  icon={<SaveIcon />}
  onClick={handleSave}
/>`}
                </pre>
            </section>
        </main>
    );
}
