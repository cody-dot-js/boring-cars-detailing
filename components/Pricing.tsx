import * as React from "react";
import Image from "next/image";
import { Check24 } from "./icons/CheckIcon";
import { Field } from "formik";
import {
  FormValues,
  tierName,
  tierPrice,
  PricingTier,
  tierCategory,
} from "apis/pricing";
import cx from "classnames";
import { Link } from "./Link";
import { routes } from "config";
import { Ellipsis } from "./Ellipsis";

interface PricingFormProps {
  className?: string;
  values?: FormValues;
}

export const WashPackagePricingForm = ({
  className,
  values,
}: PricingFormProps) => {
  const { tier = "Plus" } = values || {};

  return (
    <div role="group" className={cx("mt-8 pb-12 lg:pb-20", className)}>
      <div className="relative z-0">
        <div className="absolute inset-0 top-8 lg:top-24 h-5/6 lg:h-2/3 bg-gradient-to-r from-teal-500 to-cyan-600" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative space-y-16 lg:space-y-0 lg:flex">
            {/* REGULAR CARD */}
            <PricingCard tier="Regular" asField selected={tier === "Regular"} />

            {/* PLUS CARD */}
            <PricingCard tier="Plus" asField selected={tier === "Plus"} />

            {/* PREMIUM CARD */}
            <PricingCard tier="Premium" asField selected={tier === "Premium"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const DetailingAddonsPricingForm = ({
  className,
  values,
}: PricingFormProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-2">
      <p className="text-gray-400 opacity-75 sm:px-6">Coming soon...</p>
    </div>
  );
};

interface PricingSectionProps {
  className?: string;
}

export const PricingSection = React.forwardRef<
  HTMLHeadingElement,
  PricingSectionProps
>(({ className }, ref) => {
  return (
    <section className={className}>
      <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20 text-center space-y-3">
        <h2
          ref={ref}
          className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider"
        >
          Pricing
        </h2>
        <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          The right price for you, whoever you are
        </p>
      </div>
      <section>
        <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20 text-center space-y-3">
          <h3 className="text-3xl font-bold uppercase leading-6 text-cyan-200">
            Wash Package
          </h3>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            Our Eco-Friendly car wash uses less water and chemicals than a
            typical car wash.
          </p>
        </div>
        <div className="mt-16 pb-12 lg:pb-20 relative z-0">
          <div className="absolute inset-0 top-8 lg:top-24 h-5/6 lg:h-2/3 bg-gradient-to-r from-teal-500 to-cyan-600" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative space-y-16 lg:space-y-0 lg:flex">
              {/* REGULAR CARD */}
              <PricingCard tier="Regular" />

              {/* PLUS CARD */}
              <PricingCard tier="Plus" selected />

              {/* PREMIUM CARD */}
              <PricingCard tier="Premium" />
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-center">
          Choose the wash package that fits your vehicle size.
        </p>
      </section>
      <section>
        <div className="px-4 sm:px-6 lg:px-8 pt-8 text-center space-y-3">
          <h3 className="text-3xl font-bold uppercase leading-6 text-cyan-200">
            Detailing Addons
          </h3>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl opacity-75">
            Coming soon
            <Ellipsis />
          </p>
        </div>
      </section>
    </section>
  );
});

interface PricingCardProps {
  asField?: boolean;
  gradientClassName?: string;
  selected?: boolean;
  tier: PricingTier;
}

const pricingTierImage: Record<PricingTier, { alt: string; src: string }> = {
  Regular: {
    src: "/assets/imgs/pricing/regular.jpg",
    alt: "Photo by Kerem Karaarslan on Unsplash",
  },
  Plus: {
    src: "/assets/imgs/pricing/plus.jpg",
    alt: "Photo by Nev Chonkar on Unsplash",
  },
  Premium: {
    src: "/assets/imgs/pricing/premium.jpg",
    alt: "Photo by Pavel Anoshin on Unsplash",
  },
};

function PricingCard({
  asField,
  gradientClassName,
  selected,
  tier,
}: PricingCardProps) {
  const name = tierName[tier];
  const price = tierPrice[tier];
  const category = tierCategory[tier];
  const { src, alt } = pricingTierImage[tier];
  const scheduleRoute = scheduleTierPath(tier);

  return (
    <div
      className={cx(
        "transform-gpu transition-all z-0 mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none",
        selected && "scale-105 sm:scale-110 z-10"
      )}
    >
      <label className={cx("block", asField && "cursor-pointer")}>
        <div
          className={cx(
            "relative rounded-lg shadow-xl hover:glow-pink",
            selected &&
              "glow-amber hover:glow-amber lg:glow-cyan lg:hover:glow-cyan"
          )}
        >
          {selected && (
            <SelectedTierDecoration>
              {asField ? <Check24 /> : "Most Popular"}
            </SelectedTierDecoration>
          )}
          {asField && (
            <Field type="radio" name="tier" value={tier} className="hidden" />
          )}
          <div
            className={cx(
              "h-full flex flex-col overflow-hidden shadow-lg rounded-lg lg:rounded-none",
              tier === "Regular" && "lg:rounded-l-lg",
              tier === "Premium" && "lg:rounded-r-lg",
              selected && "rounded-lg lg:rounded-lg"
            )}
          >
            <div className="flex-1 flex flex-col">
              <div className="px-6 py-10 bg-gradient-to-t from-fuchsia-500 to-pink-600 shadow">
                <div>
                  <h3
                    className="text-center text-2xl font-medium text-gray-50"
                    id="tier-scale"
                  >
                    {name}
                  </h3>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="px-3 flex items-start text-6xl tracking-tight text-gray-50">
                      <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                      <span className="font-extrabold">{price}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative z-0 flex-1 flex flex-col justify-between border-0 p-6 sm:p-10 lg:p-6 xl:p-10">
                <Image
                  className={cx(
                    "rounded-none rounded-b-lg lg:rounded-none",
                    tier === "Regular" && "lg:rounded-bl-lg",
                    tier === "Premium" && "lg:rounded-br-lg",
                    selected && "rounded-b-lg"
                  )}
                  src={src}
                  alt={alt}
                  layout="fill"
                  objectFit="cover"
                />
                <div
                  className={cx(
                    "absolute inset-0 opacity-90 bg-gray-950 bg-gradient-to-t from-gray-950 to-gray-900",
                    gradientClassName
                  )}
                />
                <h4 className="relative my-36 text-4xl text-gray-300 w-full text-center font-bold text-shadow">
                  {category}
                </h4>
                {!asField && (
                  <div className="relative z-10 mt-10">
                    <div className="rounded-lg shadow-md">
                      <Link
                        href={scheduleRoute}
                        className={cx(
                          "block shadow hover:shadow-lg w-full text-center rounded-lg border border-transparent px-6 py-4 text-xl leading-6 font-medium",
                          "text-white hover:text-gray-700 bg-cyan-600 hover:bg-cyan-400 active:bg-cyan-700 active:text-white"
                        )}
                      >
                        Schedule
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}

function scheduleTierPath(tier: PricingTier) {
  const query = new URLSearchParams({ tier });
  return `${routes.schedule}?${query}`;
}

const SelectedTierDecoration = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <>
    <div
      className="pointer-events-none absolute z-10 inset-0 rounded-lg border-2 border-mustard lg:border-maximumBlue"
      aria-hidden="true"
    />
    <div className="absolute z-20 inset-x-0 top-0 transform translate-y-px">
      <div className="flex justify-center transform -translate-y-1/2">
        <span className="inline-flex rounded-full bg-mustard lg:bg-maximumBlue shadow px-4 py-1 text-sm font-semibold tracking-wider uppercase text-gray-700">
          {children}
        </span>
      </div>
    </div>
  </>
);
