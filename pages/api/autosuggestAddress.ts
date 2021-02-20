import type { NextApiRequest, NextApiResponse } from "next";
import { makeAutosuggestQuery, autosuggestUrl } from "apis/here";
import { WretcherError } from "wretch";
import wretch from "utils/nodeWretch";

const autosuggestApi = wretch.url(autosuggestUrl);
const autosuggestQuery = makeAutosuggestQuery(process.env);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = autosuggestQuery(req.body);

  try {
    // const response = await autosuggestApi.query(query).get().res();
    const response = await autosuggestApi.query({ ...query, apiKey: "" }).get().res();
    const json = await response.json();

    return res.status(response.status).json(json);
  } catch (e) {
    const { text, status }: WretcherError = e;
    const { error = "" }: { error: string } = JSON.parse(text);

    return res.status(status).json({ status, message: error });
  }
}

export default handler;
