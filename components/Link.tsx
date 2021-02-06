import NextLink from "next/link";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const Link = ({ href, children, ...props }: Props) => (
  <NextLink href={href}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a {...props}>{children}</a>
  </NextLink>
);
