import * as React from "react";
import cx from "classnames";
import { GitHubIcon } from "../icons/GithubIcon";
import { ExternalLink } from "../ExternalLink";
import { TwitterIcon } from "../icons/TwitterIcon";
import Link from "next/link";
import { BugIcon } from "../icons/BugIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import styles from "./styles.module.css";
import { urls } from "config";

interface Props {
  children?: React.ReactNode;
  className?: string;
  copyrightDate: string;
}

interface ComingSoonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  tooltip: string;
}

function ComingSoonLink({
  children,
  className,
  tooltip,
  ...rest
}: ComingSoonProps) {
  return (
    <a
      {...rest}
      className={cx("text-gray-300 cursor-not-allowed", className)}
      aria-label={tooltip}
      data-microtip-position="top"
      data-microtip-size="fit"
      role="tooltip"
      onClick={(e) => e.preventDefault()}
    >
      <span className="opacity-80">{children}</span>
    </a>
  );
}

export function Footer({ copyrightDate }: Props) {
  return (
    <footer
      className={cx(
        "relative mt-24 bg-gray-900 sm:mt-12 overflow-hidden",
        styles.footer
      )}
    >
      <div className="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <ul className="flex flex-wrap justify-center">
            <li className="px-5 py-2">
              <ComingSoonLink tooltip="Pricing coming soon!" href="/pricing">
                Pricing
              </ComingSoonLink>
            </li>
            <li className="px-5 py-2">
              <ComingSoonLink tooltip="Gallery coming soon!" href="/gallery">
                Gallery
              </ComingSoonLink>
            </li>
            <li className="px-5 py-2">
              <Link href="/about">
                <a
                  href="/about"
                  className="text-base text-gray-400 hover:text-gray-300"
                >
                  About
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <ExternalLink
            href={urls.facebook}
            aria-label="Facebook"
            data-microtip-position="top"
            data-microtip-size="fit"
            role="tooltip"
            className="text-gray-400 hover:text-gray-300"
          >
            <span className="sr-only">Facebook</span>
            <FacebookIcon />
          </ExternalLink>

          <ExternalLink
            href={urls.instagram}
            aria-label="Instagram"
            data-microtip-position="top"
            data-microtip-size="fit"
            role="tooltip"
            className="text-gray-400 hover:text-gray-300"
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon />
          </ExternalLink>

          <ExternalLink
            href={urls.twitter}
            aria-label="Twitter"
            data-microtip-position="top"
            data-microtip-size="fit"
            role="tooltip"
            className="text-gray-400 hover:text-gray-300"
          >
            <span className="sr-only">Twitter</span>
            <TwitterIcon />
          </ExternalLink>

          <ExternalLink
            href={urls.github}
            aria-label="View Source Code"
            data-microtip-position="top"
            data-microtip-size="fit"
            role="tooltip"
            className="text-gray-400 hover:text-gray-300 text-2xl leading-none"
          >
            <span className="sr-only">GitHub</span>
            <GitHubIcon />
          </ExternalLink>

          <ExternalLink
            href={urls.bugReport}
            aria-label="Report a Bug"
            data-microtip-position="top"
            data-microtip-size="fit"
            role="tooltip"
            className="text-gray-400 hover:text-gray-300"
          >
            <span className="sr-only">Bug Report</span>
            <BugIcon />
          </ExternalLink>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {copyrightDate}{" "}
          <span className="font-bold">
            Boring&nbsp;Cars&nbsp;Detailing &&nbsp;Wash&nbsp;Services&nbsp;LLC
          </span>
          . All rights reserved.
        </p>

        <p className="mt-8 text-center text-base text-gray-400 opacity-80">
          Made with{" "}
          <svg
            className="inline-block h-4 w-4 -mt-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>{" "}
          by{" "}
          <ExternalLink className="font-bold" href="https://codyaprice.com">
            Cody A. Price
          </ExternalLink>
          .
        </p>
      </div>
      <div className={styles.retroLines} />
    </footer>
  );
}
