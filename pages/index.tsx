import * as React from "react";
import { CTALaunch } from "components/CTALaunch";
import { GlitchHero } from "components/GlitchHero";
import { GetStaticProps } from "next";
import Image from "next/image";
import { Testimonials } from "components/Testimonials";
import { pageMeta, PageMeta } from "utils/pageMeta";
import { getPageLayout } from "components/Layout";
import type { BasePageProps } from "types/BasePageProps";
import { Page } from "types/PageLayout";
import { PricingSection } from "components/Pricing";
import { Button } from "components/Button";

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

const Home: Page = () => {
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
          <div className="relative z-30 w-full mx-auto max-w-7xl px-4">
            <div className="text-center max-w-sm mx-auto sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <Button
                  variant="primary"
                  className="w-full justify-center text-base px-8 py-3 md:py-4 md:text-lg md:px-10"
                  onClick={() =>
                    pricingRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get started
                </Button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <button
                  type="button"
                  onClick={() =>
                    launchRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="w-full flex items-center justify-center border border-transparent text-base font-medium rounded-md shadow-sm text-pink-200 bg-gray-600 bg-opacity-60 hover:bg-opacity-70 px-8 py-3 md:py-4 md:text-lg md:px-10"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </GlitchHero>
      </section>
      <PricingSection ref={pricingRef} />
      <div className="my-8 border-cyan-300 glow-lg-cyan-400 border-b-2 mx-16" />
      <h2
        id="launch"
        ref={launchRef}
        className="relative z-40 text-center px-4 py-8 text-xl font-semibold tracking-wider text-cyan-300 uppercase"
      >
        We're launching February 15th, 2021! 🚀
      </h2>
      <CTALaunch />
      <Testimonials />
    </>
  );
};

Home.pageLayout = getPageLayout;

export default Home;
