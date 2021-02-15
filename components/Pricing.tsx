import * as React from "react";
import Image from "next/image";
import { Check24 } from "./icons/CheckIcon";
import { Field } from "formik";
import {
  FormValues,
  washTierName,
  washTierPrice,
  WashPricingTier,
  washTierCategory,
  AddonService,
  addonServicePrices,
  detailingBasePrice,
} from "apis/pricing";
import cx from "classnames";
import { routes } from "config";
import { LinkButton } from "./Button";
import { CheckCircle20 } from "./icons/CheckCircleIcon";
import { Badge } from "./Badge";
import { Link } from "./Link";
import { Accordion } from "./Accordion";
import { LightBulb24 } from "./icons/LightBulbIcon";
import { Pet24 } from "./icons/PetIcon";
import { ShieldCheck24 } from "./icons/ShieldCheckIcon";
import { Soap24 } from "./icons/SoapIcon";
import { Sparkles24 } from "./icons/SparklesIcon";
import { CoronaVirus24 } from "./icons/CoronaVirusIcon";
import { Flower24 } from "./icons/FlowerIcon";
import { Fabric24 } from "./icons/FabricIcon";
import { Style24 } from "./icons/StyleIcon";
import { Opacity24 } from "./icons/OpacityIcon";

interface PricingFormProps {
  className?: string;
  values?: FormValues;
}

export const WashPackagePricingForm = ({
  className,
  values,
}: PricingFormProps) => {
  const { washTier = "Plus" } = values || {};

  return (
    <div className={className}>
      <div role="group" className="mt-8 pb-12 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 top-8 lg:top-24 h-5/6 lg:h-2/3 bg-gradient-to-r from-teal-500 to-cyan-600" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative space-y-16 lg:space-y-0 lg:flex">
              {/* REGULAR CARD */}
              <WashPricingCard
                tier="Regular"
                selectable
                selected={washTier === "Regular"}
              />

              {/* PLUS CARD */}
              <WashPricingCard
                tier="Plus"
                selectable
                selected={washTier === "Plus"}
              />

              {/* PREMIUM CARD */}
              <WashPricingCard
                tier="Premium"
                selectable
                selected={washTier === "Premium"}
              />
            </div>
          </div>
        </div>
      </div>
      {/* What's Included */}
      <section>
        <WhatsIncluded />
      </section>
    </div>
  );
};

interface DetailingPackagePricingProps extends PricingFormProps {
  selectable?: boolean;
}

export function DetailingPackagePricing({
  className,
  values,
  selectable,
}: DetailingPackagePricingProps) {
  const { addDetailing } = values || {};

  return (
    <div className={className}>
      <div className="pb-12 mt-8 sm:pb-16 lg:pb-24">
        <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <label className={cx("block", selectable && "cursor-pointer")}>
              {selectable && (
                <Field type="checkbox" name="addDetailing" className="hidden" />
              )}
              <div
                className={cx(
                  "rounded-lg bg-gray-800 px-6 py-8 sm:p-10",
                  selectable && "hover:glow-cyan-pulse",
                  addDetailing && "glow-sm-cyan-400"
                )}
              >
                <h3 className="flex justify-between">
                  <Badge className="py-1 rounded-full text-sm font-bold tracking-wide uppercase bg-cyan-200 text-cyan-600 glow-cyan-pulse">
                    Detailing
                  </Badge>
                  {selectable && (
                    <span
                      className={cx(
                        "bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400",
                        addDetailing && "bg-pink-400"
                      )}
                      aria-pressed="false"
                      aria-labelledby="availability-label"
                    >
                      <span className="sr-only">
                        {addDetailing ? "Remove detailing" : "Add detailing"}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cx(
                          "translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-200",
                          addDetailing
                            ? "translate-x-5 bg-pink-100"
                            : "translate-x-0 bg-gray-600"
                        )}
                      />
                    </span>
                  )}
                </h3>
                <div className="mt-4 space-y-4">
                  <p className="text-xl leading-normal text-gray-300">
                    Add on auto detailing for an additional{" "}
                    <span className="font-semibold text-white">
                      ${detailingBasePrice}*
                    </span>
                    .
                  </p>
                  <p className="text-sm leading-normal text-gray-500">
                    * Price varies on vehicle size and condition.
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdditionalServicesSection() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-6 sm:px-8pt-8 text-center space-y-3">
          <Link
            className="headingLink"
            id="additional-services"
            href="#additional-services"
          >
            <h3 className="text-3xl font-bold uppercase leading-6 text-cyan-200">
              Additional Services
            </h3>
          </Link>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Select from our premium additional services. You'll love the results
            and the price!
          </p>
        </div>
        <div className="mt-10">
          <AdditionalServices />
        </div>
      </div>
    </div>
  );
}

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
              <WashPricingCard tier="Regular" />

              {/* PLUS CARD */}
              <WashPricingCard tier="Plus" selected />

              {/* PREMIUM CARD */}
              <WashPricingCard tier="Premium" />
            </div>
          </div>
        </div>
        <OtherVehicles />
        {/* What's Included */}
        <WhatsIncluded />
      </section>
      <section>
        <div className="px-6 sm:px-8pt-8 text-center space-y-3">
          <h3 className="text-3xl font-bold uppercase leading-6 text-cyan-200">
            Detailing Package
          </h3>
        </div>
        <DetailingPackagePricing />
      </section>
      <section>
        <AdditionalServicesSection />
      </section>
    </section>
  );
});

