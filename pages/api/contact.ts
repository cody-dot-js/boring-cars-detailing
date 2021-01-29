import type { NextApiRequest, NextApiResponse } from "next";
import { FormValues } from "apis/contact";
// import { WretcherError } from "wretch";
// import wretch from "utils/nodeWretch";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    firstName,
    lastName,
    email,
    company,
    phoneNumber,
    body,
    discovery,
  }: FormValues = req.body;
  // const api_key = process.env.CK_API_KEY;
  // const formId = process.env.CK_FORM_ID;

  console.log("contact handler", {
    firstName,
    lastName,
    email,
    company,
    phoneNumber,
    body,
    discovery,
  });

  // try {
  //   const response = await convertKitApi
  //     .url(path)
  //     .json({
  //       api_key,
  //       email,
  //       first_name: name,
  //     })
  //     .post()
  //     .res();

  //   const json = await response.json();

  //   return res.status(response.status).json(json);
  // } catch (e) {
  //   const { text, status }: WretcherError = e;
  //   const { message = "" }: { message: string } = JSON.parse(text);

  //   return res.status(status).json({ status, message });
  // }
}

export default handler;
