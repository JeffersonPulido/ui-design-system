// Tokens //
import { tokens } from "@/ui/theme/tokens";

export const containerStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacing.xs,
};

export const labelStyles: React.CSSProperties = {
    fontSize: tokens.fontSize.sm,
    fontWeight: 500,
};

export const baseInputStyles: React.CSSProperties = {
    padding: tokens.spacing.sm,
    borderRadius: tokens.radius.md,
    border: `1px solid ${tokens.colors.border}`,
    fontSize: tokens.fontSize.md,
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

export const focusStyles: React.CSSProperties = {
    borderColor: tokens.colors.primary,
    boxShadow: `0 0 0 2px ${tokens.colors.primary}33`,
};

export const errorStyles: React.CSSProperties = {
    borderColor: tokens.colors.error,
};

export const disabledStyles: React.CSSProperties = {
    backgroundColor: "#f3f4f6",
    cursor: "not-allowed",
    opacity: 1,
    color: "#6b7280",
};

export const helperTextStyles: React.CSSProperties = {
    fontSize: tokens.fontSize.sm,
    opacity: 0.7,
};

export const errorTextStyles: React.CSSProperties = {
    fontSize: tokens.fontSize.sm,
    color: tokens.colors.error,
};
