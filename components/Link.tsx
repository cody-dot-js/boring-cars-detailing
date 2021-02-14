import NextLink, { LinkProps } from "next/link";

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  active?: boolean;
  nextProps?: Omit<LinkProps, "href">;
}

export const Link = ({
  active,
  href,
  children,
  nextProps,
  ...props
}: Props) => (
  <NextLink {...nextProps} href={href}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    {/* @ts-expect-error */}
    <a active={active ? "true" : undefined} {...props}>
      {children}
    </a>
  </NextLink>
);
