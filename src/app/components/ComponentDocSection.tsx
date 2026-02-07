// Interfaces //
import { IComponent } from "../interfaces";
// Root //
import { DocTabs } from "./DocTabs";

interface Props {
    doc: IComponent;
}

export const ComponentDocSection = ({ doc }: Props) => {
    return (
        <section id={doc.id} className="scroll-mt-24 space-y-8">
            <h2 className="text-2xl font-semibold">{doc.name}</h2>

            <p className="text-[rgb(var(--muted))]">{doc.description}</p>

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
                            <pre className="relative md:max-w-full max-w-sm overflow-x-auto rounded-lg bg-black/90 p-4 text-sm text-white leading-relaxed sm:text-sm scrollbar-thin">
                                <code className="block min-w-full whitespace-pre">
                                    {doc.code}
                                </code>
                            </pre>
                        ),
                    },
                ]}
            />
        </section>
    );
};
