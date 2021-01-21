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
      <Image
        alt="Boring Cars Detailing"
        src="/assets/imgs/bcd_xxl.png"
        priority
        width="3694"
        height="2506"
      />
      <h2 className="text-lg sm:text-3xl lg:text-3xl leading-none font-extrabold tracking-tight">Coming soon…</h2>
    </main>
  );
}
