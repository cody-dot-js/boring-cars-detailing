import type { NextApiRequest, NextApiResponse } from "next";
import { FormValues } from "apis/contact";
import { sendEmail } from "utils/sendEmail";
import { contactEmailHtml, contactEmailText } from "templates/contact-email";
import { shortName } from "config";

const { CONTACT_EMAIL_FROM, CONTACT_EMAIL_TO } = process.env;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const content: FormValues = req.body;
  const { emailAddress, name } = content;

  try {
    const html = contactEmailHtml(content);
    const text = contactEmailText(content);

    const response = await sendEmail({
      to: CONTACT_EMAIL_TO,
      from: CONTACT_EMAIL_FROM,
      replyTo: `${name} <${emailAddress}>`,
      subject: `Contact Request | ${shortName}`,
      text,
      html,
    });
    return res.status(response.statusCode).json(response);
  } catch (e) {
    return res
      .status(e.statusCode || 500)
      .json({ message: JSON.stringify(e, undefined, 2) });
  }
}

export default handler;
