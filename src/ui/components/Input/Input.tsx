"use client";
// Libraries //
import { useState } from "react";
// Root //
import { InputProps } from "./Input.types";
import {
    containerStyles,
    labelStyles,
    baseInputStyles,
    focusStyles,
    errorStyles,
    disabledStyles,
    helperTextStyles,
    errorTextStyles,
} from "./Input.styles";

export const Input = (props: InputProps) => {
    const {
        label,
        value,
        onChange,
        placeholder,
        disabled,
        error,
        helperText,
        required,
    } = props;

    const [isFocused, setIsFocused] = useState(false);

    const sharedStyles = {
        ...baseInputStyles,
        ...(isFocused ? focusStyles : {}),
        ...(error ? errorStyles : {}),
        ...(disabled ? disabledStyles : {}),
    };

    const handleChange = (value: string) => {
        if (disabled) return;
        if (value === String(props.value ?? "")) return;
        onChange(value);
    };

    const renderField = () => {
        if (props.variant === "textarea") {
            return (
                <textarea
                    id={props.id}
                    rows={props.rows || 4}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    style={sharedStyles}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => handleChange(e.target.value)}
                />
            );
        }

        if (props.variant === "select") {
            return (
                <select
                    id={props.id}
                    value={value}
                    disabled={disabled}
                    style={{
                        ...sharedStyles,
                        backgroundColor: "#111827",
                        color: "#ffffff",
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => handleChange(e.target.value)}
                >
                    <option value="" style={{ color: "#9ca3af" }}>
                        Seleccionar…
                    </option>

                    {props.options.map((opt) => (
                        <option
                            key={opt.value}
                            value={opt.value}
                            style={{
                                backgroundColor: "#111827",
                                color: "#ffffff",
                            }}
                        >
                            {opt.label}
                        </option>
                    ))}
                </select>
            );
        }

        return (
            <input
                id={props.id}
                type={props.type || "text"}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                min={props.type === "number" ? 0 : undefined}
                style={sharedStyles}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => handleChange(e.target.value)}
            />
        );
    };

    return (
        <div style={containerStyles}>
            {label && (
                <label htmlFor={props.id} style={labelStyles}>
                    {label} {required && "*"}
                </label>
            )}

            {renderField()}

            {error ? (
                <span style={errorTextStyles}>{error}</span>
            ) : (
                helperText && <span style={helperTextStyles}>{helperText}</span>
            )}
        </div>
    );
};
