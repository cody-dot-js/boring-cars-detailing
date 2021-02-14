import * as React from "react";
import { Link, Props as LinkProps } from "./Link";
import cx from "classnames";

export type ButtonVariant = "primary" | "secondary";

export const buttonStyles: Record<ButtonVariant, string> = {
  primary: cx(
    "relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white shadow text-center leading-6 bg-pink-500",
    "hover:glow-pink hover:bg-pink-600",
    "focus:glow-pink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500",
    "active:bg-fuchsia-500",
    "disabled:opacity-60 disabled:cursor-not-allowed"
  ),
  secondary: cx(
    "block shadow hover:shadow-lg w-full text-center rounded-lg border border-transparent px-6 py-4 text-xl leading-6 font-medium text-white bg-cyan-600",
    "hover:text-gray-700 hover:bg-cyan-400",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500",
    "active:bg-cyan-700 active:text-white",
    "disabled:opacity-60 disabled:cursor-not-allowed"
  ),
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export function Button({
  children,
  className,
  variant = "primary",
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(buttonStyles[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export function LinkButton({
  children,
  className,
  variant = "primary",
  ...rest
}: LinkButtonProps) {
  return (
    <Link className={cx(buttonStyles[variant], className)} {...rest}>
      {children}
    </Link>
  );
}
