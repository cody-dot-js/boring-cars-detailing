import * as React from "react";
import { getPageLayout } from "components/Layout";
import { GetStaticProps } from "next";
import { pageMeta, PageMeta } from "utils/pageMeta";
import { routes, shortName } from "config";
import type { BasePageProps } from "types/BasePageProps";
import { Page } from "types/PageLayout";
import { Calendly, CalendlyScript } from "components/Calendly";
import { ScheduleForm } from "components/ScheduleForm";
import { useRouter } from "next/router";
import { PricingTier } from "apis/pricing";
import { CalendlyPrefill, makeAppointmentPrefill } from "apis/calendly";
import { FormValues } from "apis/schedule";
import { ArrowLeft20 } from "components/icons/ArrowLeftIcon";
import { scrollToTop } from "utils/scrollToTop";
import { Link } from "components/Link";
import cx from "classnames";

interface Props extends BasePageProps {
  meta: PageMeta;
}

export const getStaticProps: GetStaticProps = async () => {
  const props: Props = {
    meta: pageMeta(),
    seo: {
      title: "Schedule",
      description: `Schedule a detailing appointment with ${shortName}`,
    },
  };

  return {
    props,
  };
};

interface QueryParams {
  tier?: PricingTier;
}

type State = {
  values?: FormValues;
  prefill?: CalendlyPrefill;
  scheduled: boolean;
};

type Action =
  | { type: "submit schedule form"; payload: FormValues }
  | { type: "go back" }
  | { type: "scheduled" }
  | { type: "reset form" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "submit schedule form":
      return {
        values: action.payload,
        prefill: makeAppointmentPrefill(action.payload),
        scheduled: false,
      };
    case "go back":
      return { ...state, prefill: undefined };
    case "scheduled":
      return { values: undefined, prefill: undefined, scheduled: true };
    case "reset form":
      return { values: undefined, prefill: undefined, scheduled: false };
    default:
      throw new Error("Invalid scheduling action");
  }
}

const Schedule: Page = () => {
  const router = useRouter();
  const { tier } = router.query as QueryParams;

  const [{ values, prefill, scheduled }, dispatch] = React.useReducer(reducer, {
    values: undefined,
    prefill: undefined,
    scheduled: false,
  });

  return (
    <div>
      <CalendlyScript />
      <div className="relative z-10 bg-cyan-700 pb-32 overflow-hidden">
        <div
          className="absolute flex justify-center inset-x-0 left-1/2 transform-gpu -translate-x-1/2 w-full overflow-hidden lg:inset-y-0"
          aria-hidden="true"
        >
          <div className="flex-grow bg-cyan-900 bg-opacity-75" />
          <svg
            className="flex-shrink-0 border-0 inset-0"
            width="1750"
            height="323"
            viewBox="0 0 1750 323"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* *-800 */}
            <path
              opacity=".75"
              d="M1465.84 323L16.816 0H1750v323h-284.16z"
              fill="#155e75"
            />
            {/* *-900 */}
            <path
              opacity=".75"
              d="M1733.19 0L284.161 323H0V0h1733.19z"
              fill="#164e63"
            />
          </svg>
          <div className="flex-grow bg-cyan-800 bg-opacity-75" />
        </div>
        <header className="relative py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-bold text-white lg:text-3xl">Schedule</h1>
            <h2 className="text-3xl mt-4 uppercase font-bold text-maximumBlue lg:text-5xl">
              Mobile Detailing Appointment
            </h2>
          </div>
        </header>
      </div>
      {prefill == null ? (
        <ScheduleForm
          className="-mt-36 relative z-10"
          initialTier={tier}
          initialValues={values}
          onSubmit={(values) => {
            dispatch({ type: "submit schedule form", payload: values });
            scrollToTop();
          }}
        />
      ) : (
        <div className="relative z-10">
          <div className="-mt-12 max-w-7xl mx-auto">
            <div className="space-y-6">
              <section className="bg-gray-800 shadow xl:rounded-lg">
                <header className="px-4 py-5 border-b border-gray-900 sm:px-6">
                  <div className="-ml-4 -mt-2 flex items-center justify-start flex-wrap sm:flex-nowrap">
                    <div className="ml-4 mt-2 flex-shrink-0">
                      <button
                        type="button"
                        aria-label="Go Back"
                        onClick={() => dispatch({ type: "go back" })}
                        className={cx(
                          "relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500",
                          scheduled && "hidden"
                        )}
                      >
                        <ArrowLeft20 />
                      </button>
                    </div>
                    <div className="ml-4 mt-2">
                      <h3 className="text-xl leading-6 font-medium text-white px-4 py-5">
                        {scheduled ? (
                          <>Thank you!</>
                        ) : (
                          <>Select a Date and Time</>
                        )}
                      </h3>
                    </div>
                  </div>
                </header>
                <div className="p-6 text-gray-300">
                  {scheduled ? (
                    <article className="prose mx-auto">
                      <p>
                        Thank you for scheduling your mobile detailing
                        appointment with us!
                      </p>
                      <p>
                        We appreciate your business and look forward to serving
                        you!
                      </p>
                      <p>
                        Click{" "}
                        <Link href={routes.schedule} onClick={router.reload}>
                          here
                        </Link>{" "}
                        if you would like to schedule another appointment.
                      </p>
                    </article>
                  ) : (
                    <p>
                      Select an available date and time from the Calendly form
                      below.
                    </p>
                  )}
                </div>
              </section>
            </div>
          </div>
          <div className="mt-16 sm:mt-0">
            <Calendly id="calendly" prefill={prefill} />
          </div>
        </div>
      )}
    </div>
  );
};

Schedule.pageLayout = getPageLayout;

export default Schedule;
