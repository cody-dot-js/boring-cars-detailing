import wretch from "wretch";
import { useQuery } from "react-query";
import { MINUTE } from "utils/time";

export const baseUrl = "https://discover.search.hereapi.com/v1";

export const autosuggestUrl =
  "https://autosuggest.search.hereapi.com/v1/autosuggest";

export interface AutosuggestParams {
  q: string;
  at?: string;
  limit?: number;
  lang?: string;
  apiKey?: string;
  in?: string;
}

export interface HereEnv {
  HERE_API_KEY: string;
  HERE_API_ACCESS_KEY_ID: string;
  HERE_API_ACCESS_SECRET: string;
  HERE_API_SEARCH_CTX: string;
}

export const serverSideAutosuggestParams = (
  env: any,
  { q, limit }: AutosuggestParams
) => {
  const { HERE_API_SEARCH_CTX, HERE_API_KEY }: HereEnv = env;

  return autosuggestParams({
    q,
    limit,
    lang: "en-US",
    in: `circle:${HERE_API_SEARCH_CTX};r=161000`,
    apiKey: HERE_API_KEY,
  });
};

const autosuggestParams = (params: AutosuggestParams) => ({
  ...params,
  q: params.q || "",
  limit: params.limit || 5,
});

export const autosuggestAddressApi = wretch().url("/api/autosuggestAddress");

export const autosuggestAddress = (
  searchValue: string = "",
  limit = 5
) => async () => {
  const values = autosuggestParams({ q: searchValue, limit });
  const response = await autosuggestAddressApi.post(values).res();
  const json: AutosuggestResponse = await response.json();

  return json.items.filter((i) => Boolean(i.address));
};

export function useAutosuggestAddress(searchValue: string = "", limit = 5) {
  return useQuery(searchValue, autosuggestAddress(searchValue, limit), {
    cacheTime: 10 * MINUTE,
    staleTime: 10 * MINUTE,
    keepPreviousData: true,
    enabled: Boolean(searchValue),
  });
}

interface AutosuggestResponseListItem {
  title: string;
  id: string;
  resultType:
    | "place"
    | "locality"
    | "street"
    | "houseNumber"
    | "administrativeArea"
    | "addressBlock"
    | "intersection"
    | "postalCodePoint"
    | "chainQuery"
    | "categoryQuery";
  address: {
    label: string;
  };
  position: {
    lat: number;
    lng: number;
  };
  access: { lat: number; lng: number }[];
  distance: number;
  categories: { id: string; name: string; primary: boolean }[];
  chains: { id: string }[];
  references: { supplier: { id: string }; id: string }[];
  foodTypes: { id: string; name: string; primary: boolean }[];
  highlights: {
    title: { start: number; end: number }[];
    address: { label: { start: number; end: number }[] };
  };
}

interface AutosuggestResponse {
  items: AutosuggestResponseListItem[];
  queryTerms: unknown[];
}
