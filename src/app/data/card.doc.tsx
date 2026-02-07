// Components Library Design System //
import { Card } from "@/ui/components/Card";
// Components Root //
import { PropsTable } from "../components/PropsTable";
import { ExampleBlock } from "../components/ExampleBlock";

export const CardDoc = {
    name: "Card",
    description:
        "El componente Card permite agrupar contenido relacionado de forma clara, consistente y accesible. Es un elemento fundamental para dashboards, listados, vistas de detalle y acciones contextuales dentro del sistema.",

    props: (
        <PropsTable
            props={[
                {
                    name: "title",
                    type: "string",
                    description: "Título principal del Card",
                    required: true,
                },
                {
                    name: "description",
                    type: "string",
                    description:
                        "Texto descriptivo del contenido (requerido si no se usan children)",
                },
                {
                    name: "children",
                    type: "ReactNode",
                    description:
                        "Contenido personalizado del Card (requerido si no hay description)",
                },
                {
                    name: "image",
                    type: "string",
                    description: "URL de una imagen decorativa superior",
                },
                {
                    name: "imageAlt",
                    type: "string",
                    description: "Texto alternativo accesible para la imagen",
                },
                {
                    name: "size",
                    type: "sm | md | lg",
                    description: "Define el ancho máximo del Card",
                },
                {
                    name: "actions",
                    type: `CardAction[label: string;
                        onClick: () => void;
                        variant?: "primary" | "secondary";
                        color?: string;] (max 2)`,
                    description:
                        "Acciones configurables mostradas como botones",
                },
                {
                    name: "accentColor",
                    type: "string (HEX)",
                    description:
                        "Color de énfasis visual del Card. Se aplica como borde/acento y en hover.",
                },
                {
                    name: "backgroundColor",
                    type: "string (HEX)",
                    description: "Color de fondo visual del Card.",
                },
                {
                    name: "textColor",
                    type: "string (HEX)",
                    description: "Color de texto en title del Card.",
                },
            ]}
        />
    ),

    examples: (
        <div className="space-y-10">
            <ExampleBlock title="Card básico">
                <Card
                    title="Cuenta de ahorros"
                    description="Consulta el estado general de tu cuenta y movimientos recientes."
                />
            </ExampleBlock>

            <ExampleBlock title="Card con imagen">
                <Card
                    title="Producto financiero"
                    description="Conoce los beneficios y condiciones del producto."
                    image="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
                    imageAlt="Producto financiero"
                />
            </ExampleBlock>

            <ExampleBlock title="Tamaños disponibles">
                <Card
                    title="Small Card"
                    size="sm"
                    description="Uso en listados compactos."
                />
                <Card
                    title="Medium Card"
                    size="md"
                    description="Uso estándar en la mayoría de vistas."
                />
                <Card
                    title="Large Card"
                    size="lg"
                    description="Ideal para dashboards o vistas destacadas."
                />
            </ExampleBlock>

            <ExampleBlock title="Card con una acción">
                <Card
                    title="Editar información"
                    description="Actualiza los datos asociados a este registro."
                    actions={[
                        {
                            label: "Editar",
                            onClick: () => alert("Editar información"),
                        },
                    ]}
                />
            </ExampleBlock>

            <ExampleBlock title="Card con múltiples acciones">
                <Card
                    title="Solicitud pendiente"
                    description="Revisa o continúa con el proceso."
                    actions={[
                        {
                            label: "Continuar",
                            onClick: () =>
                                alert("Continuando al siguiente paso"),
                        },
                        {
                            label: "Editar",
                            variant: "secondary",
                            onClick: () => alert("Editar solicitud"),
                            color: "#f59e0b",
                        },
                    ]}
                />
            </ExampleBlock>

            <ExampleBlock title="Card con color de énfasis (accentColor)">
                <Card
                    title="Estado exitoso"
                    description="La operación se completó correctamente."
                    accentColor="#16a34a"
                />

                <Card
                    title="Advertencia"
                    description="Requiere validación adicional."
                    accentColor="#f59e0b"
                />

                <Card
                    title="Error crítico"
                    description="Se produjo un error al procesar la solicitud."
                    accentColor="#dc2626"
                />
            </ExampleBlock>

            <ExampleBlock title="Card con color de fondo (backgroundColor)">
                <Card
                    title="Cuenta Empresarial"
                    description="Solución financiera para empresas"
                    accentColor="#E30613"
                    backgroundColor="#ffdede"
                    textColor="#252525"
                />
            </ExampleBlock>

            <ExampleBlock title="Card con contenido personalizado">
                <Card title="Resumen de cuenta" accentColor="#2563eb">
                    <ul className="list-disc pl-4 text-sm opacity-80">
                        <li>Saldo disponible</li>
                        <li>Último movimiento</li>
                        <li>Estado activo</li>
                    </ul>
                </Card>
            </ExampleBlock>
        </div>
    ),

    code: `<Card
    title="Advertencia"
    description="Requiere validación adicional."
    accentColor="#f59e0b"
    actions={[
        {
            label: "Continuar",
            onClick: () => console.log("Continuar"),
        },
        {
            label: "Editar",
            variant: "secondary",
            onClick: () => console.log("Editar"),
        },
    ]}
/>
`,
};
