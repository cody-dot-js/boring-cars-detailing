import * as React from "react";
import cx from "classnames";
import { GitHubIcon } from "../icons/GithubIcon";
import { ExternalLink } from "../ExternalLink";
import { TwitterIcon } from "../icons/TwitterIcon";
import { Link } from "../Link";
import { BugIcon } from "../icons/BugIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import styles from "./styles.module.css";
import { emails, routes, urls } from "config";
import { Heart20 } from "components/icons/HeartIcon";
import { copyrightDate } from "utils/copyrightDate";
import { SubscribeForm } from "components/CTALaunch";

interface Props {
  children?: React.ReactNode;
  className?: string;
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

export function Footer({ className }: Props) {
  const [didSubscribe, setDidSubscribe] = React.useState<boolean>(false);

  return (
    <footer
      className={cx(
        "relative mt-24 bg-gray-900 sm:mt-12 overflow-hidden",
        styles.footer,
        className
      )}
      aria-labelledby="footerHeading"
    >
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <nav
            className="grid grid-cols-2 gap-8 xl:col-span-2"
            aria-label="Footer navigation"
          >
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <ComingSoonLink
                      tooltip="Services coming soon!"
                      href={routes.services}
                    >
                      Services
                    </ComingSoonLink>
                  </li>
                  <li>
                    <ComingSoonLink
                      tooltip="Scheduling coming soon!"
                      href={routes.schedule}
                    >
                      Schedule
                    </ComingSoonLink>
                  </li>
                  <li>
                    <ComingSoonLink
                      tooltip="Pricing coming soon!"
                      href={routes.pricing}
                    >
                      Pricing
                    </ComingSoonLink>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <ComingSoonLink
                      tooltip="Gallery coming soon!"
                      href={routes.gallery}
                    >
                      Gallery
                    </ComingSoonLink>
                  </li>
                  <li>
                    <Link
                      href={routes.about}
                      className="text-base text-gray-400 hover:text-gray-300"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={routes.contact}
                      className="text-base text-gray-400 hover:text-gray-300"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href={routes.privacyPolicy}
                      className="text-base text-gray-400 hover:text-gray-300"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={routes.termsOfService}
                      className="text-base text-gray-400 hover:text-gray-300"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {didSubscribe ? (
            <div className="relative">
              <h2 className="mt-4 xl:mt-0 text-lg font-extrabold text-white tracking-tight">
                Thanks for subscribing!
              </h2>
              <p className="mt-4 max-w-lg text-xs sm:text-lg text-white">
                Please check your email for a subscription confirmation from{" "}
                <code className="text-gray-200 font-bold">
                  {emails.support}
                </code>
              </p>
              <p className="text-6xl xl:text-right mt-6 xl:mr-4">🥳</p>
            </div>
          ) : (
            <div className="mt-8 xl:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Subscribe to our newsletter
              </h3>
              <p className="mt-4 text-base text-gray-300">
                The latest news, updates, and notifications sent to your inbox.
              </p>
              <SubscribeForm
                className="mt-4 sm:max-w-md"
                onSubscribeSuccess={() => {
                  setDidSubscribe(true);
                }}
                onSubscribeError={() => {
                  setDidSubscribe(false);
                  // TODO(cody): error handling/notifications
                }}
              />
            </div>
          )}
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <ExternalLink
              href={urls.facebook}
              aria-label="Facebook"
              data-microtip-position="top-left"
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
              data-microtip-position="top-left"
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
              data-microtip-position="top-left"
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
              data-microtip-position="top-left"
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
              data-microtip-position="top-left"
              data-microtip-size="fit"
              role="tooltip"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">Bug Report</span>
              <BugIcon />
            </ExternalLink>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {copyrightDate()}{" "}
            <span className="font-bold">
              Boring&nbsp;Cars&nbsp;Detailing &&nbsp;Wash&nbsp;Services&nbsp;LLC
            </span>
            . All rights reserved.
          </p>
        </div>
        <p className="mt-8 text-center text-base text-gray-400 opacity-80">
          Made with <Heart20 className="inline-block h-4 w-4 -mt-1" /> by{" "}
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
