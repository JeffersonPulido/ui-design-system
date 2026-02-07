// Libraries //
import { useState } from "react";
// Components Library Design System //
import { Input } from "@/ui/components/Input";
// Components Root //
import { PropsTable } from "../components/PropsTable";
import { ExampleBlock } from "../components/ExampleBlock";

const BasicInputExample = () => {
    const [name, setName] = useState("");

    return (
        <div className="flex gap-6 items-center">
            <Input
                type="text"
                label="Nombre completo"
                placeholder="Juan Pérez"
                helperText="Ingresa tu nombre y apellido"
                value={name}
                onChange={setName}
            />

            <p className="text-sm opacity-70">
                Valor: <strong>{name || "—"}</strong>
            </p>
        </div>
    );
};

const InputTypesExample = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [color, setColor] = useState("#000000");
    const [date, setDate] = useState("");

    return (
        <div className="space-y-4">
            <div className="flex gap-6 items-center">
                <Input
                    label="Correo electrónico"
                    type="text"
                    value={email}
                    onChange={setEmail}
                />
                <p>{email || "—"}</p>
            </div>

            <div className="flex gap-6 items-center">
                <Input
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={setPassword}
                />
                <p>{password ? "••••••" : "—"}</p>
            </div>

            <div className="flex gap-6 items-center">
                <Input
                    label="Edad"
                    type="number"
                    value={age}
                    onChange={setAge}
                />
                <p>{age || "—"}</p>
            </div>

            <div className="flex gap-6 items-center">
                <Input
                    label="Color favorito"
                    type="color"
                    value={color}
                    onChange={setColor}
                />
                <p>{color}</p>
            </div>

            <div className="flex gap-6 items-center">
                <Input
                    label="Fecha de nacimiento"
                    type="date"
                    value={date}
                    onChange={setDate}
                />
                <p>{date || "—"}</p>
            </div>
        </div>
    );
};

const SelectExample = () => {
    const [role, setRole] = useState("");

    return (
        <div className="flex gap-6 items-center">
            <Input
                label="Rol"
                variant="select"
                value={role}
                options={[
                    { label: "Administrador", value: "admin" },
                    { label: "Usuario", value: "user" },
                    { label: "Invitado", value: "guest" },
                ]}
                onChange={setRole}
            />
            <p>{role || "—"}</p>
        </div>
    );
};

const DisabledInputExample = () => {
    return (
        <div className="flex gap-6 items-center">
            <Input
                label="Correo institucional"
                type="text"
                value="usuario@empresa.com"
                disabled
                helperText="Este campo no se puede editar"
                onChange={() => {}}
            />
        </div>
    );
};

const ErrorInputExample = () => {
    const [email, setEmail] = useState("");

    return (
        <div className="flex gap-6 items-center">
            <Input
                label="Correo electrónico"
                type="text"
                value={email}
                onChange={setEmail}
                error="El correo electrónico no es válido"
            />
            <p className="text-sm opacity-70">
                Valor: <strong>{email || "—"}</strong>
            </p>
        </div>
    );
};

const ValidationInputExample = () => {
    const [password, setPassword] = useState("");

    const isValid = password.length >= 8;

    return (
        <div className="flex gap-6 items-center">
            <Input
                label="Contraseña"
                type="password"
                value={password}
                onChange={setPassword}
                required
                error={
                    password && !isValid
                        ? "La contraseña debe tener al menos 8 caracteres"
                        : undefined
                }
                helperText="Usa mínimo 8 caracteres"
            />

            <p className="text-sm opacity-70">
                Estado:{" "}
                <strong>
                    {password ? (isValid ? "Válida ✅" : "Inválida ❌") : "—"}
                </strong>
            </p>
        </div>
    );
};

export const InputDoc = {
    name: "Input",
    description:
        "El componente Input permite capturar información del usuario de forma controlada, accesible y consistente. Soporta múltiples variantes y tipos de entrada, estados visuales, validaciones y manejo estricto de props, siendo una pieza fundamental en formularios, filtros y flujos de interacción.",

    props: (
        <PropsTable
            props={[
                {
                    name: "label",
                    type: "string",
                    description: "Etiqueta descriptiva y accesible del campo",
                    required: true,
                },
                {
                    name: "variant",
                    type: "input | textarea | select",
                    description: "Define el tipo de campo a renderizar",
                },
                {
                    name: "type",
                    type: "text | password | number | color | date",
                    description: "Tipo de input cuando variant es 'input'",
                },
                {
                    name: "value",
                    type: "string | number",
                    description: "Valor controlado del campo",
                },
                {
                    name: "placeholder",
                    type: "string",
                    description: "Texto de ayuda cuando el campo está vacío",
                },
                {
                    name: "options",
                    type: "{ label: string; value: string }[]",
                    description:
                        "Opciones disponibles cuando variant es 'select'",
                },
                {
                    name: "rows",
                    type: "number",
                    description: "Número de filas cuando variant es 'textarea'",
                },
                {
                    name: "disabled",
                    type: "boolean",
                    description: "Deshabilita la interacción del campo",
                },
                {
                    name: "required",
                    type: "boolean",
                    description: "Marca el campo como obligatorio",
                },
                {
                    name: "helperText",
                    type: "string",
                    description: "Texto informativo debajo del campo",
                },
                {
                    name: "error",
                    type: "string",
                    description:
                        "Mensaje de error y estado visual de validación",
                },
                {
                    name: "onChange",
                    type: "(value: string) => void",
                    description: "Evento que se dispara al cambiar el valor",
                    required: true,
                },
            ]}
        />
    ),

    examples: (
        <div className="space-y-8">
            <ExampleBlock title="Input básico (controlado)">
                <BasicInputExample />
            </ExampleBlock>

            <ExampleBlock title="Tipos de input">
                <InputTypesExample />
            </ExampleBlock>

            <ExampleBlock title="Select básico">
                <SelectExample />
            </ExampleBlock>

            <ExampleBlock title="Input deshabilitado">
                <DisabledInputExample />
            </ExampleBlock>

            <ExampleBlock title="Input con error">
                <ErrorInputExample />
            </ExampleBlock>

            <ExampleBlock title="Validación en tiempo real">
                <ValidationInputExample />
            </ExampleBlock>
        </div>
    ),

    code: `<Input
    label="Rol"
    variant="select"
    value="admin"
    options={[
        { label: "Administrador", value: "admin" },
        { label: "Usuario", value: "user" },
    ]}
    onChange={(value) => console.log(value)}
/>
`,
};
