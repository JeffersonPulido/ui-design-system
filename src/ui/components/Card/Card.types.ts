import { ReactNode } from "react";

export type CardSize = "sm" | "md" | "lg";

export interface CardAction {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary";
    color?: string;
}

interface CardBaseProps {
    title: string;
    image?: string;
    imageAlt?: string;
    size?: CardSize;
    actions?: CardAction[];
    accentColor?: string;
    backgroundColor?: string;
    textColor?: string;
}

interface CardWithDescription extends CardBaseProps {
    description: string;
    children?: never;
}

interface CardWithChildren extends CardBaseProps {
    children: ReactNode;
    description?: never;
}

export type CardProps = CardWithDescription | CardWithChildren;
