import { ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';
import { LinkProps } from 'next/link';

// Button component types

type BaseButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isFullWidth?: boolean;
  isDisabled?: boolean;
};

export type ButtonProps =
  | (BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (BaseButtonProps & Omit<LinkProps, 'href'> & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

// Input component types

type BaseInputProps = {
  label?: string;
  error?: string;
  className?: string;
  isFullWidth?: boolean;
};

export type InputProps = BaseInputProps & InputHTMLAttributes<HTMLInputElement>;

// Textarea component types

export type TextareaProps = BaseInputProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

// Modal component types

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  width?: string | number;
  className?: string;
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
};
