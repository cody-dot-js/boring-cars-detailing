import cx from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: Props) {
  return (
    <span
      className={cx(
        "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium",
        className
      )}
    >
      {children}
    </span>
  );
}
