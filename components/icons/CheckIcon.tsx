import { Props, baseProps } from "./Icon";
import cx from "classnames";

export const CheckIcon = ({ className, ...rest }: Props) => (
  <svg
    {...baseProps}
    {...rest}
    className={cx(baseProps.className, className)}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);
