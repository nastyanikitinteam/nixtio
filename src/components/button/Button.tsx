"use client";

import Link from "next/link";
import cn from "classnames";
import styles from "./button.module.scss";

import type { ButtonProps } from "@/types/ui";

export default function Button({
  children,
  icon,
  iconPosition = "left",
  variant = "primary",
  size = "md",
  className,
  isFullWidth,
  isDisabled,
  ...props
}: ButtonProps) {
  const content = (
    <>
      {icon && iconPosition === "left" && <span className={cn(styles.icon, "icon")}>{icon}</span>}
      <span className={styles.text}>{children}</span>
      {icon && iconPosition === "right" && <span className={cn(styles.icon, "icon")}>{icon}</span>}
    </>
  );

  const classNames = cn(styles.button, styles[variant], styles[size], className, {
    [styles.fullWidth]: isFullWidth,
    [styles.disabled]: isDisabled,
  });

  if ("href" in props && props.href) {
    const { href, target, rel, ...rest } = props as Extract<ButtonProps, { href: string }>;

    if (isDisabled) {
      return (
        <span className={classNames} aria-disabled="true">
          {content}
        </span>
      );
    }

    return (
      <Link href={href} target={target} rel={rel} className={classNames} {...rest}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonProps.type || "button"} {...buttonProps} className={classNames} disabled={isDisabled}>
      {content}
    </button>
  );
}
