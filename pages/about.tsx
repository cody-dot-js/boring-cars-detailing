import { ExternalLink } from "components/ExternalLink";
import { FacebookIcon } from "components/icons/FacebookIcon";
import { InstagramIcon } from "components/icons/InstagramIcon";
import { getPageLayout } from "components/Layout";
import { shortName, urls } from "config";
import { GetStaticProps } from "next";
import Image from "next/image";
import { pageMeta, PageMeta } from "utils/pageMeta";
import type { BasePageProps } from "types/BasePageProps";
import { Page } from "types/PageLayout";

interface Props extends BasePageProps {
  meta: PageMeta;
}

export const getStaticProps: GetStaticProps = async () => {
  const props: Props = {
    meta: pageMeta(),
    seo: {
      title: "About",
      description: `About ${shortName}`,
    },
  };

  return {
    props,
  };
};

const About: Page = () => {
  return (
    <>
      <section className="mx-auto py-16 sm:py-24 px-4 max-w-7xl sm:px-6 lg:px-8">
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
                            href={urls.personal.facebook}
                            className="text-gray-400 hover:text-gray-300"
                          >
                            <span className="sr-only">Facebook</span>
                            <FacebookIcon />
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink
                            href={urls.personal.instagram}
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
      </section>

      <section>
        <div className="relative text-center mx-auto max-w-md px-4 py-8 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-xl font-semibold tracking-wider text-gray-400 uppercase">
            We're a Family
          </h2>
        </div>
        <div className="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="relative lg:-my-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-gray-900 to-blueGray-900 lg:hidden"
              />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-10 lg:h-full">
                  <Image
                    className="object-cover lg:h-full lg:w-full"
                    src="/assets/imgs/about/family3_4x3.jpg"
                    alt="Cem and family enjoying the beach"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                <blockquote>
                  <div>
                    <svg
                      className="h-12 w-12 text-white opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-6 text-2xl font-medium text-white">
                      Behind every small business is a{" "}
                      <span className="font-bold uppercase">family</span>.
                    </p>
                  </div>
                  <footer className="mt-6">
                    <p className="text-base font-medium text-white">
                      Cem Barandir
                    </p>
                    <p className="text-base font-medium text-cyan-100">
                      Founder/CEO at Boring Cars Detailing
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-2 lg:max-w-5xl">
          <div className="relative rounded-lg shadow-lg overflow-hidden h-128">
            <Image
              className="h-full w-full object-cover"
              src="/assets/imgs/about/family1_sq.jpg"
              alt="Cem and family near the ocean"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="relative rounded-lg shadow-lg overflow-hidden h-128">
            <Image
              className="h-full w-full object-cover"
              src="/assets/imgs/about/family2_4x3.jpg"
              alt="Cem and family on a park bench"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
      </section>
    </>
  );
};

About.pageLayout = getPageLayout;

export default About;
