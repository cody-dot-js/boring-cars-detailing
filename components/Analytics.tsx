import * as React from "react";
import { useEnv } from "hooks/useEnv";
import Head from "next/head";
import { gtag, pageView } from "utils/gtag";

export function Analytics() {
  const { VERCEL_ENV, GA_MEASUREMENT_ID } = useEnv();

  const isAnalyticsDisabled = VERCEL_ENV !== "production" || !GA_MEASUREMENT_ID;
  const gtagScriptSrc = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

  React.useEffect(() => {
    window.dataLayer ||= [];
    window.gtag ||= gtag;

    window.gtag("js", new Date());
    pageView(window.location.pathname, GA_MEASUREMENT_ID);
  }, [GA_MEASUREMENT_ID, isAnalyticsDisabled]);

  if (isAnalyticsDisabled) {
    return null;
  }

  return (
    <Head>
      <script async src={gtagScriptSrc} />
    </Head>
  );
}
