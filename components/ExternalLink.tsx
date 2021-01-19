interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

export const ExternalLink = ({ children, href, ...rest }: Props) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
    {children}
  </a>
);
