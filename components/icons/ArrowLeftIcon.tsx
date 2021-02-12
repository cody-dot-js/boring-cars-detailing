import { Props, baseProps } from "./Icon";
import cx from "classnames";

export const ArrowLeft24 = ({ className, ...rest }: Props) => (
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
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

export const ArrowLeft20 = ({ className, ...rest }: Props) => (
  <svg
    {...baseProps}
    {...rest}
    className={cx(baseProps.className, className)}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
      clipRule="evenodd"
    />
  </svg>
);
