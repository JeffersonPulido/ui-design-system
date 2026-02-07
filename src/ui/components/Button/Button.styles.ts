// Tokens //
import { tokens } from "@/ui/theme/tokens";
// Root //
import { ButtonVariant } from "./Button.types";

export const baseStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: tokens.spacing.sm,
    padding: `${tokens.spacing.sm} ${tokens.spacing.lg}`,
    borderRadius: tokens.radius.md,
    fontSize: tokens.fontSize.md,
    fontWeight: 500,
    cursor: "pointer",
    border: "none",
    transition: "background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease",
};

export const variants: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
        backgroundColor: tokens.colors.primary,
        color: tokens.colors.textOnPrimary,
    },
    secondary: {
        backgroundColor: "transparent",
        color: tokens.colors.primary,
        border: `1px solid ${tokens.colors.primary}`,
    },
    ghost: {
        backgroundColor: "transparent",
        color: tokens.colors.primary,
    },
};

export const hoverStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
        opacity: 0.9,
    },
    secondary: {
        backgroundColor: tokens.colors.primary,
        color: tokens.colors.textPrimary,
    },
    ghost: {
        backgroundColor: tokens.colors.primary,
        color: tokens.colors.textPrimary,
    },
};


export const disabledStyles: React.CSSProperties = {
    opacity: 0.5,
    cursor: "not-allowed",
};

export const loadingStyles: React.CSSProperties = {
    cursor: "wait",
};
