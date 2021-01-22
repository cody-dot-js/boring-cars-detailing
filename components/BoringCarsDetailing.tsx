import classnames from "classnames";
import { Glitch } from "components/glitch/Glitch";

interface Props {
  className?: string;
}

export function BoringCarsDetailing({ className }: Props) {
  return (
    <div
      className={classnames("flex flex-col items-end leading-none", className)}
    >
      <Glitch
        className={classnames(
          "relative z-10 font-outrun-future text-gray-300 text-1em"
        )}
      >
        Boring
      </Glitch>
      <Glitch
        className={classnames(
          "relative z-20 font-flash-back",
          "transform-gpu -translate-y-1/4 -rotate-12",
          "text-pink-600 text-0.67em"
        )}
      >
        Cars&nbsp;Detailing
      </Glitch>
    </div>
  );
}
