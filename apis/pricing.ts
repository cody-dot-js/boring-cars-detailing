import * as yup from "yup";

export type PricingTier = "Regular" | "Plus" | "Premium";

export const tierName: Record<PricingTier, PricingTier> = {
  Regular: "Regular",
  Plus: "Plus",
  Premium: "Premium",
};

export const tierCategory: Record<PricingTier, string> = {
  Regular: "Compact Vehicles",
  Plus: "SUV and Crossovers",
  Premium: "Oversized Vehicles",
};

export const tierNames: PricingTier[] = ["Regular", "Plus", "Premium"];

export const tierPrice: Record<PricingTier, number> = {
  Regular: 80,
  Plus: 100,
  Premium: 150,
};

export interface FormValues {
  tier: PricingTier;
}

export const initialValues: FormValues = {
  tier: "Plus",
};

export const validationSchema = yup.object({
  tier: yup.string().oneOf(tierNames),
});

export function useValidationSchema() {
  return validationSchema;
}
