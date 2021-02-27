import * as yup from "yup";

export type WashPricingTier = "Compact" | "SuvAndCrossover" | "Oversized";

export const washTierName: Record<WashPricingTier, WashPricingTier> = {
  Compact: "Compact",
  SuvAndCrossover: "SuvAndCrossover",
  Oversized: "Oversized",
};

export const washTierCategory: Record<WashPricingTier, string> = {
  Compact: "Compact Vehicles",
  SuvAndCrossover: "SUV and Crossovers",
  Oversized: "Oversized Vehicles",
};

export const washTierNames: WashPricingTier[] = [
  "Compact",
  "SuvAndCrossover",
  "Oversized",
];

export const washTierPrice: Record<WashPricingTier, number> = {
  Compact: 70,
  SuvAndCrossover: 100,
  Oversized: 150,
};

export const detailingBasePrice = 200;

export function accumulatePrice(values: FormValues): number {
  const { washTier, addons, addDetailing } = values;
  const addonsCost = Array.from(new Set(addons)).reduce(
    (acc, addon) => acc + addonServicePrices[addon],
    0
  );
  const detailingCost = addDetailing ? detailingBasePrice : 0;

  const totalCost = washTierPrice[washTier] + addonsCost + detailingCost;

  return Math.max(0, totalCost);
}

export enum AddonService {
  petHairRemoval = "Pet Hair Removal",
  clayBarTreatment = "Clay Bar Treatment",
  engineBayDetailing = "Engine Bay Detailing",
  ozoneTreatment = "Ozone Treatment",
  headlightRestoration = "Headlight Restoration",
  odorRemoval = "Odor Removal",
  headlinerCleaning = "Headliner Cleaning",
  washAndWax = "Wash and Wax",
  interiorSanitization = "Interior Sanitization",
  oneStepPolish = "One Step Polish",
}

export const addonServicePrices: Record<AddonService, number> = {
  [AddonService.petHairRemoval]: 50,
  [AddonService.clayBarTreatment]: 100,
  [AddonService.engineBayDetailing]: 55,
  [AddonService.ozoneTreatment]: 100,
  [AddonService.headlightRestoration]: 125,
  [AddonService.odorRemoval]: 125,
  [AddonService.headlinerCleaning]: 150,
  [AddonService.washAndWax]: 155,
  [AddonService.interiorSanitization]: 50,
  [AddonService.oneStepPolish]: 349,
};

export type AddonServicesSelected = Record<AddonService, boolean>;

export const initialAddonServices: AddonServicesSelected = {
  [AddonService.petHairRemoval]: false,
  [AddonService.clayBarTreatment]: false,
  [AddonService.engineBayDetailing]: false,
  [AddonService.ozoneTreatment]: false,
  [AddonService.headlightRestoration]: false,
  [AddonService.odorRemoval]: false,
  [AddonService.headlinerCleaning]: false,
  [AddonService.washAndWax]: false,
  [AddonService.interiorSanitization]: false,
  [AddonService.oneStepPolish]: false,
};

export interface FormValues {
  washTier: WashPricingTier;
  addDetailing: boolean;
  addons: AddonService[];
}

export const initialValues: FormValues = {
  washTier: "SuvAndCrossover",
  addDetailing: false,
  addons: [],
};

export const washTierSchema = yup
  .mixed<WashPricingTier>()
  .oneOf(washTierNames)
  .required("An appointment wash package is required.");

export const validationSchemaShape = {
  washTier: washTierSchema,
  addDetailing: yup.boolean(),
  addons: yup.array(yup.string()).compact(),
};

export const validationSchema = yup.object(validationSchemaShape);

export function useValidationSchema() {
  return validationSchema;
}
