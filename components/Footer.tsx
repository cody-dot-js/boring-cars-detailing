import * as React from "react";
import classnames from "classnames";
import { GithubIcon } from "./icons/GithubIcon";
import { ExternalLink } from "./ExternalLink";
import { TwitterIcon } from "./icons/TwitterIcon";
import { HeartIcon } from "./icons/HeartIcon";
import { CodeIcon } from "./icons/CodeIcon";

interface Props {
  children?: React.ReactNode;
  className?: string;
  copyrightDate: string;
}

export const Footer = ({ children, className, copyrightDate }: Props) => (
  <footer
    className={classnames(
      "bg-gray-300 shadow z-20 text-gray-600 mt-6 p-4 pt-20",
      className
    )}
  >
    <p className="text-center">
      © {copyrightDate}, Built with <HeartIcon className=" text-red-600" /> by
      <ExternalLink href="https://codyaprice.com">
        Cody A. Price
      </ExternalLink>{" "}
      using{" "}
      <ExternalLink href="https://nextjs.org/">Vercel Next.js</ExternalLink>
    </p>
    <ul className="flex items-center justify-center my-4 space-x-4 text-3xl">
      <li>
        <ExternalLink
          aria-label="Twitter"
          data-microtip-position="top"
          data-microtip-size="fit"
          role="tooltip"
          href="https://twitter.com/devcprice"
        >
          <TwitterIcon />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          aria-label="GitHub"
          data-microtip-position="top"
          data-microtip-size="fit"
          role="tooltip"
          href="https://github.com/dev-cprice"
        >
          <GithubIcon />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          aria-label="Source Code"
          data-microtip-position="top"
          data-microtip-size="fit"
          role="tooltip"
          href="https://github.com/dev-cprice/template-nextjs-typescript-tailwind"
        >
          <CodeIcon />
        </ExternalLink>
      </li>
    </ul>
    {children}
  </footer>
);
