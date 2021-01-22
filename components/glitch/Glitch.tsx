import cx from "classnames";
import styles from "./styles.module.css";
interface Props {
  children: string;
  className?: string;
}

export function Glitch({ children, className }: Props) {
  return (
    <div className={cx(styles.glitch, className)} data-text={children}>
      {children}
    </div>
  );
}
