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
          <GlitchHero />
        </div>
      </figure>
      <h2 className="text-center text-lg sm:text-3xl lg:text-3xl leading-none font-extrabold tracking-tight m-16 pb-96">
        Sign up for launch notification coming soon!
      </h2>
    </Layout>
  );
}
