import { createEnv, Env } from "hooks/useEnv";
import { copyrightDate } from "./copyrightDate";

export interface PageMeta {
  copyrightDate: string;
  env: Env;
}

export function pageMeta(): PageMeta {
  return {
    copyrightDate: copyrightDate(),
    env: createEnv(),
  };
}
