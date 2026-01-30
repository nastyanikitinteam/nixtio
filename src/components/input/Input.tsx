"use client";

import { useId } from "react";
import cn from "classnames";
import styles from "./input.module.scss";

import type { InputProps } from "@/types/ui";

export default function Input({
  label,
  error,
  className,
  isFullWidth,
  id,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const hasError = !!error;

  return (
    <div className={cn(styles.wrapper, className, { [styles.fullWidth]: isFullWidth })}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(styles.input, {
          [styles.error]: hasError,
        })}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${inputId}-error`} className={styles.errorMessage} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
