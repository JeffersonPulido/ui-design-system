// Libraries //
import { ReactNode, ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type IconPosition = 'left' | 'right';

export interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
    label: string;
    variant?: ButtonVariant;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    loading?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
}
