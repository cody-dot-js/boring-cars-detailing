import * as React from "react";
import Head from "next/head";
import * as hash from "crypto-hash";

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

const getGraphcommentSrc = (id: string) => `${GRAPHCOMMENT_BASE_URL}?${id}`;

export interface Props {
  scriptId?: string;
}

export function Comments({ scriptId }: Props) {
  return (
    <>
      <GraphcommentScript scriptId={scriptId} />
      <div id="graphcomment" className="w-full" />
    </>
  );
}

export default Comments;

function GraphcommentScript({ scriptId }: Props) {
  const [src, setSrc] = React.useState<string | undefined>();

  React.useEffect(() => {
    async function computeSrc() {
      const sha256 = await hash.sha256(
        scriptId ?? `${Math.round(Math.random() * 1e8)}`
      );
      const newGcid = sha256.replace(/\D/g, "");
      const newSrc = getGraphcommentSrc(newGcid);
      setSrc(newSrc);
    }

    computeSrc();

    window.gc_params = {
      graphcomment_id: GRAPHCOMMENT_ID,
      fixed_header_height: 0,
    };
  }, [scriptId]);

  return (
    <Head>
      {src && (
        <script key="graphcomment" type="text/javascript" async src={src} />
      )}
    </Head>
  );
}
