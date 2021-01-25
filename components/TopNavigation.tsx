import * as React from "react";
import Link from "next/link";
import cx from "classnames";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import Image from "next/image";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  comingSoon?: boolean;
}

function useIsActive(href: string): boolean {
  const { pathname } = useRouter();
  return href === pathname;
}

function NavLink({
  href,
  children,
  className,
  comingSoon,
  ...rest
}: NavLinkProps) {
  const isActive = useIsActive(href);

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
    <Link href={href}>
      <a
        href={href}
        className={cx(
          "px-3 py-2 text-sm font-medium",
          isActive && "text-pink-300 border-pink-300 border-b-2",
          !isActive &&
            "text-gray-300 hover:bg-pink-300 hover:rounded-md hover:text-gray-800",
          className
        )}
        {...rest}
      >
        {children}
      </a>
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
  const isActive = useIsActive(href);

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
    <Link href={href}>
      <a
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
      </a>
    </Link>
  );
}

export function TopNavigation() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <header className="relative z-10 bg-transparent">
      <nav className="relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <div className="cursor-pointer">
                    <Image
                      className="lg:mr-4"
                      src="/assets/imgs/nav-icon.png"
                      alt="Boring Cars Detailing"
                      layout="fixed"
                      height="64"
                      width="64"
                      priority
                      quality="100"
                    />

                    <h1 className="hidden lg:inline-block text-white primary-text-glow text-xl cursor-pointer flex-initial sm:inline-block mr-4 font-bold leading-tight">
                      Boring Cars Detailing
                    </h1>
                  </div>
                </Link>
              </div>
              <div className="hidden md:block md:ml-6">
                <div className="flex space-x-4">
                  <NavLink
                    comingSoon
                    href="/pricing"
                    aria-label="Pricing coming soon!"
                    data-microtip-position="bottom-left"
                    data-microtip-size="fit"
                    role="tooltip"
                  >
                    Pricing
                  </NavLink>
                  <NavLink
                    comingSoon
                    href="/gallery"
                    aria-label="Gallery coming soon!"
                    data-microtip-position="bottom-left"
                    data-microtip-size="fit"
                    role="tooltip"
                  >
                    Gallery
                  </NavLink>
                  <NavLink href="/about">About</NavLink>
                </div>
              </div>
            </div>
            <div className="hidden md:ml-6 md:block">
              <div className="flex items-center">
                <div
                  className="flex-shrink-0"
                  aria-label="Scheduling coming soon!"
                  data-microtip-position="bottom-left"
                  data-microtip-size="fit"
                  role="tooltip"
                >
                  <button
                    type="button"
                    className="cursor-not-allowed disabled:opacity-50 shadow-primary-md relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white shadow-primary-md w-full text-center bg-pink-600 hover:bg-pink-700 leading-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    aria-disabled="true"
                    disabled
                    // className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-ml-1 mr-2 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Schedule</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center md:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                type="button"
                onClick={() => setIsOpen((s) => !s)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-300"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* <!-- Icon when menu is closed. -->
            <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
                <svg
                  className={cx(
                    "h-6 w-6",
                    isOpen && "hidden",
                    !isOpen && "block"
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!-- Icon when menu is open. -->
            <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            --> */}
                <svg
                  className={cx(
                    "h-6 w-6",
                    isOpen && "block",
                    !isOpen && "hidden"
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Transition show={isOpen}>
          <Transition.Child
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="z-20 fixed inset-0 bg-black bg-opacity-25 lg:hidden"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />

          <Transition.Child
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="z-30 absolute top-0 right-0 max-w-none w-full p-2 transition transform origin-top lg:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-blueGray-800 divide-y divide-gray-50">
              <div className="pt-3 pb-2">
                <div className="flex items-center justify-between px-4">
                  <div>
                    <Link href="/">
                      <div className="cursor-pointer">
                        <Image
                          className="lg:mr-4"
                          src="/assets/imgs/nav-icon.png"
                          alt="Boring Cars Detailing"
                          layout="fixed"
                          height="64"
                          width="64"
                          priority
                          quality="100"
                        />
                        <h1 className="hidden lg:inline-block text-white primary-text-glow text-xl cursor-pointer flex-initial sm:inline-block mr-4 font-bold leading-tight">
                          Boring Cars Detailing
                        </h1>
                      </div>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="bg-cyan-500 text-gray-950 rounded-md p-2 inline-flex items-center justify-center hover:text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-300"
                    >
                      <span className="sr-only">Close menu</span>
                      {/* <!-- Heroicon name: x --> */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  <MobileNavLink comingSoon href="/schedule">
                    Schedule
                  </MobileNavLink>
                  <MobileNavLink comingSoon href="/pricing">
                    Pricing
                  </MobileNavLink>
                  <MobileNavLink comingSoon href="/gallery">
                    Gallery
                  </MobileNavLink>
                  <MobileNavLink href="/about">About</MobileNavLink>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Transition>
      </nav>
      <div className="absolute z-0 top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-gray-950 to-transparent opacity-40" />
      <div className="border-t mx-16 border-cyan-300" />
    </header>
  );
}
