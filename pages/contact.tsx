import * as React from "react";
import { validationSchema, FormValues, contact } from "apis/contact";
import { ExternalLink } from "components/ExternalLink";
import { EmailIcon } from "components/icons/EmailIcon";
import { PhoneIcon } from "components/icons/PhoneIcon";
import { Layout } from "components/Layout";
import { GetStaticProps } from "next";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ExclamationCircleIcon } from "components/icons/ExclamationCircleIcon";
import cx from "classnames";
import { CheckCircleIcon } from "components/icons/CheckCircleIcon";
import { pageMeta, PageMeta } from "utils/pageMeta";
import { mailto } from "utils/mailto";
import { emails } from "config";
interface Props {
  meta: PageMeta;
}

export const getStaticProps: GetStaticProps = async () => {
  const props: Props = {
    meta: pageMeta(),
  };

  return {
    props,
  };
};

export default function Contact({ meta }: Props) {
  const [
    formSuccessfullySent,
    setFormSuccessfullySent,
  ] = React.useState<boolean>(false);
  return (
    <Layout
      pageMeta={meta}
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
                  <ExternalLink
                    className="ml-3 text-cyan-200"
                    href="tel:+1(916)385-7257"
                  >
                    +1 (916) 385-7257
                  </ExternalLink>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EmailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" />
                  <ExternalLink
                    className="ml-3 text-cyan-200"
                    href={mailto(emails.contact)}
                  >
                    {emails.contact}
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
              {formSuccessfullySent ? (
                <div className="mt-16">
                  <Success />
                  <div className="hidden lg:block lg:h-96 lg:py-96" />
                </div>
              ) : (
                <>
                  <p className="mt-4 text-lg text-gray-300 sm:mt-3">
                    Have questions or need to report an issue with any Boring
                    Cars Detailing service? We've got you covered! Get in touch
                    and let us know how we can help.
                  </p>
                  <ContactForm
                    onSuccess={() => {
                      setFormSuccessfullySent(true);
                    }}
                    onError={(e) => {
                      setFormSuccessfullySent(false);
                      // TODO(cody): notification/error handling
                      // console.log("ContactForm.onError", e.message);
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Success() {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-5 w-5 text-green-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">Form Submitted</h3>
          <div className="mt-2 text-sm text-green-700">
            <p>
              Thank you for reaching out to us! We'll get back to you as soon as
              we can.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ContactFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

function ContactForm({ onSuccess, onError }: ContactFormProps) {
  return (
    <Formik<FormValues>
      initialValues={{
        body: "",
        company: "",
        discovery: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
      }}
      onSubmit={(values) => contact(values).then(onSuccess).catch(onError)}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-300"
            >
              First name
            </label>
            <div className="mt-1">
              <Field
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className={cx(
                  "block w-full text-gray-50 placeholder-gray-300 shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 bg-gray-500 border-gray-600 rounded-md",
                  errors.firstName &&
                    touched.firstName &&
                    "border-red-500 text-red-300 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                )}
              />
              <ErrorMessage name="firstName">
                {() => (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-300" />
                  </div>
                )}
              </ErrorMessage>
            </div>
            <ErrorMessage
              name="firstName"
              className="mt-2 text-sm text-red-300"
              component="p"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-300"
            >
              Last name
            </label>
            <div className="mt-1">
              <Field
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className={cx(
                  "block w-full text-gray-50 placeholder-gray-300 shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 bg-gray-500 border-gray-600 rounded-md",
                  errors.lastName &&
                    touched.lastName &&
                    "border-red-500 text-red-300 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                )}
              />
              <ErrorMessage name="lastName">
                {() => (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-300" />
                  </div>
                )}
              </ErrorMessage>
            </div>
            <ErrorMessage
              name="lastName"
              className="mt-2 text-sm text-red-300"
              component="p"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <div className="mt-1">
              <Field
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={cx(
                  "block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 bg-gray-500 border-gray-600 rounded-md",
                  errors.email &&
                    touched.email &&
                    "border-red-500 text-red-300 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                )}
              />
              <ErrorMessage name="email">
                {() => (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-300" />
                  </div>
                )}
              </ErrorMessage>
            </div>
            <ErrorMessage
              name="email"
              className="mt-2 text-sm text-red-300"
              component="p"
            />
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-300"
              >
                Company
              </label>
              <span id="company_description" className="text-sm text-gray-500">
                Optional
              </span>
            </div>
            <div className="mt-1">
              <Field
                type="text"
                name="company"
                id="company"
                aria-describedby="company_description"
                className={cx(
                  "block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 bg-gray-500 border-gray-600 rounded-md",
                  errors.company &&
                    touched.company &&
                    "border-red-500 text-red-300 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                )}
              />
              <ErrorMessage name="company">
                {() => (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-300" />
                  </div>
                )}
              </ErrorMessage>
            </div>
            <ErrorMessage
              name="company"
              className="mt-2 text-sm text-red-300"
              component="p"
            />
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-300"
              >
                Phone
              </label>
              <span id="phone_description" className="text-sm text-gray-500">
                Optional
              </span>
            </div>
            <div className="mt-1">
              <Field
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                autoComplete="tel"
                aria-describedby="phone_description"
                className={cx(
                  "block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 bg-gray-500 border-gray-600 rounded-md",
                  errors.phoneNumber &&
                    touched.phoneNumber &&
                    "border-red-500 text-red-300 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                )}
              />
              <ErrorMessage name="phoneNumber">
                {() => (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-300" />
                  </div>
                )}
              </ErrorMessage>
            </div>
            <ErrorMessage
              name="phoneNumber"
              className="mt-2 text-sm text-red-300"
              component="p"
            />
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="body"
                className="block text-sm font-medium text-gray-300"
              >
                How can we help you?
              </label>
              <span id="body_description" className="text-sm text-gray-500">
                Max. 500 characters
              </span>
            </div>
            <div className="mt-1">
              <Field
                as="textarea"
                id="body"
                name="body"
                aria-describedby="body_description"
                rows={4}
                className={cx(
                  "block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 bg-gray-500 border-gray-600 rounded-md",
                  errors.body &&
                    touched.body &&
                    "border-red-500 text-red-300 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                )}
              />
            </div>
            <ErrorMessage
              name="body"
              className="mt-2 text-sm text-red-300"
              component="p"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="discovery"
              className="block text-sm font-medium text-gray-300"
            >
              How did you hear about us?
            </label>
            <div className="mt-1">
              <Field
                type="text"
                name="discovery"
                id="discovery"
                className={cx(
                  "shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm bg-gray-500 border-gray-600 rounded-md",
                  errors.discovery &&
                    touched.discovery &&
                    "border-red-500 text-red-300 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                )}
              />
              <ErrorMessage name="discovery">
                {() => (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-300" />
                  </div>
                )}
              </ErrorMessage>
            </div>
            <ErrorMessage
              name="discovery"
              className="mt-2 text-sm text-red-300"
              component="p"
            />
          </div>
          <div className="text-right sm:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              className="disabled:opacity-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
