import * as yup from "yup";
import wretch from "wretch";

export interface FormValues {
  name: string;
  email: string;
}

export const validationSchema = yup.object({
  email: yup
    .string()
    .email("Your email must be a valid email.")
    .required("Your email is a required field."),
  name: yup.string().required("Your name is a required field."),
});

export const convertKitApiBaseUrl = "https://api.convertkit.com/v3";

export const subscribeApi = wretch().url("/api/subscribe");

export async function subscribe(values: FormValues) {
  return subscribeApi.post(values).res();
}

export function pathForSubscribeToForm(formId: string): string {
  return `/forms/${formId}/subscribe`;
}
