import wretch from "wretch";
import { QueryClient, useQuery } from "react-query";
import { queryKey } from "utils/queryKey";
import { defaultQueryOptions } from "utils/reactQueryDefaults";
import { number } from "yup/lib/locale";

export interface FormValues {
  q: string;
}

export const initialValues: FormValues = {
  q: "",
};

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

export const makeAutosuggestQuery = (env: any) => ({
  q,
  limit = 5,
}: AutosuggestParams): Required<AutosuggestParams> => ({
  q,
  limit,
  lang: "en-US",
  at: (env as HereEnv).HERE_API_SEARCH_CTX,
  apiKey: (env as HereEnv).HERE_API_KEY,
  in: "countryCode:USA",
});

export const autosuggestAddressApi = wretch().url("/api/autosuggestAddress");

export async function autosuggestAddress(values: AutosuggestParams) {
  const response = await autosuggestAddressApi.post(values).res();
  const { list = [] }: AutosuggestResponse = await response.json();
  return list;
}

export function useAutosuggestAddress(searchValue: string, limit = 5) {
  return useQuery(
    queryKey(searchValue, limit),
    () => {},
    // getImages(apiKey, searchValue, options),
    defaultQueryOptions(searchValue)
  );
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
  list: AutosuggestResponseListItem[];
  queryTerms: unknown[];
}
