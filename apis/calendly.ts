import { AddonService, WashPricingTier } from "./pricing";
import { FormValues } from "./schedule";

const washTierToRadioValue: Record<WashPricingTier, string> = {
  Compact: "1",
  SuvAndCrossover: "2",
  Oversized: "3",
};

function getAddonCalendlyValue(addon: AddonService) {
  switch (addon) {
    case AddonService.petHairRemoval:
      return "1";
    case AddonService.clayBarTreatment:
      return "2";
    case AddonService.engineBayDetailing:
      return "3";
    case AddonService.ozoneTreatment:
      return "4";
    case AddonService.headlightRestoration:
      return "5";
    case AddonService.odorRemoval:
      return "6";
    case AddonService.headlinerCleaning:
      return "7";
    case AddonService.washAndWax:
      return "8";
    case AddonService.interiorSanitization:
      return "9";
    case AddonService.oneStepPolish:
      return "10";
    default:
      throw new Error(`Invalid service addon ${addon}`);
  }
}

function transformAddons(addons: AddonService[]): string {
  return Array.from(new Set(addons)).map(getAddonCalendlyValue).join(",");
}

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

// For schema, see: https://calendly.com/event_types/50438080/edit > Invitee Questions
export function makeAppointmentPrefill({
  name,
  emailAddress,
  ...customAnswers
}: FormValues): CalendlyPrefill {
  return {
    name,
    email: emailAddress,
    customAnswers: {
      // Phone Number
      a1: `+1${customAnswers.phoneNumber}`,
      // Street Address
      a2: customAnswers.streetAddress,
      // City
      a3: customAnswers.city,
      // Zip
      a4: customAnswers.zip,
      // Wash Package
      a5: washTierToRadioValue[customAnswers.washTier],
      // Add Detailing?
      a6: customAnswers.addDetailing ? "1" : "2",
      // Addons
      a7: transformAddons(customAnswers.addons),
      // Please share anything that will help us prepare for your appointment.
      a8: customAnswers.additionalInfo ?? "",
    },
  };
}