interface AdditionalServiceCardProps {
  className?: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  selectable?: boolean;
  name?: string;
  value?: string;
  selected?: boolean;
}

function AdditionalServiceCard({
  className,
  icon,
  title,
  description,
  selectable,
  name = "addons",
  value,
  selected,
}: AdditionalServiceCardProps) {
  return (
    <div
      className={cx(
        "transition-all relative bg-gray-800 p-6 ring-2 ring-inset",
        selected ? "ring-cyan-300" : "ring-transparent",
        className
      )}
    >
      <label className={cx("block", selectable && "cursor-pointer")}>
        {selectable && (
          <Field type="checkbox" name={name} value={value} className="hidden" />
        )}
        <div>{icon}</div>
        <div className="mt-8">
          <h3 className="text-lg font-medium">{title}</h3>
          <div className="mt-2 text-sm text-gray-300">{description}</div>
        </div>
        <span
          className={cx(
            "absolute top-6 right-6 text-cyan-300 group-hover:text-cyan-400",
            selected ? "opacity-100" : "opacity-0"
          )}
          aria-hidden="true"
        >
          <Check24 />
        </span>
      </label>
    </div>
  );
}

export function AdditionalServices({
  selectable,
  values,
}: {
  selectable?: boolean;
  values?: FormValues;
}) {
  const { addons = [] } = values || {};

  return (
    <div className="rounded-lg bg-gray-900 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-2-px">
      <AdditionalServiceCard
        className="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
        title={AddonService.petHairRemoval}
        value={AddonService.petHairRemoval}
        selectable={selectable}
        selected={addons.includes(AddonService.petHairRemoval)}
        description={
          <p className="text-2xl">
            ${addonServicePrices[AddonService.petHairRemoval]}{" "}
            <span className="text-sm text-gray-500">(pricing may vary)</span>
          </p>
        }
        icon={
          <span className="rounded-lg inline-flex p-3 bg-fuchsia-50 text-fuchsia-700 glow-sm-fuchsia-400">
            <Pet24 />
          </span>
        }
      />

      <AdditionalServiceCard
        className="sm:rounded-tr-lg"
        title={AddonService.clayBarTreatment}
        value={AddonService.clayBarTreatment}
        selectable={selectable}
        selected={addons.includes(AddonService.clayBarTreatment)}
        description={
          <p className="text-2xl">
            ${addonServicePrices[AddonService.clayBarTreatment]}{" "}
            <span className="text-sm text-gray-500">(pricing may vary)</span>
          </p>
        }
        icon={
          <span className="rounded-lg inline-flex p-3 bg-pink-50 text-pink-700 glow-sm-pink-400">
            <Style24 />
          </span>
        }
      />

      <AdditionalServiceCard
        title={AddonService.fabricProtection}
        value={AddonService.fabricProtection}
        selectable={selectable}
        selected={addons.includes(AddonService.fabricProtection)}
        description={
          <p className="text-2xl">
            ${addonServicePrices[AddonService.fabricProtection]}{" "}
            <span className="text-sm text-gray-500">(pricing may vary)</span>
          </p>
        }
        icon={
          <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-700 glow-sm-blue-400">
            <Fabric24 />
          </span>
        }
      />

      <AdditionalServiceCard
        title={AddonService.ozoneTreatment}
        value={AddonService.ozoneTreatment}
        selectable={selectable}
        selected={addons.includes(AddonService.ozoneTreatment)}
        description={
          <p className="text-2xl">
            ${addonServicePrices[AddonService.ozoneTreatment]}{" "}
            <span className="text-sm text-gray-500">(pricing may vary)</span>
          </p>
        }
        icon={
          <span className="rounded-lg inline-flex p-3 bg-emerald-50 text-emerald-700 glow-sm-emerald-400">
            <ShieldCheck24 />
          </span>
        }
      />

      <AdditionalServiceCard
        title={AddonService.headlightRestoration}
        value={AddonService.headlightRestoration}
        selectable={selectable}
        selected={addons.includes(AddonService.headlightRestoration)}
        description={
          <p className="text-2xl">
            ${addonServicePrices[AddonService.headlightRestoration]}{" "}
            <span className="text-sm text-gray-500">(pricing may vary)</span>
          </p>
        }
        icon={
          <span className="rounded-lg inline-flex p-3 bg-yellow-50 text-yellow-700 glow-sm-yellow-400">
            <LightBulb24 />
          </span>
        }
      />

      <AdditionalServiceCard
        title={AddonService.odorRemoval}
        value={AddonService.odorRemoval}
        selectable={selectable}
        selected={addons.includes(AddonService.odorRemoval)}
        description={
          <p className="text-2xl">
            ${addonServicePrices[AddonService.odorRemoval]}{" "}
            <span className="text-sm text-gray-500">(pricing may vary)</span>
          </p>
        }
        icon={
          <span className="rounded-lg inline-flex p-3 bg-pink-50 text-pink-700 glow-sm-pink-400">
            <Flower24 />
          </span>
        }
      />

      <AdditionalServiceCard
        title={AddonService.headlinerCleaning}
        value={AddonService.headlinerCleaning}
        selectable={selectable}
        selected={addons.includes(AddonService.headlinerCleaning)}
        description={
          <p className="text-2xl">
            ${addonServicePrices[AddonService.headlinerCleaning]}{" "}
            <span className="text-sm text-gray-500">(pricing may vary)</span>
          </p>
        }
        icon={
          <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 glow-sm-indigo-400">
            <Opacity24 />
          </span>
        }
      />

      <AdditionalServiceCard
        title={AddonService.washAndWax}
        value={AddonService.washAndWax}
        selectable={selectable}
        selected={addons.includes(AddonService.washAndWax)}
        description={
          <p className="text-2xl">
            ${addonServicePrices[AddonService.washAndWax]}{" "}
            <span className="text-sm text-gray-500">(pricing may vary)</span>
          </p>
        }
        icon={
          <span className="rounded-lg inline-flex p-3 bg-lightBlue-50 text-lightBlue-700 glow-sm-lightBlue-400">
            <Soap24 />
          </span>
        }
      />

      <AdditionalServiceCard
        className="sm:rounded-bl-lg"
        title={AddonService.interiorSanitization}
        value={AddonService.interiorSanitization}
        selectable={selectable}
        selected={addons.includes(AddonService.interiorSanitization)}
        description={
          <p className="text-2xl">
            ${addonServicePrices[AddonService.interiorSanitization]}{" "}
            <span className="text-sm text-gray-500">(pricing may vary)</span>
          </p>
        }
        icon={
          <span className="rounded-lg inline-flex p-3 bg-rose-50 text-rose-700 glow-sm-rose-400">
            <CoronaVirus24 />
          </span>
        }
      />

      <AdditionalServiceCard
        // className="rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
        title={AddonService.oneStepPolish}
        value={AddonService.oneStepPolish}
        selectable={selectable}
        selected={addons.includes(AddonService.oneStepPolish)}
        description={
          <p className="text-2xl">
            ${addonServicePrices[AddonService.oneStepPolish]}{" "}
            <span className="text-sm text-gray-500">(pricing may vary)</span>
          </p>
        }
        icon={
          <span className="rounded-lg inline-flex p-3 bg-gray-50 text-gray-700 glow-sm-yellow-400">
            <Sparkles24 />
          </span>
        }
      />
    </div>
  );
}

