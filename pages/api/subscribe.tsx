import type { NextApiRequest, NextApiResponse } from "next";
import {
  FormValues,
  convertKitApiBaseUrl,
  pathForSubscribeToForm,
} from "external-apis/convertKit";
import wretch, { WretcherError } from "wretch";
import fetch from "node-fetch";

const convertKitApi = wretch()
  .polyfills({
    fetch,
  })
  .url(convertKitApiBaseUrl);

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email }: FormValues = req.body;
  const api_key = process.env.CK_API_KEY;
  const formId = process.env.CK_FORM_ID;
  const path = pathForSubscribeToForm(formId);

  try {
    const response = await convertKitApi
      .url(path)
      .json({
        api_key,
        email,
        first_name: name,
      })
      .post()
      .res();

    const json = await response.json();

    return res.status(response.status).json(json);
  } catch (e) {
    const { text, status }: WretcherError = e;
    const { message = "" }: { message: string } = JSON.parse(text);

    return res.status(status).json({ status, message });
  }
}
