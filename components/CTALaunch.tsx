import * as React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormValues, subscribe, validationSchema } from "apis/convertKit";
import { ExclamationCircle20 } from "./icons/ExclamationCircleIcon";
import cx from "classnames";
import { emails } from "config";

export function CTALaunch() {
  const [didSubscribe, setDidSubscribe] = React.useState<boolean>(false);

  return (
    <div className="relative mb-24 sm:mb-32 sm:py-16 overflow-hidden">
      <div aria-hidden="true" className="hidden sm:block">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-blueGray-700 rounded-r-3xl"></div>
        <svg
          className="absolute top-8 left-1/2 -ml-3"
          width="404"
          height="392"
          fill="none"
          viewBox="0 0 404 392"
        >
          <defs>
            <pattern
              id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-pink-300"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="392"
            fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
          />
        </svg>
      </div>
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative rounded-2xl px-6 py-10 bg-pink-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
          >
            <svg
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360"
            >
              <path
                className="text-fuchsia-400 text-opacity-40"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
              />
              <path
                className="text-fuchsia-600 text-opacity-40"
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
              />
            </svg>
          </div>
          {!didSubscribe && (
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Get notified when we launch.
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-lg text-rose-100">
                  Be among the first to know when you can schedule any of our
                  phenomenal mobile cleaning and detailing services! We'll let
                  you know on February 15th, 2021!
                </p>
              </div>
              <SubscribeForm
                onSubscribeSuccess={() => {
                  setDidSubscribe(true);
                }}
                onSubscribeError={() => {
                  setDidSubscribe(false);
                  // TODO(cody): error handling/notifications
                }}
                submitButtonText="Notify me"
                className="mt-12 sm:mx-auto sm:max-w-lg"
              />
            </div>
          )}
          {didSubscribe && (
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Thanks for subscribing!
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-xs sm:text-lg text-white">
                  Please check your email for a subscription confirmation from{" "}
                  <code className="text-gray-200 font-bold">
                    {emails.support}
                  </code>
                </p>
                <p className="text-9xl text-center mt-6">🥳</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface SubscribeFormProps {
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
}: SubscribeFormProps) {
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
            <button
              type="submit"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              className="block disabled:opacity-60 w-full sm:w-auto sm:inline-block rounded-md border border-transparent px-5 py-3 bg-cyan-700 text-base font-medium text-white shadow hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500 sm:px-10"
            >
              {submitButtonText}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
