import { Props, baseProps } from "./Icon";
import cx from "classnames";

export const ChevronDown24 = ({ className, ...rest }: Props) => (
  <svg
    {...baseProps}
    {...rest}
    className={cx(baseProps.className, className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);
