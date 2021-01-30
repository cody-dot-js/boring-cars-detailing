import * as React from "react";
import { makeGA, runPageViewMetrics } from "apis/ga";
import { useEnv } from "hooks/useEnv";

export function Analytics() {
  const { VERCEL_ENV, GA_MEASUREMENT_ID } = useEnv();

  React.useEffect(() => {
    if (VERCEL_ENV !== "production") {
      return;
    }

    if (GA_MEASUREMENT_ID) {
      const ga = makeGA({
        measurementId: GA_MEASUREMENT_ID,
        location: window.location.href,
      });
      runPageViewMetrics(ga);
    }
  }, [GA_MEASUREMENT_ID, VERCEL_ENV]);

  return null;
}
