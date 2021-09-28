import * as React from "react";
import {
  validationSchema,
  FormValues,
  contact,
  initialValues,
} from "apis/contact";
import { ExternalLink } from "components/ExternalLink";
import { Email24 } from "components/icons/EmailIcon";
import { Phone24 } from "components/icons/PhoneIcon";
import { getPageLayout } from "components/Layout";
import { GetStaticProps } from "next";
import { Formik, Form } from "formik";
import { CheckCircle20 } from "components/icons/CheckCircleIcon";
import { pageMeta, PageMeta } from "utils/pageMeta";
import { mailToLink } from "utils/mailToLink";
import { emails, shortName, telephoneNumber } from "config";
import { telLink } from "utils/telLink";
import type { BasePageProps } from "types/BasePageProps";
import { Page } from "types/PageLayout";
import { Button } from "components/Button";
import { Field } from "components/Field";

interface Props extends BasePageProps {
  meta: PageMeta;
}

export const getStaticProps: GetStaticProps = async () => {
  const props: Props = {
    meta: pageMeta(),
    seo: {
      title: "Contact",
      description: `Contact ${shortName}`,
    },
  };

  return {
    props,
  };
};

const Contact: Page = () => {
  const [formSuccessfullySent, setFormSuccessfullySent] =
    React.useState<boolean>(false);

  return (
    <>
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
                  <Phone24 className="flex-shrink-0 h-6 w-6 text-gray-400" />
                  <ExternalLink
                    className="ml-3 text-cyan-200"
                    href={telLink(telephoneNumber)}
                  >
                    {telephoneNumber}
                  </ExternalLink>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <Email24 className="flex-shrink-0 h-6 w-6 text-gray-400" />
                  <ExternalLink
                    className="ml-3 text-cyan-200"
                    href={mailToLink(emails.contact)}
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
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Contact.pageLayout = getPageLayout;

export default Contact;

function Success() {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircle20 className="h-5 w-5 text-green-400" />
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
      initialValues={initialValues}
      onSubmit={(values) => contact(values).then(onSuccess).catch(onError)}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div className="sm:col-span-2">
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

          <div className="sm:col-span-2">
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

          <div className="sm:col-span-2">
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

          <div className="sm:col-span-2">
            <label>
              <div className="flex justify-between text-sm font-medium text-gray-300">
                <span>Company</span>
                <span
                  id="company_description"
                  className="text-sm text-gray-500"
                >
                  Optional
                </span>
              </div>
              <Field
                type="text"
                name="company"
                id="company"
                aria-describedby="company_description"
                invalid={errors.company && touched.company}
              />
            </label>
          </div>

          <div className="sm:col-span-2">
            <label>
              <div className="flex justify-between text-sm font-medium text-gray-300">
                <span>How can we help you?</span>
                <span id="phone_description" className="text-sm text-gray-500">
                  Max. 500 characters
                </span>
              </div>
              <Field
                as="textarea"
                id="body"
                name="body"
                aria-describedby="body_description"
                rows={4}
                invalid={errors.body && touched.body}
              />
            </label>
          </div>

          <div className="sm:col-span-2">
            <label>
              <div className="flex justify-between text-sm font-medium text-gray-300">
                <span>How did you hear about us?</span>
                <span
                  id="discovery_description"
                  className="text-sm text-gray-500"
                >
                  Optional
                </span>
              </div>
              <Field
                type="text"
                name="discovery"
                id="discovery"
                aria-describedby="discovery_description"
                invalid={errors.discovery && touched.discovery}
              />
            </label>
          </div>

          <div className="text-right sm:col-span-2">
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
