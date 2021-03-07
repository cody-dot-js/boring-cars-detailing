import * as React from "react";
import cx from "classnames";
import {
  AdditionalServices,
  CarWashWhatsIncluded,
  DetailingPackagePricing,
  WashPackagePricingForm,
} from "./Pricing";
import { Form, Formik, useFormikContext, FieldProps } from "formik";
import { FormValues, getInitialValues, validationSchema } from "apis/schedule";
import { accumulatePrice, WashPricingTier } from "apis/pricing";
import { Field, fieldClassName } from "./Field";
import { Button } from "./Button";
import { scrollToTop } from "utils/scrollToTop";
import { useAutosuggestAddress } from "apis/here";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "./Combobox";

interface Props {
  className?: string;
  initialValues?: FormValues;
  initialTier?: WashPricingTier;
  onSubmit?: (values: FormValues) => void;
}

export function ScheduleForm({
  className,
  initialTier,
  onSubmit,
  ...rest
}: Props) {
  const initialValues = {
    ...getInitialValues(initialTier),
    ...rest.initialValues,
  };

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <ScheduleFormInstance className={className} />
    </Formik>
  );
}

function ScheduleFormInstance({ className }: { className?: string }) {
  const {
    isSubmitting,
    errors,
    touched,
    values,
  } = useFormikContext<FormValues>();

  const anticipatedCost = accumulatePrice(values);

  const personalInfoRef = React.useRef<HTMLHeadingElement>();

  return (
    <Form className={className}>
      {/* Package and Addons Section */}
      <section>
        <div className="max-w-7xl mx-auto lg:px-8 space-y-6 bg-gray-900 md:rounded-lg pb-32">
          <CarWashWhatsIncluded
            className="pt-8"
            title={
              <div className="px-4 sm:px-6 lg:px-8 text-center space-y-3">
                <h3 className="text-3xl font-bold uppercase leading-6 text-cyan-200">
                  Choose a Wash Package
                </h3>
                <p className="mt-3 max-w-5xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
                  Our Eco-Friendly car wash uses less water and chemicals than a
                  typical car wash.
                </p>
              </div>
            }
          />
        </div>
        <WashPackagePricingForm className="-mt-32" values={values} />
        <div>
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="sm:rounded-lg space-y-4">
              <h3 className="text-3xl font-bold uppercase leading-6 text-cyan-200">
                Detailing Package
              </h3>
            </div>
          </div>
          <DetailingPackagePricing values={values} selectable />
        </div>

        <div>
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="sm:rounded-lg space-y-4">
              <h3 className="text-3xl font-bold uppercase leading-6 text-cyan-200">
                Additional Services
              </h3>
            </div>
            <div className="mt-10">
              <AdditionalServices selectable values={values} />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8 pt-8">
        {/* Personal Information */}
        <section className="bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3
                ref={personalInfoRef}
                className="text-lg font-medium leading-6 text-pink-200"
              >
                Personal Information
              </h3>
              <p className="my-4 font-bold text-cyan-200">
                We come to you in the San Francisco Bay Area!
              </p>
              <p className="text-sm text-gray-100">
                Please fill out the form so that we can best serve you.
              </p>
              <p className="mt-2 text-sm text-gray-100">
                This will allow us to autofill your information with our
                scheduling provider.
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label>
                    <span className="block text-sm font-medium text-gray-300">
                      Name
                    </span>
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      invalid={errors.name && touched.name}
                    />
                  </label>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label>
                    <span className="block text-sm font-medium text-gray-300">
                      Email address
                    </span>
                    <Field
                      id="emailAddress"
                      name="emailAddress"
                      type="email"
                      autoComplete="email"
                      invalid={errors.emailAddress && touched.emailAddress}
                    />
                  </label>
                </div>

                <div className="col-span-3">
                  <label>
                    <span className="block text-sm font-medium text-gray-300">
                      Phone number
                    </span>
                    <Field
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      autoComplete="tel"
                      invalid={errors.phoneNumber && touched.phoneNumber}
                    />
                  </label>
                </div>

                <div className="col-span-6">
                  <label>
                    <span className="block text-sm font-medium text-gray-300">
                      Street address
                    </span>
                    <Field
                      component={AddressField}
                      id="streetAddress"
                      name="streetAddress"
                      type="text"
                      autoComplete="street-address"
                      invalid={errors.streetAddress && touched.streetAddress}
                    />
                  </label>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label>
                    <span className="block text-sm font-medium text-gray-300">
                      City
                    </span>
                    <Field
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      invalid={errors.city && touched.city}
                    />
                  </label>
                </div>

                <div className="col-span-6 sm:col-span-1">
                  <label>
                    <span className="block text-sm font-medium text-gray-300">
                      State
                    </span>
                    <div
                      aria-label="We only service the Bay Area"
                      data-microtip-position="bottom"
                      data-microtip-size="fit"
                      role="tooltip"
                      className="mt-1 relative rounded-md shadow-sm"
                    >
                      <input
                        className="mt-1 bg-gray-600 text-white placeholder-gray-300 border-gray-600 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm rounded-md"
                        type="text"
                        autoComplete="off"
                        name="state"
                        value="CA"
                        readOnly
                        aria-readonly
                      />
                    </div>
                  </label>
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label>
                    <span className="block text-sm font-medium text-gray-300">
                      ZIP
                    </span>
                    <Field
                      id="zip"
                      name="zip"
                      type="text"
                      autoComplete="postal-code"
                      invalid={errors.zip && touched.zip}
                    />
                  </label>
                </div>

                <div className="col-span-6">
                  <div className="flex justify-between">
                    <label
                      htmlFor="additionalInfo"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Additional Info
                    </label>
                    <span
                      id="additionalInfoDescription"
                      className="text-sm text-gray-500"
                    >
                      Optional
                    </span>
                  </div>
                  <Field
                    id="additionalInfo"
                    name="additionalInfo"
                    as="textarea"
                    rows={3}
                    placeholder="I would like for..."
                    invalid={errors.additionalInfo && touched.additionalInfo}
                  />
                  <p className="mt-2 text-sm text-gray-400">
                    Please share anything that will help us prepare for your
                    appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Submit Button */}
      <div className="max-w-7xl mx-auto pb-10 lg:px-8 mt-8">
        <div className="flex justify-end items-center mx-4 lg:mx-0">
          <p className="text-gray-400 text-2xl font-semibold mr-16">
            Anticipated cost: ${anticipatedCost}
          </p>
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
            onClick={() => scrollToTop(personalInfoRef.current.offsetTop)}
          >
            Next
          </Button>
        </div>
      </div>
    </Form>
  );
}

