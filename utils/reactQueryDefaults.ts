import { days } from "./time";

export const defaultQueryOptions = (searchValue?: string) => ({
  cacheTime: days(1),
  enabled: Boolean(searchValue),
});

export const defaultPrefetchOptions = {
  cacheTime: days(1),
};
