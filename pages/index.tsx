import { GetStaticProps } from "next";
import Image from "next/image";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default function Home() {
  return (
    <main className="h-full bg-background text-gray-50 text-center p-16 mx-auto">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight">Boring Cars Detailing</h1>
      <Image
        alt="Boring Cars Detailing"
        src="/assets/imgs/bcd_3840.png"
        priority
        width="3840px"
        height="3840px"
      />
      <h2 className="text-lg sm:text-3xl lg:text-3xl leading-none font-extrabold tracking-tight">Coming soon…</h2>
    </main>
  );
}
