import { GlitchHero } from "components/GlitchHero";
import { GetStaticProps } from "next";
import Image from "next/image";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default function Home() {
  return (
    <main className="bg-gray-950 text-gray-50 via-gray-950 bg-gradient-to-b from-gray-950 to-branded">
      <figure className="h-screen w-full px-4">
        <Image
          alt="Photo by Jason Leung on Unsplash"
          className="z-0"
          layout="fill"
          objectFit="cover"
          priority
          quality="90"
          src="/assets/imgs/hero_5760x3840.jpg"
        />
        <div className="absolute bg-gray-950 opacity-70 z-0 top-0 right-0 left-0 bottom-0" />
        <div className="h-full flex flex-col justify-center items-center">
          <GlitchHero />
        </div>
      </figure>
      <h2 className="text-center text-lg sm:text-3xl lg:text-3xl leading-none font-extrabold tracking-tight m-16 pb-96">
        Coming soon…
      </h2>
    </main>
  );
}
