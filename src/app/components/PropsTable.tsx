// Interfaces //
import { IPropItem } from "../interfaces";

interface Props {
    props: IPropItem[]
}

export function PropsTable({ props }: Props ) {
    return (
        <div className="overflow-x-auto rounded-lg border border-[rgb(var(--border))]">
            <table className="w-full text-sm">
                <thead className="bg-[rgba(var(--border),0.2)]">
                    <tr>
                        <th className="px-3 py-2 text-left">Prop</th>
                        <th className="px-3 py-2 text-left">Tipo</th>
                        <th className="px-3 py-2 text-left">Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {props.map((prop) => (
                        <tr
                            key={prop.name}
                            className="border-t border-[rgb(var(--border))]"
                        >
                            <td className="px-3 py-2 font-mono">{prop.name}</td>
                            <td className="px-3 py-2">{prop.type}</td>
                            <td className="px-3 py-2 text-[rgb(var(--muted))]">
                                {prop.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
