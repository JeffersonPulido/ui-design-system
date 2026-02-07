"use client";
// Libraries //
import { useState } from "react";
// Root //
import { ButtonProps } from "./Button.types";
import {
    baseStyles,
    variants,
    hoverStyles,
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
    color,
    ariaLabel,
    onClick,
    ...rest
}: ButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const isDisabled = disabled || loading;

    const customColorStyles = color
        ? {
              backgroundColor: variant === "primary" ? color : "transparent",
              color: variant === "primary" ? "#fff" : color,
              border:
                  variant === "secondary" ? `1px solid ${color}` : undefined,
          }
        : {};

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={isDisabled}
            aria-label={ariaLabel || label}
            aria-busy={loading}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                ...baseStyles,
                ...variants[variant],
                ...(isHovered && !isDisabled ? hoverStyles[variant] : {}),
                ...customColorStyles,
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
