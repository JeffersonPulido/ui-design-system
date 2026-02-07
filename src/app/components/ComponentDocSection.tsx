// Interfaces //
import { IComponent } from "../interfaces";
// Root //
import { DocTabs } from "./DocTabs";

interface Props {
    doc: IComponent;
}

export const ComponentDocSection = ({ doc }: Props) => {
    return (
        <section className="space-y-6">
            <h2 className="text-2xl font-semibold">{doc.name}</h2>

            <p className="text-[rgb(var(--muted))]">
                {doc.description}
            </p>

            <DocTabs
                tabs={[
                    {
                        id: "props",
                        label: "Props",
                        content: doc.props,
                    },
                    {
                        id: "examples",
                        label: "Ejemplos",
                        content: doc.examples,
                    },
                    {
                        id: "code",
                        label: "Código",
                        content: (
                            <pre className="bg-black/90 text-white p-4 rounded-lg text-sm overflow-x-auto">
                                {doc.code}
                            </pre>
                        ),
                    },
                ]}
            />
        </section>
    );
};
