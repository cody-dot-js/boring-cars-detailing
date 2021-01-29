import * as sgMail from "@sendgrid/mail";

const { SENDGRID_API_KEY } = process.env;

interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
  html?: string;
}

interface EmailConfig {
  apiKey: string;
}

const defaultConfig: EmailConfig = {
  apiKey: SENDGRID_API_KEY,
};

export async function sendEmail(
  options: EmailOptions,
  { apiKey }: EmailConfig = defaultConfig
) {
  sgMail.setApiKey(apiKey);

  const [response] = await sgMail.send(options);
  return response;
}
