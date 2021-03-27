import cx from "classnames";
import { Glitch } from "components/glitch/Glitch";

interface Props {
  className?: string;
}

export function BoringCarsDetailing({ className }: Props) {
  return (
    <div
      className={cx("inline-flex flex-col items-end leading-none", className)}
    >
      <Glitch
        className={cx(
          "relative",
          "font-outrun-future",
          "text-gray-300 text-1em"
        )}
      >
        BORING
      </Glitch>
      <Glitch
        className={cx(
          "relative",
          "font-flash-back",
          "transform-gpu -translate-y-1/3 -rotate-12",
          "text-orange-400 text-0.75em"
        )}
      >
        Cars&nbsp;Detailing
      </Glitch>
    </div>
  );
}
