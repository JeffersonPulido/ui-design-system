"use client";
// Libraries //
import { useState } from "react";
// Components //
import { Button } from "@/ui/components/Button";
// Tokens //
import { tokens } from "@/ui/theme/tokens";
// Root //
import { CardProps } from "./Card.types";
import {
    cardBaseStyles,
    cardHoverBase,
    sizeStyles,
    imageStyles,
    contentStyles,
    actionsStyles,
} from "./Card.styles";

export const Card = ({
    title,
    description,
    image,
    imageAlt,
    size = "md",
    actions,
    children,
    accentColor,
    backgroundColor,
    textColor
}: CardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const accentStyles = accentColor
        ? {
              borderLeft: `4px solid ${accentColor}`,
              borderColor: accentColor,
          }
        : {
              borderLeft: `4px solid ${tokens.colors.border}`,
              borderColor: tokens.colors.border,
          };

    const hoverStyles = isHovered && { ...cardHoverBase };

    const backgroundStyles = backgroundColor ? { backgroundColor } : {};
    
    const textStyles = textColor ? { color: textColor } : {};

    return (
        <article
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                ...cardBaseStyles,
                ...sizeStyles[size],
                ...backgroundStyles,
                ...textStyles,
                ...accentStyles,
                ...hoverStyles,
            }}
        >
            {image && (
                <img src={image} alt={imageAlt || title} style={imageStyles} />
            )}

            <div style={contentStyles}>
                <h3 style={{ fontSize: 18, fontWeight: 600 }}>{title}</h3>

                {description && <p style={{ opacity: 0.8 }}>{description}</p>}

                {children}

                {actions && actions.length > 0 && (
                    <div style={actionsStyles}>
                        {actions.slice(0, 2).map((action, index) => (
                            <Button
                                key={index}
                                label={action.label}
                                variant={action.variant || "primary"}
                                onClick={action.onClick}
                                color={action.color || accentColor}
                            />
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
};
