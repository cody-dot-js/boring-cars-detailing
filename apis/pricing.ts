import * as yup from "yup";

export type WashPricingTier = "Regular" | "Plus" | "Premium";

export const washTierName: Record<WashPricingTier, WashPricingTier> = {
  Regular: "Regular",
  Plus: "Plus",
  Premium: "Premium",
};

export const washTierCategory: Record<WashPricingTier, string> = {
  Regular: "Compact Vehicles",
  Plus: "SUV and Crossovers",
  Premium: "Oversized Vehicles",
};

export const washTierNames: WashPricingTier[] = ["Regular", "Plus", "Premium"];

export const washTierPrice: Record<WashPricingTier, number> = {
  Regular: 80,
  Plus: 100,
  Premium: 150,
};

export const detailingBasePrice = 150;

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
  fabricProtection = "Fabric Protection",
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
  [AddonService.clayBarTreatment]: 55,
  [AddonService.fabricProtection]: 100,
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
  [AddonService.fabricProtection]: false,
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
  washTier: "Plus",
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
  addons: yup.array().compact(),
};

export const validationSchema = yup.object(validationSchemaShape);

export function useValidationSchema() {
  return validationSchema;
}
