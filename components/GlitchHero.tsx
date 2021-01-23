import { BoringCarsDetailing } from "components/BoringCarsDetailing";
import Image from "next/image";
import cx from "classnames";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export function GlitchHero({ className, children }: Props) {
  return (
    <>
      <figure
        className={cx(
          "select-none relative w-full h-full flex flex-col justify-center items-center",
          className
        )}
      >
        <Image
          alt="Boring Cars Detailing Sans Text"
          src="/assets/imgs/bcd_sans_text_xl.png"
          layout="fill"
          objectFit="scale-down"
          priority
          quality="100"
        />
        <div className="flex flex-col justify-center items-center">
          <BoringCarsDetailing className="text-12vw" />
        </div>
      </figure>
      {children}
    </>
  );
}
