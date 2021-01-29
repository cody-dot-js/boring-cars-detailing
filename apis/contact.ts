import * as yup from "yup";
import wretch from "wretch";
import "yup-phone";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phoneNumber?: string;
  body: string;
  discovery?: string;
}

export const validationSchema = yup.object({
  firstName: yup.string().required("Your first name is a required field."),
  lastName: yup.string().required("Your last name is a required field."),
  email: yup
    .string()
    .email("Your email must be a valid email.")
    .required("Your email is a required field."),
  company: yup.string(),
  phoneNumber: yup.string().phone(),
  body: yup
    .string()
    .max(500, "Please limit your inquiry to no more than 500 characters.")
    .required("The inquiry text is a required field."),
  discovery: yup.string(),
});

export function useValidationSchema() {
  return validationSchema;
}

export const contactApi = wretch().url("/api/contact");

export async function contact(values: FormValues) {
  return contactApi.post(values).res();
}
