import * as React from "react";
import { CTALaunch } from "components/CTALaunch";
import { GlitchHero } from "components/GlitchHero";
import { GetStaticProps } from "next";
import Image from "next/image";
import { Testimonials } from "components/Testimonials";
import { pageMeta, PageMeta } from "utils/pageMeta";
import { getPageLayout } from "components/Layout";
import { Pricing } from "components/Pricing";
import type { BasePageProps } from "types/BasePageProps";

interface Props extends BasePageProps {
  meta: PageMeta;
}

export const getStaticProps: GetStaticProps = async () => {
  const props: Props = {
    meta: pageMeta(),
  };

  return {
    props,
  };
};

Home.pageLayout = getPageLayout;

export default function Home() {
  const pricingRef = React.useRef<HTMLHeadingElement>(null);
  const launchRef = React.useRef<HTMLHeadingElement>(null);

  return (
    <>
      <section className="relative z-0 h-screen w-full">
        <Image
          alt="Photo by Jason Leung on Unsplash"
          className="absolute z-0"
          layout="fill"
          objectFit="cover"
          priority
          src="/assets/imgs/hero_5760x3840.jpg"
        />
        <div className="absolute z-0 top-0 right-0 left-0 bottom-0 bg-gray-950 opacity-70" />
        <GlitchHero>
          <div className="relative z-10 space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <button
              type="button"
              onClick={() =>
                pricingRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-500 hover:bg-pink-700 sm:px-8"
            >
              Get started
            </button>
            <button
              type="button"
              onClick={() =>
                launchRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-pink-200 bg-gray-600 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
            >
              Subscribe
            </button>
          </div>
        </GlitchHero>
      </section>
      <h2
        id="launch"
        ref={launchRef}
        className="relative z-40 text-center px-4 py-8 text-xl font-semibold tracking-wider text-cyan-300 uppercase"
      >
        We're launching February 15th, 2021! 🚀
      </h2>
      <CTALaunch />
      <Testimonials />
      <Pricing ref={pricingRef} />
    </>
  );
}
