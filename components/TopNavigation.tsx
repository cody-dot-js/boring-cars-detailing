import * as React from "react";
import { Link } from "./Link";
import cx from "classnames";
import { FlyoutAction, FlyoutLink, FlyoutMenu } from "./FlyoutMenu";
import { routes, shortName, telephoneNumber } from "config";
import { telLink } from "utils/telLink";
import { Phone24 } from "./icons/PhoneIcon";
import { Chat24 } from "./icons/ChatIcon";
import { Heart24 } from "./icons/HeartIcon";
import { useIsActive } from "hooks/useIsActive";
import { X24 } from "./icons/XIcon";
import { Menu24 } from "./icons/MenuIcon";
import { Calendar20 } from "./icons/CalendarIcon";
import { useRouteChanged } from "hooks/useRouteChanged";
import { LinkButton } from "./Button";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  comingSoon?: boolean;
}

function NavLink({
  href,
  children,
  className,
  comingSoon,
  ...rest
}: NavLinkProps) {
  const [isActive] = useIsActive(href);

  if (comingSoon) {
    return (
      <a
        {...rest}
        className={cx(
          "px-3 py-2 rounded-md text-sm font-medium",
          "text-gray-300 cursor-not-allowed",
          className
        )}
        onClick={(e) => e.preventDefault()}
      >
        <span className="opacity-40">{children}</span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      active={isActive}
      className={cx(
        "text-gray-300 px-3 py-2 text-sm font-medium border-b-2 border-transparent",
        "focus:text-gray-800 focus:bg-pink-300 focus:rounded-md",
        "hover:text-gray-800 hover:bg-pink-300 hover:rounded-md",
        "active:text-gray-800 active:bg-fuchsia-300 active:border-fuchsia-300 active:rounded-md",
        isActive && "text-pink-300 border-pink-300 hover:border-0",
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  className,
  comingSoon,
  ...rest
}: NavLinkProps) {
  const [isActive] = useIsActive(href);

  if (comingSoon) {
    return (
      <a
        {...rest}
        className={cx(
          "block rounded-md px-3 py-2 text-base font-medium",
          "text-gray-100 cursor-not-allowed",
          className
        )}
        onClick={(e) => e.preventDefault()}
      >
        <span className="opacity-30">{children}</span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cx(
        "block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-300",
        isActive &&
          "text-cyan-400 bg-blueGray-700 font-medium hover:bg-blueGray-900 hover:text-white",
        !isActive && "text-gray-300  hover:bg-blueGray-900 hover:text-white",
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function TopNavigation() {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleShowMenu = () => setShowMenu((s) => !s);
  const handleRouteChange = React.useCallback(() => setShowMenu(false), []);
  useRouteChanged(handleRouteChange);

  return (
    <nav
      className={cx(
        "relative z-50 shadow",
        !showMenu && "bg-gray-800",
        showMenu && "bg-blueGray-800"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center lg:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                onClick={toggleShowMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">
                  {showMenu ? "Close" : "Open"} main menu
                </span>
                <Menu24
                  className={cx(showMenu && "hidden", !showMenu && "block")}
                />
                <X24
                  className={cx(showMenu && "block", !showMenu && "hidden")}
                />
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center">
              <Link href={routes.home}>
                <div className="cursor-pointer">
                  <img
                    className="inline-block h-16 w-auto lg:mr-4"
                    src="/assets/imgs/nav-icon-128x128.png"
                    alt={shortName}
                    width="64px"
                    height="64px"
                  />
                  <h1 className="hidden lg:inline-block text-white primary-text-glow text-xl cursor-pointer flex-initial sm:inline-block mr-4 font-bold leading-tight">
                    {shortName}
                  </h1>
                </div>
              </Link>
            </div>
            <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              {/* <a
                href="#"
                className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </a> */}
              <NavLink href={routes.pricing}>Pricing</NavLink>
              <NavLink
                comingSoon
                href={routes.gallery}
                aria-label="Gallery coming soon!"
                data-microtip-position="bottom-left"
                data-microtip-size="fit"
                role="tooltip"
              >
                Gallery
              </NavLink>
              <FlyoutMenu
                title="Company"
                items={[
                  {
                    href: routes.about,
                    children: (
                      <>
                        <Heart24 className="flex-shrink-0 text-pink-300" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-white">
                            About Us
                          </p>
                          <p className="mt-1 text-sm text-gray-300">
                            Get to know us! We're a family!
                          </p>
                        </div>
                      </>
                    ),
                  },
                  {
                    href: routes.contact,
                    children: (
                      <>
                        <Chat24 className="flex-shrink-0 text-pink-300" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-white">
                            Contact
                          </p>
                          <p className="mt-1 text-sm text-gray-300">
                            We’d love to hear from you! Send us a message, give
                            us a call, or email us.
                          </p>
                        </div>
                      </>
                    ),
                  },
                ]}
                footer={
                  <>
                    <div>
                      <h3 className="text-sm tracking-wide font-medium text-gray-300 uppercase">
                        Legal
                      </h3>
                      <ul className="mt-4 space-y-4">
                        <li className="text-base truncate">
                          <FlyoutLink href={routes.privacyPolicy}>
                            Privacy Policy
                          </FlyoutLink>
                        </li>
                        <li className="text-base truncate">
                          <FlyoutLink href={routes.termsOfService}>
                            Terms of Service
                          </FlyoutLink>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-end">
                      <FlyoutAction>
                        <a
                          href={telLink(telephoneNumber)}
                          className="flex"
                          // className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-white hover:bg-gray-900"
                        >
                          <Phone24 className="flex-shrink-0" />
                          <span className="ml-3">Call us</span>
                        </a>
                      </FlyoutAction>
                    </div>
                  </>
                }
              />
            </div>
          </div>
          <div className="flex items-center">
            <div
              className="flex-shrink-0"
              aria-label="Schedule an Appointment"
              data-microtip-position="bottom-left"
              data-microtip-size="fit"
              role="tooltip"
            >
              <LinkButton variant="primary" href={routes.schedule}>
                <Calendar20 className="-ml-1 mr-2 h-5 w-5" />
                <span>Schedule</span>
              </LinkButton>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu --> */}
      <div
        className={cx("lg:hidden", showMenu && "block", !showMenu && "hidden")}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <MobileNavLink href={routes.pricing}>Pricing</MobileNavLink>
          <MobileNavLink comingSoon href={routes.gallery}>
            Gallery
          </MobileNavLink>
          <MobileNavLink href={routes.about}>About</MobileNavLink>
          <MobileNavLink href={routes.contact}>Contact</MobileNavLink>
        </div>
        <div className="pt-4 pb-3 border-t border-blueGray-700">
          <div className="space-y-1 px-5 py-5 bg-blueGray-800 space-y-6 sm:flex sm:flex-col sm:space-y-0 sm:px-8">
            <div>
              <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="text-base truncate">
                  <Link href={routes.privacyPolicy}>Privacy Policy</Link>
                </li>
                <li className="text-base truncate">
                  <Link href={routes.termsOfService}>Terms of Service</Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-end">
              <a href={telLink(telephoneNumber)} className="flex">
                <Phone24 className="flex-shrink-0" />
                <span className="ml-3">Call us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-50 flex-1 border-t-2 border-pink-300 glow-lg-pink-400 mx-16 mt-1 mb-3" />
    </nav>
  );
}