function OtherVehicles() {
  return (
    <div className="mx-auto max-w-xl px-12 pb-6">
      <Accordion
        animated
        title={
          <h3 className="font-extrabold text-cyan-200 text-lg sm:text-2xl">
            Have an RV, Boat, or Motorcycle?
          </h3>
        }
      >
        <p className="prose mt-6 text-base text-gray-300">
          No problem! <Link href={routes.contact}>Contact us</Link> for prices!
        </p>
      </Accordion>
    </div>
  );
}

function WhatsIncluded() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
        <div className="flex-1 shadow bg-gray-800 px-6 py-8 lg:p-12">
          <h3 className="text-2xl font-extrabold text-cyan-200 sm:text-3xl">
            Choose a Wash Package
          </h3>
          <p className="mt-6 text-base text-gray-300">
            No matter what size vehice you have, you're going to love the care
            that we put into our services!
          </p>
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 pr-4 bg-gray-800 text-sm tracking-wider font-semibold uppercase text-pink-300">
                What's included
              </h4>
              <div className="flex-1 border-t-2 border-pink-300 glow-lg-pink-400" />
            </div>
            <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-5">
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <CheckCircle20 className="h-5 w-5 text-cyan-300" />
                </div>
                <p className="ml-3 text-sm text-gray-100">Exterior hand wash</p>
              </li>

              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <CheckCircle20 className="h-5 w-5 text-cyan-300" />
                </div>
                <p className="ml-3 text-sm text-gray-100">
                  Interior vacuum cleaning
                </p>
              </li>

              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <CheckCircle20 className="h-5 w-5 text-cyan-300" />
                </div>
                <p className="ml-3 text-sm text-gray-100">
                  Under-the-hood wipe down (engine cover)
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const A = () => (
  <div className="flex items-center justify-between">
    <span className="flex-grow flex flex-col" id="availability-label">
      <span className="text-sm font-medium text-gray-900">
        Available to hire
      </span>
      <span className="text-sm leading-normal text-gray-500">
        Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.
      </span>
    </span>
    {/* <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" --> */}
    <button
      type="button"
      className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      aria-pressed="false"
      aria-labelledby="availability-label"
    >
      <span className="sr-only">Use setting</span>
      {/* <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" --> */}
      <span
        aria-hidden="true"
        className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
      ></span>
    </button>
  </div>
);

