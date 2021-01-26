import * as React from "react";
import { CheckIcon } from "./icons/CheckIcon";
import { Badge } from "./Badge";
import Image from "next/image";
import cx from "classnames";

export const Pricing = React.forwardRef<HTMLHeadingElement>((_, ref) => {
  return (
    <div className="bg-gray-900">
      <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2
            ref={ref}
            className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider"
          >
            Pricing
          </h2>
          <p className="mt- text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            The right price for you, whoever you are
          </p>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            Our Eco-Friendly car wash uses less water and chemicals than a
            typical car wash.
          </p>
        </div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="pt-8 xl:grid xl:grid-cols-3 xl:gap-x-8">
            <div>
              <h2 className="text-base font-semibold text-pink-300 tracking-wide uppercase">
                Everything you need
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-100">
                All-in-one platform
              </p>
              <p className="mt-4 text-lg text-gray-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus
                elementum blandit et.
              </p>
            </div>
            <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
              <ul className="divide-y divide-gray-700">
                <ListItem className="md:py-0 md:pb-4">
                  Vitae in pulvinar odio id utobortis in inter.
                </ListItem>

                <ListItem>
                  Sed sed id viverra viverra augue eget massa.
                </ListItem>

                <ListItem>Urna, gravida amet, a, integer venenatis.</ListItem>

                <ListItem>Lobortis sed pharetra amet vitae eleifend.</ListItem>

                <ListItem>
                  Ullamcorper blandit a consequat donec elit aoreet.
                </ListItem>
              </ul>
              <ul className="border-t border-gray-700 divide-y divide-gray-700 md:border-t-0">
                <ListItem className="md:border-t-0 md:py-0 md:pb-4">
                  Vitae in pulvinar odio id utobortis in inter.
                </ListItem>

                <ListItem>
                  Sed sed id viverra viverra augue eget massa.
                </ListItem>

                <ListItem>Urna, gravida amet, a, integer venenatis.</ListItem>

                <ListItem>Lobortis sed pharetra amet vitae eleifend.</ListItem>

                <ListItem>
                  Ullamcorper blandit a consequat donec elit aoreet.
                </ListItem>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pb-12 lg:pb-20 bg-gradient-to-b">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-gray-800 px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-gray-50"
                          id="tier-regular"
                        >
                          Regular
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-50">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span className="font-extrabold">80</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex-1 flex flex-col justify-between border-t-2 border-gray-900 p-6 sm:p-10 lg:p-6 xl:p-10">
                      <Image
                        className="rounded-b-lg lg:rounded-none lg:rounded-bl-lg"
                        src="/assets/imgs/pricing/regular.jpg"
                        alt="Photo by Kerem Karaarslan on Unsplash"
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-bl from-gray-900 to-purple-900 opacity-80 rounded-b-lg lg:rounded-none lg:rounded-bl-lg" />
                      <h4 className="relative my-36 text-xl text-gray-300 w-full text-center font-bold">
                        Compact Vehicles
                      </h4>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          {/* <a
                            href="/"
                            className="block w-full text-center rounded-lg border border-transparent px-6 py-3 text-base font-medium bg-gray-700 text-pink-300 hover:bg-gray-800"
                            aria-describedby="tier-regular"
                            aria-disabled="true"
                          >
                            Schedule
                          </a> */}
                          <button
                            className="block cursor-not-allowed disabled:opacity-60 w-full text-center rounded-lg border border-transparent px-6 py-3 text-base font-medium bg-gray-700 text-pink-300"
                            aria-describedby="tier-regular"
                            aria-disabled="true"
                            disabled
                          >
                            Schedule (coming soon)
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-20 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute z-10 inset-0 rounded-lg border-2 border-pink-600"
                    aria-hidden="true"
                  />
                  <div className="absolute z-20 inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-pink-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <h3
                        className="text-center text-3xl font-semibold text-gray-50 sm:-mx-6"
                        id="tier-plus"
                      >
                        Plus
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl tracking-tight text-gray-50 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium">
                            $
                          </span>
                          <span className="font-extrabold">100</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-0 bg-bottom border-t-2 border-gray-900 rounded-b-lg pt-10 pb-8 px-6 sm:px-10 sm:py-10">
                    <Image
                      className="rounded-b-lg"
                      src="/assets/imgs/pricing/plus.jpg"
                      alt="Photo by Nev Chonkar on Unsplash"
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute z-0 top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-gray-900 to-cyan-900 opacity-80 rounded-b-lg" />
                    <h4 className="relative my-48 text-xl text-gray-300 w-full text-center font-bold">
                      SUV and Crossovers
                    </h4>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        {/* <a
                          href="/"
                          className="block shadow-primary-md w-full text-center rounded-lg border border-transparent bg-pink-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-pink-700"
                          aria-describedby="tier-plus"
                        >
                          Schedule
                        </a> */}
                        <button
                          className="cursor-not-allowed disabled:opacity-60 block shadow-primary-md w-full text-center rounded-lg border border-transparent bg-pink-600 px-6 py-4 text-xl leading-6 font-medium text-white"
                          aria-describedby="tier-plus"
                          aria-disabled="true"
                          aria-label="Schedule (coming soon)"
                          disabled
                        >
                          Schedule (coming soon)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col overflow-hidden shadow-lg rounded-lg lg:rounded-none lg:rounded-r-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-gray-800 px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-gray-50"
                          id="tier-scale"
                        >
                          Premium
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-50">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span className="font-extrabold">150</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex-1 flex flex-col justify-between border-t-2 border-gray-900 p-6 sm:p-10 lg:p-6 xl:p-10">
                      <Image
                        className="rounded-b-lg lg:rounded-none lg:rounded-br-lg"
                        src="/assets/imgs/pricing/premium.jpg"
                        alt="Photo by Pavel Anoshin on Unsplash"
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-br from-gray-900 to-fuchsia-900 opacity-80 rounded-b-lg lg:rounded-none lg:rounded-br-lg" />
                      <h4 className="relative my-36 text-xl text-gray-300 w-full text-center font-bold">
                        Oversized Vehicles
                      </h4>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          {/* <a
                            href="/"
                            className="block w-full text-center rounded-lg border border-transparent px-6 py-3 text-base font-medium bg-gray-700 text-pink-300 hover:bg-gray-800"
                            aria-describedby="tier-premium"
                          >
                            Schedule
                            </a> */}
                          <button
                            className="block cursor-not-allowed disabled:opacity-60 w-full text-center rounded-lg border border-transparent px-6 py-3 text-base font-medium bg-gray-700 text-pink-300"
                            aria-describedby="tier-premium"
                            aria-disabled="true"
                            disabled
                          >
                            Schedule (coming soon)
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* */}
          </div>
        </div>
        <div className="mt-10 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-16">
          <div className="w-full mx-auto lg:max-w-5xl">
            <div className="rounded-lg bg-gray-800 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3>
                    <Badge className="py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600">
                      Discounted
                    </Badge>
                  </h3>
                </div>
                <div className="mt-4 text-lg text-gray-50">
                  Amet aliqua pariatur anim irure esse excepteur commodo ullamco
                  adipisicing elit adipisicing cupidatat velit{" "}
                  <span className="font-bold text-gray-300">$29</span>.
                </div>
              </div>
              <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <div className="rounded-lg shadow-md">
                  {/* <a
                            href="/"
                            className="block w-full text-center rounded-lg border border-transparent px-6 py-3 text-base font-medium bg-gray-700 text-pink-300 hover:bg-gray-800"
                            aria-describedby="tier-premium"
                          >
                            Schedule
                            </a> */}
                  <button
                    className="block cursor-not-allowed disabled:opacity-60 w-full text-center rounded-lg border border-transparent px-6 py-3 text-base font-medium bg-gray-700 text-pink-300"
                    aria-describedby="tier-premium"
                    aria-disabled="true"
                    disabled
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

function ListItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={cx("py-4 flex", className)}>
      <CheckIcon className="flex-shrink-0 text-cyan-300" />
      <span className="ml-3 text-base text-gray-100">{children}</span>
    </li>
  );
}
