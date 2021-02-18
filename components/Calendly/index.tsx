import * as React from "react";
import Head from "next/head";
import cx from "classnames";
import {
  CalendlyEvent,
  CalendlyPrefill,
  CalendlyScheduledEvent,
  isCalendlyEvent,
} from "apis/calendly";
import styles from "./styles.module.css";

export function CalendlyScript() {
  return (
    <Head>
      <script
        key="calendly"
        type="text/javascript"
        async
        src="https://assets.calendly.com/assets/external/widget.js"
      />
    </Head>
  );
}

// function CalendlyCss() {
//   return (
//     <link
//       key="calendlyStylesheet"
//       href="https://assets.calendly.com/assets/external/widget.css"
//       rel="stylesheet preload"
//       as="style"
//     />
//   );
// }

interface Props {
  className?: string;
  prefill: CalendlyPrefill;
  onSchedule?: (scheduledEvent: CalendlyScheduledEvent) => void;
}

export function Calendly({ className, prefill, onSchedule }: Props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [onSubmitPage, setOnSubmitPage] = React.useState(false);

  React.useEffect(() => {
    const calendly = document.getElementById("calendly");

    if (prefill != null && window.Calendly != null) {
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/boringcarsdetailing/detailing-appointment",
        parentElement: calendly,
        prefill,
      });
    }

    calendly.scrollTo({ top: 0, behavior: "smooth" });
  }, [prefill]);

  React.useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (isCalendlyEvent(e)) {
        const { data } = e;
        const message: CalendlyEvent = data.event;
        switch (message) {
          case "calendly.event_type_viewed": {
            setIsLoading(false);
            break;
          }
          case "calendly.date_and_time_selected": {
            setOnSubmitPage(true);
            break;
          }
          case "calendly.event_scheduled": {
            onSchedule(data.payload);
            break;
          }
        }
      }
    }

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  });

  return (
    <div className={cx("relative", className)}>
      {isLoading && (
        <div className="absolute z-0 inset-0">
          <div className="flex justify-center">
            <Loading />
          </div>
        </div>
      )}
      <div
        id="calendly"
        className={cx(
          "relative z-10",
          styles.calendly,
          onSubmitPage && styles.calendlySchedule,
          !onSubmitPage && styles.calendlyDateAndTime
        )}
      />
    </div>
  );
}

function Loading() {
  return <div className={styles.loadingPlaceholder} />;
}
