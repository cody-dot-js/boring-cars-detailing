import * as yup from "yup";
import wretch from "wretch";
import "yup-phone";

export interface FormValues {
  body: string;
  company?: string;
  discovery?: string;
  emailAddress: string;
  name: string;
  phoneNumber?: string;
}

export const initialValues: FormValues = {
  body: "",
  company: undefined,
  discovery: undefined,
  emailAddress: "",
  name: "",
  phoneNumber: "",
};

export const validationSchema = yup.object({
  name: yup.string().required("Your name is a required field."),
  emailAddress: yup
    .string()
    .email("Your email must be a valid email.")
    .required("Your email is a required field."),
  company: yup.string(),
  phoneNumber: yup
    .string()
    .phone("", false, "Your phone number must be a valid phone number.")
    .required("Your phone number is required."),
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
