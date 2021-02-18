import { FormValues } from "apis/contact";
import { shortName } from "config";

const generateTemplate = ({
  name,
  emailAddress,
  body,
  phoneNumber,
  company,
  discovery,
}: FormValues) => `<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
  <!--[if mso]>
    <xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
    <style>
      td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
    </style>
  <![endif]-->
    <title>${shortName} Request Form</title>
    <style>
@media (max-width: 600px) {
  .sm-divide-y > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-y-reverse: 0 !important;
    border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse))) !important;
    border-bottom-width: calc(1px * var(--tw-divide-y-reverse)) !important;
  }
  .sm-divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
    border-color: #e5e7eb !important;
  }
  .sm-rounded-lg {
    border-radius: 8px !important;
  }
  .sm-grid {
    display: grid !important;
  }
  .sm-mt-0 {
    margin-top: 0 !important;
  }
  .sm-p-0 {
    padding: 0 !important;
  }
  .sm-py-5 {
    padding-top: 5px !important;
    padding-bottom: 5px !important;
  }
  .sm-px-6 {
    padding-left: 6px !important;
    padding-right: 6px !important;
  }
  .sm-gap-4 {
    gap: 4px !important;
  }
  .sm-grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  }
  .sm-col-span-2 {
    grid-column: span 2 / span 2 !important;
  }
}
</style>
</head>
<body style="margin: 0; padding: 0; width: 100%; word-break: break-word; -webkit-font-smoothing: antialiased; background-color: #f3f4f6;">
    <div style="display: none;">👀 ${shortName} Request&#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &zwnj;
      &#160;&#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &zwnj;
      &#160;&#847; &#847; &#847; &#847; &#847; </div>
  <div role="article" aria-roledescription="email" aria-label="${shortName} Request Form" lang="en">
    <article>
      <h1 style="font-size: 18px; text-align: center; color: #374151; text-transform: uppercase;">
        ${shortName} Request Form
      </h1>
      <div class="sm-rounded-lg" style="background-color: #ffffff; overflow: hidden; box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);">
        <div class="sm-px-6" style="padding-left: 4px; padding-right: 4px; padding-top: 5px; padding-bottom: 5px;">
          <h3 style="font-weight: 500; font-size: 18px; line-height: 6px; color: #111827;">
            ${shortName} Request
          </h3>
          <p style="font-size: 14px; margin-top: 0.25rem; max-width: 42rem; color: #6b7280;">
            Personal details and inquiry
          </p>
        </div>
        <div class="sm-p-0" style="border-color: #e5e7eb; border-top-width: 1px; padding-left: 4px; padding-right: 4px; padding-top: 5px; padding-bottom: 5px;">
          <dl class="sm-divide-y sm-divide-gray-200">
            <div class="sm-py-5 sm-grid sm-grid-cols-3 sm-gap-4 sm-px-6" style="padding-top: 4px; padding-bottom: 4px;">
              <dt style="font-weight: 500; font-size: 14px; color: #6b7280;">Full name</dt>
              <dd class="sm-mt-0 sm-col-span-2" style="font-size: 14px; margin-top: 0.25rem; color: #111827;">
                ${name}
              </dd>
            </div>
            <div class="sm-py-5 sm-grid sm-grid-cols-3 sm-gap-4 sm-px-6" style="padding-top: 4px; padding-bottom: 4px;">
              <dt style="font-weight: 500; font-size: 14px; color: #6b7280;">Email address</dt>
              <dd class="sm-mt-0 sm-col-span-2" style="font-size: 14px; margin-top: 0.25rem; color: #111827;">
                ${emailAddress}
              </dd>
            </div>
            <div class="sm-py-5 sm-grid sm-grid-cols-3 sm-gap-4 sm-px-6" style="padding-top: 4px; padding-bottom: 4px;">
              <dt style="font-weight: 500; font-size: 14px; color: #6b7280;">Company</dt>
              <dd class="sm-mt-0 sm-col-span-2" style="font-size: 14px; margin-top: 0.25rem; color: #111827;">
                ${company || "(not supplied)"}
              </dd>
            </div>
            <div class="sm-py-5 sm-grid sm-grid-cols-3 sm-gap-4 sm-px-6" style="padding-top: 4px; padding-bottom: 4px;">
              <dt style="font-weight: 500; font-size: 14px; color: #6b7280;">Phone Number</dt>
              <dd class="sm-mt-0 sm-col-span-2" style="font-size: 14px; margin-top: 0.25rem; color: #111827;">
                ${phoneNumber || "(not supplied)"}
              </dd>
            </div>
            <div class="sm-py-5 sm-grid sm-grid-cols-3 sm-gap-4 sm-px-6" style="padding-top: 4px; padding-bottom: 4px;">
              <dt style="font-weight: 500; font-size: 14px; color: #6b7280;">
                How did you hear about us?
              </dt>
              <dd class="sm-mt-0 sm-col-span-2" style="font-size: 14px; margin-top: 0.25rem; color: #111827;">
                ${discovery || "(not supplied)"}
              </dd>
            </div>
            <div class="sm-py-5 sm-grid sm-grid-cols-3 sm-gap-4 sm-px-6" style="padding-top: 4px; padding-bottom: 4px;">
              <dt style="font-weight: 500; font-size: 14px; color: #6b7280;">
                What can we help you with?
              </dt>
              <dd class="sm-mt-0 sm-col-span-2" style="font-size: 14px; margin-top: 0.25rem; color: #111827;">
                ${body}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  </div>
</body>
</html>`;

export function contactEmailHtml(props: FormValues) {
  return generateTemplate(props);
}

export function contactEmailText({
  name,
  emailAddress,
  body,
  phoneNumber,
  company,
  discovery,
}: FormValues) {
  return `${shortName} Request Form

Request:
${body}

---
Personal Information:
name: ${name}
email: ${emailAddress}
company: ${company || "(not supplied)"}
phoneNumber: ${phoneNumber || "(not supplied)"} 

How did you hear about us?
${discovery || "(not supplied)"}

`;
}
