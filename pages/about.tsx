import { ExternalLink } from "components/ExternalLink";
import { FacebookIcon } from "components/icons/FacebookIcon";
import { InstagramIcon } from "components/icons/InstagramIcon";
import { Layout, LayoutMeta } from "components/Layout";
import { GetStaticProps } from "next";
import Head from "next/head";
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

export default function About({ meta }: Props) {
  return (
    <Layout meta={meta}>
      <Head>
        <title>About | Boring Cars Detailing</title>
      </Head>
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              About Us
            </h2>
            <p className="text-xl text-gray-500">
              <span className="font-bold">Boring Cars Detailing</span> is a
              family owned and operated mobile detailing business. We focus on a
              unique customer experience with premium touches for all clients
              and their vehicles. We cater to our clients needs and guarantee
              complete satisfaction. Please ask us any question you may have
              about our business or additional services.{" "}
              <span className="font-bold">Let's talk</span> about what you need
              and what we can do for you!
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              <li className="sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                  <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src="/assets/imgs/cem-avatar.png"
                      alt="Cem Barandir"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>Cem Barandir</h3>
                        <p className="text-pink-600">Founder / CEO</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">
                          Cem graduated with a Bachelors of Business
                          Administration from Istanbul Aydin University and
                          currently lives in the Bay Area.
                        </p>
                      </div>
                      <ul className="flex space-x-5">
                        <li>
                          <ExternalLink
                            href="https://www.facebook.com/cem.barandir.3"
                            className="text-gray-400 hover:text-gray-300"
                          >
                            <span className="sr-only">Facebook</span>
                            <FacebookIcon />
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink
                            href="https://www.instagram.com/cemb35/"
                            className="text-gray-400 hover:text-gray-300"
                          >
                            <span className="sr-only">Instagram</span>
                            <InstagramIcon />
                          </ExternalLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
