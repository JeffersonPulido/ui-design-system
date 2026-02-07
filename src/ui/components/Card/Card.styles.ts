// Tokens //
import { tokens } from "@/ui/theme/tokens";
// Root //
import { CardSize } from "./Card.types";

export const cardBaseStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    borderRadius: tokens.radius.lg,
    border: `1px solid ${tokens.colors.border}`,
    backgroundColor: tokens.colors.surface,
    color: tokens.colors.textOnSurface,
    overflow: "hidden",
    transition:
        "box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease",
};

export const cardHoverBase: React.CSSProperties = {
    boxShadow: tokens.shadow.lg,
    transform: "translateY(-3px)",
};

export const sizeStyles: Record<CardSize, React.CSSProperties> = {
    sm: { maxWidth: 280 },
    md: { maxWidth: 360 },
    lg: { maxWidth: 440 },
};

export const imageStyles: React.CSSProperties = {
    width: "100%",
    height: 180,
    objectFit: "cover",
};

export const contentStyles: React.CSSProperties = {
    padding: tokens.spacing.lg,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacing.sm,
};

export const actionsStyles: React.CSSProperties = {
    display: "flex",
    gap: tokens.spacing.sm,
    marginTop: tokens.spacing.md,
    flexWrap: "wrap",
};
