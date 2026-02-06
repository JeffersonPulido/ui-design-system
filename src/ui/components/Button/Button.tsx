"use client";
// Root //
import { ButtonProps } from "./Button.types";
import {
    baseStyles,
    variants,
    disabledStyles,
    loadingStyles,
} from "./Button.styles";

export const Button = ({
    label,
    variant = "primary",
    icon,
    iconPosition = "left",
    loading = false,
    disabled = false,
    ariaLabel,
    onClick,
    ...rest
}: ButtonProps) => {
    const isDisabled = disabled || loading;

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={isDisabled}
            aria-label={ariaLabel || label}
            aria-busy={loading}
            style={{
                ...baseStyles,
                ...variants[variant],
                ...(isDisabled ? disabledStyles : {}),
                ...(loading ? loadingStyles : {}),
            }}
            {...rest}
        >
            {icon && iconPosition === "left" && !loading && icon}
            {loading ? "Cargando…" : label}
            {icon && iconPosition === "right" && !loading && icon}
        </button>
    );
};
