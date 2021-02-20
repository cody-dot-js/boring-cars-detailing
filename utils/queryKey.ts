import { QueryKey } from "react-query";

export const queryKey = (searchValue?: string, limit?: number): QueryKey => [
  searchValue ?? undefined,
  limit ?? 5,
];
