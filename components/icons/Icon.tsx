import styles from "./Icon.module.css";

export interface IconProps {
  className?: string;
}

interface Props {
  label: string;
  children: React.ReactNode;
}

export const commonProps = {
  focusable: false,
  width: "1em",
  height: "1em",
  "aria-hidden": true,
};

export const Icon = ({ label, children }: Props) => (
  <span role="img" aria-label={label} className={styles.icon}>
    {children}
  </span>
);
