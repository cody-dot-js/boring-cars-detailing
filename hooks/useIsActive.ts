import { useRouter } from "next/router";

function startsWith(string: string, search: string) {
  return string.substr(0, search.length) === search;
}

const pathname = (path: string) => {
  return {
    startsWith: (search: string) => startsWith(path, search),
  };
};

/**
 * @returns [isActive: boolean, isPartiallyActive: boolean]
 */
export function useIsActive(href: string) {
  const router = useRouter();
  const isActive = href === router.pathname;
  const isPartiallyActive = pathname(router.pathname).startsWith(href);

  return [isActive, isPartiallyActive] as const;
}
