import { ReactNode } from "react";

export interface IComponent {
    id: string;
    name: string;
    description: string;
    props: ReactNode;
    examples: ReactNode;
    code: string;
}