interface SelectableCardProps {
  className?: string;
  children: React.ReactNode;
  selected?: boolean;
  selectable?: boolean;
  selectedDecoration?: React.ReactNode;
  name?: string;
  value?: string;
}

function SelectableCard({
  children,
  className,
  selectable,
  selected,
  selectedDecoration,
  name,
  value,
}: SelectableCardProps) {
  return (
    <div
      className={cx(
        "relative z-0 transform-gpu transition-all max-w-lg lg:max-w-none",
        selected && "scale-105 sm:scale-110 z-10",
        className
      )}
    >
      <label className={cx("block", selectable && "cursor-pointer")}>
        <div
          className={cx(
            "relative rounded-lg shadow-xl hover:glow-pink-pulse",
            selected &&
              "glow-amber-pulse hover:glow-amber-pulse lg:glow-cyan-pulse lg:hover:glow-cyan-pulse"
          )}
        >
          {selected && (
            <SelectedDecoration>
              {selectedDecoration ?? <Check24 />}
            </SelectedDecoration>
          )}
          {selectable && (
            <Field type="radio" name={name} value={value} className="hidden" />
          )}
          {children}
        </div>
      </label>
    </div>
  );
}

interface WashPricingCardProps {
  selectable?: boolean;
  gradientClassName?: string;
  selected?: boolean;
  tier: WashPricingTier;
}

const pricingTierImage: Record<
  WashPricingTier,
  { alt: string; src: string }
> = {
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

function WashPricingCard({
  selectable,
  gradientClassName,
  selected,
  tier,
}: WashPricingCardProps) {
  const name = washTierName[tier];
  const price = washTierPrice[tier];
  const category = washTierCategory[tier];
  const { src, alt } = pricingTierImage[tier];
  const scheduleRoute = scheduleTierPath(tier);

  return (
    <SelectableCard
      className="mt-10 mx-auto lg:mt-0"
      selected={selected}
      selectable={selectable}
      selectedDecoration={selectable ? <Check24 /> : "Most Popular"}
      name="washTier"
      value={tier}
    >
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
            {!selectable && (
              <LinkButton
                href={scheduleRoute}
                variant="secondary"
                className="relative z-10 mt-10"
              >
                Schedule
              </LinkButton>
            )}
          </div>
        </div>
      </div>
    </SelectableCard>
  );
}

function scheduleTierPath(tier: WashPricingTier) {
  const query = new URLSearchParams({ tier });
  return `${routes.schedule}?${query}`;
}

const SelectedDecoration = ({ children }: { children: React.ReactNode }) => (
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
