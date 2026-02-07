// Libraries //
import { Chip } from "@mui/material";
// Interfaces //
import { IPropItem } from "../interfaces";

interface Props {
    props: IPropItem[];
}

export function PropsTable({ props }: Props) {
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
                <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                            Prop
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                            Tipo
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                            Descripción
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                            Required
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {props.map((prop) => (
                        <tr
                            key={prop.name}
                            className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                        >
                            <td className="px-3 py-2 font-mono text-gray-900 dark:text-gray-100">
                                {prop.name}
                            </td>

                            <td className="px-3 py-2 text-gray-800 dark:text-gray-200">
                                {prop.type}
                            </td>

                            <td className="px-3 py-2 text-gray-600 dark:text-gray-400">
                                {prop.description}
                            </td>

                            <td className="px-3 py-2">
                                <Chip
                                    size="small"
                                    label={
                                        prop.required ? "Required" : "Optional"
                                    }
                                    color={
                                        prop.required ? "warning" : "info"
                                    }
                                    variant={
                                        prop.required ? "filled" : "outlined"
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
