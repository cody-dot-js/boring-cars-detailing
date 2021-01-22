import { Icon, IconProps, commonProps } from "./Icon";

export const Check = (props: IconProps) => (
  <Icon label="check">
    <svg
      {...commonProps}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
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
  </Icon>
);