function AddressField({ field, form, ...rest }: FieldProps<FormValues>) {
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState<string | undefined>();
  const { data } = useAutosuggestAddress(search);

  function onSelect(value: string) {
    let parts = value.split(",").map((p) => p.trim());
    if (parts.length === 4) {
      parts.unshift("");
    }
    let [name, address, city, zip] = parts;
    zip = zip.replace(/[CA]/g, "").trim();
    const streetAddress = `${name}${name ? "," : ""} ${address}`.trim();

    form.setFieldValue("streetAddress", streetAddress, false);
    form.setFieldValue("city", city, false);
    form.setFieldValue("zip", zip, false);
    form.validateField("streetAddress");
    form.validateField("city");
    form.validateField("zip");

    setSelected(streetAddress);
    setSearch(streetAddress);
  }

  return (
    <>
      <Combobox
        className="relative rounded-md overflow-none"
        aria-label="street address"
        onSelect={onSelect}
      >
        <ComboboxInput
          className={fieldClassName()}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelected(undefined);
          }}
          value={search}
          name={field.name}
          id={field.name}
        />
        {data && !selected && (
          <ComboboxPopover
            className={cx(
              data.length === 0 && "pointer-events-none outline-none ring-0"
            )}
          >
            {data.length > 0 ? (
              <ComboboxList>
                {data.map((item) => {
                  const { label } = item.address;
                  return <ComboboxOption key={label} value={label} />;
                })}
              </ComboboxList>
            ) : (
              <div className="bg-gray-700 p-4 border border-red-300 rounded-md pointer-events-none">
                No results found
              </div>
            )}
          </ComboboxPopover>
        )}
      </Combobox>
    </>
  );
}
