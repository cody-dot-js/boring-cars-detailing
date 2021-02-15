import * as React from "react";
import {
  AdditionalServices,
  DetailingPackagePricing,
  WashPackagePricingForm,
} from "./Pricing";
import { Form, Formik, useFormikContext } from "formik";
import { FormValues, getInitialValues, validationSchema } from "apis/schedule";
import { accumulatePrice, WashPricingTier } from "apis/pricing";
import { Field } from "./Field";
import { Button } from "./Button";
import { scrollToTop } from "utils/scrollToTop";

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
        <div className="max-w-7xl mx-auto lg:px-8 space-y-6 bg-gray-900 md:rounded-lg pb-36">
          <div className="px-4 py-5 sm:rounded-lg sm:p-6 md:text-center">
            <h3 className="text-2xl font-medium leading-6 text-pink-200">
              Wash Package and Detailing Addons
            </h3>
            <p className="text-sm text-gray-100 mt-4">
              Decide which vehicle wash package and additional detailing
              services works best for you.
            </p>
          </div>
          <div className="px-4 py-5 sm:rounded-lg sm:p-6 space-y-4">
            <h3 className="text-3xl font-bold uppercase leading-6 text-cyan-200">
              Wash Package
            </h3>
            <p className="text-gray-400">
              Choose the wash package that fits your vehicle size.
            </p>
          </div>
        </div>
        <WashPackagePricingForm className="-mt-36" values={values} />
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
                      id="streetAddress"
                      name="streetAddress"
                      type="text"
                      autoComplete="street-address"
                      invalid={errors.streetAddress && touched.streetAddress}
                    />
                  </label>
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-3">
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

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label>
                    <span className="block text-sm font-medium text-gray-300">
                      ZIP / Postal
                    </span>
                    <Field
                      id="zipPostal"
                      name="zipPostal"
                      type="text"
                      autoComplete="postal-code"
                      invalid={errors.zipPostal && touched.zipPostal}
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
