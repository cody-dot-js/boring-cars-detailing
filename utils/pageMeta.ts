import { copyrightDate } from "./copyrightDate";

export interface PageMeta {
  copyrightDate: string;
}

export function pageMeta(): PageMeta {
  return {
    copyrightDate: copyrightDate(),
  };
}
