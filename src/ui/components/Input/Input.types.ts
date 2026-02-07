export type InputType =
    | "text"
    | "password"
    | "number"
    | "color"
    | "date";

export type InputVariant = "input" | "textarea" | "select";

export interface SelectOption {
    label: string;
    value: string;
}

interface BaseInputProps {
    id?: string;
    label: string;
    value?: string | number;
    disabled?: boolean;
    error?: string;
    helperText?: string;
    required?: boolean;
    placeholder?: string;
}

interface TextInputProps extends BaseInputProps {
    variant?: "input";
    type: InputType;
    placeholder?: string;
    onChange: (value: string) => void;
}

interface TextareaProps extends BaseInputProps {
    variant: "textarea";
    rows?: number;
    placeholder?: string;
    onChange: (value: string) => void;
}

interface SelectProps extends BaseInputProps {
    variant: "select";
    options: SelectOption[];
    onChange: (value: string) => void;
}

export type InputProps =
    | TextInputProps
    | TextareaProps
    | SelectProps;
