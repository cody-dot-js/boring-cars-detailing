import * as React from "react";
import { useEnv } from "hooks/useEnv";
import Head from "next/head";

export function Analytics() {
  const { VERCEL_ENV, GA_MEASUREMENT_ID } = useEnv();

  const isAnalyticsDisabled = VERCEL_ENV !== "production" || !GA_MEASUREMENT_ID;
  const gtagScriptSrc = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

  if (isAnalyticsDisabled) {
    return null;
  }

  return (
    <Head>
      <script async src={gtagScriptSrc} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("js", new Date());
        gtag("config", "${GA_MEASUREMENT_ID}", {
          page_path: window.location.pathname,
        });
        `,
        }}
      />
    </Head>
  );
}
