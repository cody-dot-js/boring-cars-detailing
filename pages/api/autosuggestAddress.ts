import type { NextApiRequest, NextApiResponse } from "next";
import { serverSideAutosuggestParams, autosuggestUrl } from "apis/here";
import { WretcherError } from "wretch";
import wretch from "utils/nodeWretch";

const autosuggestApi = wretch.url(autosuggestUrl);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = serverSideAutosuggestParams(process.env, req.body);

  try {
    const response = await autosuggestApi.query(query).get().res();
    const json = await response.json();

    return res.status(response.status).json(json);
  } catch (e) {
    const { text, status }: WretcherError = e;
    const { error = "" }: { error: string } = JSON.parse(text || "");

    return res.status(status).json({ status, message: error });
  }
}

export default handler;
