"use client";
// Libraries //
import { Chip } from "@mui/material";
// Interfaces //
import { IPropItem } from "../interfaces";
// Theme //
import { useThemeMode } from "../providers/MuiProvider";

interface Props {
    props: IPropItem[];
}

export function PropsTable({ props }: Props) {
    const { mode } = useThemeMode();

    const colors = {
        border: mode === "dark" ? "border-gray-700" : "border-gray-200",
        headerBg: mode === "dark" ? "bg-gray-800" : "bg-gray-100",
        rowHover: mode === "dark" ? "hover:bg-gray-900" : "hover:bg-gray-50",

        textHeader: mode === "dark" ? "text-gray-300" : "text-gray-700",
        textName: mode === "dark" ? "text-gray-100" : "text-gray-900",
        textType: mode === "dark" ? "text-gray-200" : "text-gray-800",
        textDesc: mode === "dark" ? "text-gray-400" : "text-gray-600",
        textLabel: mode === "dark" ? "text-gray-400" : "text-gray-500",
    };

    return (
        <div className={`rounded-lg border ${colors.border}`}>
            <table className="hidden md:table w-full text-sm">
                <thead className={colors.headerBg}>
                    <tr className={`border-b ${colors.border}`}>
                        {["Prop", "Tipo", "Descripción", "Required"].map(
                            (h) => (
                                <th
                                    key={h}
                                    className={`px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide ${colors.textHeader}`}
                                >
                                    {h}
                                </th>
                            ),
                        )}
                    </tr>
                </thead>

                <tbody>
                    {props.map((prop) => (
                        <tr
                            key={prop.name}
                            className={`border-t ${colors.border} ${colors.rowHover} transition-colors`}
                        >
                            <td
                                className={`px-3 py-2 font-mono ${colors.textName}`}
                            >
                                {prop.name}
                            </td>

                            <td className={`px-3 py-2 ${colors.textType}`}>
                                {prop.type}
                            </td>

                            <td className={`px-3 py-2 ${colors.textDesc}`}>
                                {prop.description}
                            </td>

                            <td className="px-3 py-2">
                                <Chip
                                    size="small"
                                    label={
                                        prop.required ? "Required" : "Optional"
                                    }
                                    color={prop.required ? "warning" : "info"}
                                    variant={
                                        prop.required ? "filled" : "outlined"
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="md:hidden divide-y">
                {props.map((prop) => (
                    <div key={prop.name} className="p-4 space-y-2">
                        <div>
                            <span
                                className={`block text-xs font-semibold uppercase ${colors.textLabel}`}
                            >
                                Prop
                            </span>
                            <span className={`font-mono ${colors.textName}`}>
                                {prop.name}
                            </span>
                        </div>

                        <div>
                            <span
                                className={`block text-xs font-semibold uppercase ${colors.textLabel}`}
                            >
                                Tipo
                            </span>
                            <span className={colors.textType}>{prop.type}</span>
                        </div>

                        <div>
                            <span
                                className={`block text-xs font-semibold uppercase ${colors.textLabel}`}
                            >
                                Descripción
                            </span>
                            <span className={colors.textDesc}>
                                {prop.description}
                            </span>
                        </div>

                        <Chip
                            size="small"
                            label={prop.required ? "Required" : "Optional"}
                            color={prop.required ? "warning" : "info"}
                            variant={prop.required ? "filled" : "outlined"}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
