import * as yup from "yup";
import "yup-phone";
import {
  FormValues as PricingFormValues,
  PricingTier,
  tierNames,
} from "./pricing";

export interface FormValues extends PricingFormValues {
  name: string;
  emailAddress: string;

  phoneNumber: string;
  streetAddress: string;
  city: string;
  zipPostal: string;
  addons?: string;
  additionalInfo?: string;
}

const initialValues: FormValues = {
  name: "",
  emailAddress: "",
  phoneNumber: "",
  streetAddress: "",
  city: "",
  zipPostal: "",
  tier: "Plus",
  addons: undefined,
  additionalInfo: undefined,
};

export const getInitialValues = (tier: PricingTier = "Plus"): FormValues => ({
  ...initialValues,
  tier,
});

// export const makeValidationSchema

export const validationSchema = yup.object({
  name: yup.string().required("Your name is required."),
  emailAddress: yup
    .string()
    .email("Your email must be a valid email.")
    .required("Your email is required."),
  phoneNumber: yup
    .string()
    .phone("", false, "Your phone number must be a valid phone number.")
    .required("Your phone number is required."),
  streetAddress: yup.string().required("Your street address is required."),
  city: yup.string().required("Your city is required."),
  zipPostal: yup.string().required("Your ZIP / Postal code is required."),
  tier: yup
    .string()
    .oneOf(tierNames)
    .required("An appointment package tier is required."),
  addons: yup.string(),
  additionalInfo: yup.string(),
});

export function useValidationSchema() {
  return validationSchema;
}
