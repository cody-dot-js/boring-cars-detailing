import * as React from "react";
import { CTASubscribe } from "components/CTASubscribe";
import { GlitchHero } from "components/GlitchHero";
import { GetStaticProps } from "next";
import { Testimonials } from "components/Testimonials";
import { pageMeta, PageMeta } from "utils/pageMeta";
import { getPageLayout } from "components/Layout";
import type { BasePageProps } from "types/BasePageProps";
import { Page } from "types/PageLayout";
import { PricingSection } from "components/Pricing";
import { LinkButton } from "components/Button";
import { Link } from "components/Link";
import { Comments } from "components/Comments";
import { Heart20 } from "components/icons/HeartIcon";
import { useInView } from "react-intersection-observer";

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

const HeroVideo = () => {
  const [inViewRef, inView] = useInView();
  const ref = React.useRef<HTMLVideoElement>();

  React.useEffect(() => {
    if (inView) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [inView]);

  const setRefs = React.useCallback(
    (node?: HTMLVideoElement) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  return (
    <>
      <video
        ref={setRefs}
        width="16"
        height="9"
        loop
        autoPlay
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover z-0"
        poster="/assets/video/beeple-dvde-loop-poster.png"
      >
        <source src="/assets/video/beeple-dvde-loop.mp4" type="video/mp4" />
        <source
          src="/assets/video/beeple-dvde-loop.webm"
          type="application/webm"
        />
      </video>
    </>
  );
};

const Home: Page = () => {
  return (
    <>
      <section className="relative z-0 h-screen w-full overflow-hidden bg-cyan-900">
        <HeroVideo />
        <div className="absolute z-0 top-0 right-0 left-0 bottom-0 bg-gray-950 opacity-70" />
        <GlitchHero>
          <div className="relative z-30 w-full mx-auto max-w-7xl px-4">
            <div className="mb-16 sm:mb-0 text-center max-w-sm mx-auto sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <LinkButton
                  href="#pricing"
                  variant="primary"
                  className="w-full justify-center text-base px-8 py-3 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </LinkButton>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <LinkButton
                  variant="default"
                  href="#cta"
                  className="w-full border border-transparent text-base font-medium rounded-md shadow-sm text-pink-200 bg-gray-600 bg-opacity-60 hover:bg-opacity-70 px-8 py-3 md:py-4 md:text-lg md:px-10"
                >
                  Subscribe
                </LinkButton>
              </div>
            </div>
          </div>
        </GlitchHero>
      </section>
      <PricingSection />
      <Divider />
      <Testimonials />
      <Divider />
      <section className="relative px-4 space-y-4">
        <Link href="#comments" className="headingLink" id="comments">
          <h3 className="flex items-center justify-center text-3xl font-bold uppercase leading-6 text-cyan-200">
            Share the Love&nbsp;
            <Heart20 />
          </h3>
        </Link>
        <p className="text-center text-gray-400">
          Share your story. Let us know how we&apos;re doing!
        </p>
        <Comments scriptId="landing-page" />
      </section>
      <Divider />
      <Link href="#cta" className="headingLink" id="cta">
        <h2 className="relative z-40 text-center px-4 py-8 text-xl font-semibold tracking-wider text-cyan-300 uppercase">
          We&apos;re live! 🚀
        </h2>
      </Link>
      <CTASubscribe />
    </>
  );
};

const Divider = () => (
  <div className="my-8 border-cyan-300 glow-lg-cyan-400 border-b-2 mx-16" />
);

Home.pageLayout = getPageLayout;

export default Home;
