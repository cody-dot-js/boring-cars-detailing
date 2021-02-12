import NextLink, { LinkProps } from "next/link";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  nextProps?: Omit<LinkProps, "href">;
}

export const Link = ({ href, children, nextProps, ...props }: Props) => (
  <NextLink {...nextProps} href={href}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a {...props}>{children}</a>
  </NextLink>
);
