import { useRouter } from "next/router";
import * as React from "react";

export function useRouteChanged(
  handler: (url: string, options: { shallow: boolean }) => void
) {
  const { events } = useRouter();

  React.useEffect(() => {
    events.on("routeChangeComplete", handler);
    return () => {
      events.off("routeChangeComplete", handler);
    };
  }, [events, handler]);
}
