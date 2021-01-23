import * as React from "react";
import { CTALaunch } from "components/CTALaunch";
import { GlitchHero } from "components/GlitchHero";
import { Layout, LayoutMeta } from "components/Layout";
import { GetStaticProps } from "next";
import Image from "next/image";
import { copyrightDate } from "utils/copyrightDate";

interface Props {
  meta: LayoutMeta;
}

export const getStaticProps: GetStaticProps = async () => {
  const props: Props = {
    meta: {
      copyrightDate: copyrightDate(),
    },
  };

  return {
    props,
  };
};

export default function Home({ meta }: Props) {
  const launchRef = React.useRef<HTMLHeadingElement>(null);

  return (
    <Layout meta={meta}>
      <figure className="h-screen w-full">
        <Image
          alt="Photo by Jason Leung on Unsplash"
          className="absolute z-0"
          layout="fill"
          objectFit="cover"
          priority
          quality="90"
          src="/assets/imgs/hero_5760x3840.jpg"
        />
        <div className="absolute bg-gray-950 opacity-70 z-0 top-0 right-0 left-0 bottom-0" />
        <div className="h-3/4 pt-16 w-full flex flex-col justify-center items-center">
          <GlitchHero>
            <div className="relative z-10 max-w-md mx-auto sm:flex sm:justify-center -mt-28">
              <div className="rounded-md shadow-primary-md">
                <button
                  type="button"
                  onClick={() =>
                    launchRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </button>
              </div>
            </div>
          </GlitchHero>
        </div>
      </figure>
      <h2
        id="launch"
        ref={launchRef}
        className="relative z-40 text-center px-4 py-8 text-xl font-semibold tracking-wider text-gray-400 uppercase"
      >
        We're launching soon! 🚀
      </h2>
      <CTALaunch />
    </Layout>
  );
}
