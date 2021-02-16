import * as React from "react";
import Head from "next/head";
// import cx from "classnames";

declare global {
  interface Window {
    gc_params: {
      graphcomment_id: string;
      fixed_header_height: number;
    };
  }
}

const GRAPHCOMMENT_ID = "Boring-Cars-Detailing";
const GRAPHCOMMENT_BASE_URL = "https://graphcomment.com/js/integration.js";

const getGraphcommentSrc = (id?: string) =>
  `${GRAPHCOMMENT_BASE_URL}?${id ?? Math.round(Math.random() * 1e8)}`;

interface Props {
  scriptId?: string;
}

export function Comments({ scriptId }: Props) {
  return (
    <div className="flex justify-center items-center">
      <GraphcommentScript scriptId={scriptId} />
      <div id="graphcomment" className="w-full min-h-400" />
    </div>
  );
}

function GraphcommentScript({ scriptId }: Props) {
  const src = React.useMemo(() => getGraphcommentSrc(scriptId), [scriptId]);

  React.useEffect(() => {
    window.gc_params = {
      graphcomment_id: GRAPHCOMMENT_ID,
      fixed_header_height: 0,
    };
  }, []);

  return (
    <Head>
      <script key="graphcomment" type="text/javascript" async src={src} />
    </Head>
  );
}
