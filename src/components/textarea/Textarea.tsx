'use client';

import { useId } from 'react';
import cn from 'classnames';
import type { TextareaProps } from '@/types/ui';
import styles from './textarea.module.scss';

export default function Textarea({
  label,
  error,
  className,
  isFullWidth,
  id,
  ...props
}: TextareaProps) {
  const generatedId = useId();
  const textareaId = id || generatedId;
  const hasError = !!error;

  return (
    <div
      className={cn(styles.wrapper, className, {
        [styles.fullWidth]: isFullWidth,
      })}
    >
      {label && (
        <label htmlFor={textareaId} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={cn(styles.textarea, {
          [styles.error]: hasError,
        })}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${textareaId}-error` : undefined}
        {...props}
      />
      {error && (
        <span
          id={`${textareaId}-error`}
          className={styles.errorMessage}
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
}
