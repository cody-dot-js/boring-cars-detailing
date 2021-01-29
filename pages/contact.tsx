import { ExternalLink } from "components/ExternalLink";
import { EmailIcon } from "components/icons/EmailIcon";
import { PhoneIcon } from "components/icons/PhoneIcon";
import { Layout, LayoutMeta } from "components/Layout";
import { urls } from "config";
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

export default function Contact({ meta }: Props) {
  return (
    <Layout
      meta={meta}
      title="Contact"
      description="Contact Boring Cars Detailing."
    >
      <section className="relative max-w-7xl mx-auto">
        <div className="py-16 px-4 sm:px-6 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-pink-300 sm:text-3xl">
              Let's get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-300">
              We’d love to hear from you! Send us a message using the form
              below, give us a call, or email us.
            </p>
            <dl className="mt-8 text-base text-gray-300">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>1038 Second st Apt 24</p>
                  <p>Lafayette, CA 94549</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" />
                  <ExternalLink className="ml-3" href="tel:+1(916)385-7257">
                    +1 (916) 385-7257
                  </ExternalLink>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EmailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" />
                  <ExternalLink
                    className="ml-3"
                    href="mailto:hello@boringcarsdetailing.com"
                  >
                    hello@boringcarsdetailing.com
                  </ExternalLink>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="/assets/imgs/contact/contact.jpg"
              alt="by Popescu Andrei Alexandru on Unsplash"
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl text-cyan-300 font-extrabold tracking-tight sm:text-4xl">
                We're here to help
              </h2>
              <p className="mt-4 text-lg text-gray-300 sm:mt-3">
                Have questions or need to report an issue with any Boring Cars
                Detailing service? We've got you covered! Get in touch and let
                us know how we can help.
              </p>
              <form
                action="#"
                method="POST"
                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 bg-gray-500 border-gray-600 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 bg-gray-500 border-gray-600 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 bg-gray-500 border-gray-600 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Company
                    </label>
                    <span
                      id="phone_description"
                      className="text-sm text-gray-500"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone_description"
                      className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 bg-gray-500 border-gray-600 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Phone
                    </label>
                    <span
                      id="phone_description"
                      className="text-sm text-gray-500"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone_description"
                      className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 bg-gray-500 border-gray-600 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="how_can_we_help"
                      className="block text-sm font-medium text-gray-300"
                    >
                      How can we help you?
                    </label>
                    <span
                      id="how_can_we_help_description"
                      className="text-sm text-gray-500"
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="how_can_we_help"
                      name="how_can_we_help"
                      aria-describedby="how_can_we_help_description"
                      rows={4}
                      className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 bg-gray-500 border-gray-600 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="how_did_you_hear_about_us"
                    className="block text-sm font-medium text-gray-300"
                  >
                    How did you hear about us?
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="how_did_you_hear_about_us"
                      id="how_did_you_hear_about_us"
                      className="shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm bg-gray-500 border-gray-600 rounded-md"
                    />
                  </div>
                </div>
                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
