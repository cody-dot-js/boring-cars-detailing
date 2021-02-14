import * as React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormValues, subscribe, validationSchema } from "apis/convertKit";
import { ExclamationCircle20 } from "./icons/ExclamationCircleIcon";
import cx from "classnames";
import { Button } from "./Button";

interface Props {
  onSubscribeSuccess?: () => void;
  onSubscribeError?: (error: Error) => void;
  submitButtonText?: React.ReactNode;
  className?: string;
}

export function SubscribeForm({
  onSubscribeSuccess,
  onSubscribeError,
  submitButtonText = "Subscribe",
  className,
}: Props) {
  return (
    <Formik<FormValues>
      initialValues={{
        email: "",
        name: "",
      }}
      onSubmit={(values) =>
        subscribe(values).then(onSubscribeSuccess).catch(onSubscribeError)
      }
      validationSchema={validationSchema}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className={className}>
          <div className="grid grid-cols-6 gap-4 ">
            <div className="col-span-6">
              <label htmlFor="cta_name" className="sr-only">
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Field
                  id="cta_name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className={cx(
                    "block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500",
                    errors.name &&
                      touched.name &&
                      "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-300"
                  )}
                  placeholder="Enter your name"
                />
                <ErrorMessage name="name">
                  {() => (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ExclamationCircle20 className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <ErrorMessage
                name="name"
                className="mt-2 text-sm text-red-100"
                component="p"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="cta_email" className="sr-only">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Field
                  id="cta_email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={cx(
                    "block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500",
                    errors.email &&
                      touched.email &&
                      "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-300"
                  )}
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email">
                  {() => (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ExclamationCircle20 className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <ErrorMessage
                name="email"
                className="mt-2 text-sm text-red-100"
                component="p"
              />
            </div>
          </div>
          <div className="flex justify-end mt-4 w-full">
            <Button
              type="submit"
              variant="secondary"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              className="w-full sm:w-auto sm:inline-block"
            >
              {submitButtonText}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
