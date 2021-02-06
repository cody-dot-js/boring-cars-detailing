import { useRouter } from "next/router";

export function useIsActive(href: string): boolean {
  const { pathname } = useRouter();
  return href === pathname;
}
