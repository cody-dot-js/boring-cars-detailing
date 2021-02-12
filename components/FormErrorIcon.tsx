import { ErrorMessage } from "formik";
import { ExclamationCircle20 } from "./icons/ExclamationCircleIcon";

interface Props {
  className?: string;
  name: string;
}

export function FormErrorIcon({ className, name }: Props) {
  return (
    <ErrorMessage name={name}>
      {() => (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircle20 className="h-5 w-5 text-red-300" />
        </div>
      )}
    </ErrorMessage>
  );
}
