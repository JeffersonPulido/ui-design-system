// Interfaces //
import { IComponent } from "../interfaces";
// Root //
import { ButtonDoc } from "./button.doc";
import { CardDoc } from "./card.doc";

export const COMPONENT_DOCS: IComponent[] = [
    {
        id: "button",
        ...ButtonDoc,
    },
    {
        id: "card",
        ...CardDoc,
    },
];
