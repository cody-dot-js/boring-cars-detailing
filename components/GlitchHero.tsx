import { BoringCarsDetailing } from "components/BoringCarsDetailing";
import Image from "next/image";
import classnames from "classnames";

interface Props {
  className?: string;
}

export function GlitchHero({ className }: Props) {
  return (
    <figure
      className={classnames(
        "select-none relative w-full h-2/3 flex flex-col justify-center",
        className
      )}
    >
      <Image
        alt="Boring Cars Detailing Sans Text"
        src="/assets/imgs/bcd_sans_text_xl.png"
        layout="fill"
        objectFit="contain"
        objectPosition="50% 50%"
        priority
        quality="100"
      />
      <div className="flex justify-center w-full">
        <BoringCarsDetailing className="text-10vw" />
      </div>
    </figure>
  );
}
