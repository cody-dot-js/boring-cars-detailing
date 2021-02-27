import * as yup from "yup";
import "yup-phone";
import {
  FormValues as PricingFormValues,
  initialValues as pricingInitialValues,
  WashPricingTier,
  validationSchemaShape as pricingValidationSchemaShape,
} from "./pricing";

export interface FormValues extends PricingFormValues {
  name: string;
  emailAddress: string;

  phoneNumber: string;
  streetAddress: string;
  city: string;
  zip: string;
  additionalInfo?: string;
}

const initialValues: FormValues = {
  ...pricingInitialValues,
  name: "",
  emailAddress: "",
  phoneNumber: "",
  streetAddress: "",
  city: "",
  zip: "",
  additionalInfo: undefined,
};

export const getInitialValues = (
  washTier: WashPricingTier = "SuvAndCrossover"
): FormValues => ({
  ...initialValues,
  washTier,
});

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
  zip: yup.string().required("Your ZIP code is required."),
  additionalInfo: yup.string(),
  ...pricingValidationSchemaShape,
});

export function useValidationSchema() {
  return validationSchema;
}
