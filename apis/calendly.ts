import { PricingTier } from "./pricing";
import { FormValues } from "./schedule";

const tierToRadioValue: Record<PricingTier, string> = {
  Regular: "1",
  Plus: "2",
  Premium: "3",
};

export type CalendlyUTM = {
  utmCampaign?: string;
  utmSource?: string;
  utmMedium?: string;
  utmContent?: string;
  utmTerm?: string;
};

export type CalendlyPrefill = {
  name?: string;
  email?: string;
  customAnswers?: {
    a1?: string;
    a2?: string;
    a3?: string;
    a4?: string;
    a5?: string;
    a6?: string;
    a7?: string;
    a8?: string;
    a9?: string;
    a10?: string;
  };
};

export type CalendlyScheduledEvent = {
  event: {
    uri: string;
  };
  invitee: {
    uri: string;
  };
};

export type CalendlyEvent =
  | "calendly.profile_page_viewed"
  | "calendly.event_type_viewed"
  | "calendly.date_and_time_selected"
  | "calendly.event_scheduled";

export function isCalendlyEvent(e: MessageEvent) {
  return e.data.event && e.data.event.indexOf("calendly") === 0;
}

export type CalendlyInitInlineWidgetOptions = {
  url: string;
  parentElement?: HTMLElement;
  prefill?: CalendlyPrefill;
  utm?: CalendlyUTM;
};

export type CalendlyInitPopupWidgetOptions = {
  url: string;
};

export type CalendlyJs = {
  initPopupWidget: (options: CalendlyInitPopupWidgetOptions) => void;
  initInlineWidget: (options: CalendlyInitInlineWidgetOptions) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyJs;
  }
}

export function makeAppointmentPrefill({
  name,
  emailAddress,
  ...customAnswers
}: FormValues): CalendlyPrefill {
  return {
    name,
    email: emailAddress,
    customAnswers: {
      a1: `+1${customAnswers.phoneNumber}`,
      a2: customAnswers.streetAddress,
      a3: customAnswers.city,
      a4: customAnswers.zipPostal,
      a5: tierToRadioValue[customAnswers.tier],
      a6: customAnswers.addons ?? "",
      a7: customAnswers.additionalInfo ?? "",
    },
  };
}
