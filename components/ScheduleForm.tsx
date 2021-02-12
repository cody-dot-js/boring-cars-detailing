import * as React from "react";
import { PricingForm } from "./Pricing";
import { Form, Formik } from "formik";
import { FormValues, getInitialValues, validationSchema } from "apis/schedule";
import { PricingTier } from "apis/pricing";
import { Field } from "./Field";
import { scrollToTop } from "utils/scrollToTop";

interface Props {
  className?: string;
  initialValues?: FormValues;
  initialTier?: PricingTier;
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
      {({ isSubmitting, errors, touched, values }) => (
        <Form className={className}>
          <div className="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
            <div className="space-y-6">
              {/* Personal Information */}
              <section className="bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-pink-200">
                      Personal Information
                    </h3>
                    <p className="my-4 font-bold text-cyan-200">
                      We come to you, wherever you are!
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
                            invalid={
                              errors.emailAddress && touched.emailAddress
                            }
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
                            invalid={
                              errors.streetAddress && touched.streetAddress
                            }
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
                          invalid={
                            errors.additionalInfo && touched.additionalInfo
                          }
                        />
                        <p className="mt-2 text-sm text-gray-400">
                          Please share anything that will help us prepare for
                          your appointment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Package and Addons Section */}
          <section>
            <div className="max-w-7xl mx-auto lg:px-8 pb-4">
              <div className="space-y-6">
                <section className="bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
                  <div className="md:text-center">
                    <h3 className="text-2xl font-medium leading-6 text-pink-200">
                      Package and Addons
                    </h3>
                    <p className="text-sm text-gray-100 mt-4">
                      Decide which detailing package and additional services
                      works best for you.
                    </p>
                  </div>
                </section>
              </div>
            </div>
            <PricingForm values={values} />
          </section>

          {/* Submit Button */}
          <div className="max-w-7xl mx-auto pb-10 lg:px-8">
            <div className="flex justify-end mx-4 lg:mx-0">
              <button
                type="submit"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
                onClick={() => {
                  if (Object.values(errors).some((e) => e)) {
                    scrollToTop();
                  }
                }}
                className="disabled:opacity-60 disabled:cursor-not-allowed ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Next
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
