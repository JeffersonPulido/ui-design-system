// Libraries //
import { Save, ArrowForward } from "@mui/icons-material";
// Components Library Design System //
import { Button } from "@/ui/components/Button";
// Components Root //
import { PropsTable } from "../components/PropsTable";
import { ExampleBlock } from "../components/ExampleBlock";

export const ButtonDoc = {
    name: "Button",
    description:
        "El componente Button se utiliza para realizar acciones del usuario.",

    props: (
        <PropsTable
            props={[
                {
                    name: "label",
                    type: "string",
                    description: "Texto del botón",
                    required: true,
                },
                {
                    name: "variant",
                    type: "primary | secondary | ghost",
                    description: "Variante visual",
                },
                {
                    name: "icon",
                    type: "ReactNode",
                    description: "Icono opcional",
                },
                {
                    name: "iconPosition",
                    type: "left | right",
                    description: "Posición del icono",
                },
                {
                    name: "loading",
                    type: "boolean",
                    description: "Estado de carga",
                },
                {
                    name: "disabled",
                    type: "boolean",
                    description: "Deshabilita el botón",
                },
                {
                    name: "ariaLabel",
                    type: "string",
                    description: "Etiqueta de texto descriptivo y accesible",
                },
                {
                    name: "onClick",
                    type: "function",
                    description: "Accion a ejecutar",
                },
            ]}
        />
    ),

    examples: (
        <div className="space-y-6">
            <ExampleBlock title="Variantes">
                <Button label="Primary" />
                <Button label="Secondary" variant="secondary" />
                <Button label="Ghost" variant="ghost" />
            </ExampleBlock>

            <ExampleBlock title="Estados">
                <Button label="Loading" loading />
                <Button label="Disabled" disabled />
            </ExampleBlock>

            <ExampleBlock title="Con icono">
                <Button label="Guardar" icon={<Save />} />
                <Button
                    label="Continuar"
                    icon={<ArrowForward />}
                    iconPosition="right"
                />
            </ExampleBlock>
        </div>
    ),

    code: `<Button
  label="Guardar"
  variant="primary"
  icon={<SaveIcon />}
  onClick={handleSave}
/>
`,
};
