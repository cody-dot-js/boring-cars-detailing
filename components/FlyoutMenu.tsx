import * as React from "react";
import { ChevronDown24 } from "./icons/ChevronDownIcon";
import { Transition } from "@headlessui/react";
import { useOnClickOutside } from "hooks/useOnClickOutside";
import cx from "classnames";
import { ChevronUp24 } from "./icons/ChevronUpIcon";
import { useIsActive } from "hooks/useIsActive";
import { Link } from "./Link";

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const FlyoutContext = React.createContext(() => {});

export function FlyoutMenu({ title, children, footer }: Props) {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const closeMenu = React.useCallback(() => setShow(false), []);

  useOnClickOutside(ref, closeMenu);

  return (
    <FlyoutContext.Provider value={closeMenu}>
      <div
        ref={ref}
        className="relative"
        onKeyDown={(e) => {
          if (e.key.toLocaleLowerCase() === "escape") {
            closeMenu();
          }
        }}
      >
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className={cx(
            "group inline-flex items-center hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 focus-within:ring-pink-300",
            show && "text-white bg-gray-700",
            !show && "text-gray-300"
          )}
        >
          <span>{title}</span>
          <ChevronDown24
            className={cx("ml-2 h-5 w-5", show && "hidden", !show && "inline")}
          />
          <ChevronUp24
            className={cx("ml-2 h-5 w-5", show && "inline", !show && "hidden")}
          />
        </button>
        <Transition
          show={show}
          enter="transition ease-out duration-150"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
          className="absolute z-50 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
        >
          <div className="shadow-lg rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative grid gap-6 bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8">
              {children}
            </div>
            <footer className="px-5 py-5 bg-gray-800 space-y-6 sm:flex sm:flex-col sm:space-y-0 sm:px-8">
              {footer}
            </footer>
          </div>
        </Transition>
      </div>
    </FlyoutContext.Provider>
  );
}

interface FlyoutItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function FlyoutItem({ href, children, ...rest }: FlyoutItemProps) {
  const closeMenu = React.useContext(FlyoutContext);
  const isActive = useIsActive(href);

  return (
    <Link
      {...rest}
      href={href}
      onClick={(e) => {
        rest.onClick?.(e);
        closeMenu();
      }}
      className={cx(
        "-m-3 p-3 flex items-start text-left rounded-lg hover:bg-gray-800",
        isActive && "bg-gray-800 hover:bg-gray-900"
      )}
    >
      {children}
    </Link>
  );
}

interface FlyoutLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function FlyoutLink({ href, children, ...rest }: FlyoutLinkProps) {
  const closeMenu = React.useContext(FlyoutContext);

  return (
    <Link
      {...rest}
      href={href}
      onClick={(e) => {
        rest.onClick?.(e);
        closeMenu();
      }}
      className="font-medium text-white hover:text-pink-300 transition ease-in-out duration-150"
    >
      {children}
    </Link>
  );
}

export function FlyoutAction({ children }: { children: React.ReactNode }) {
  const closeMenu = React.useContext(FlyoutContext);

  return (
    <div
      className="flow-root -m-3 p-3 items-center rounded-md text-base font-medium text-white hover:bg-gray-900"
      onClick={closeMenu}
    >
      {children}
    </div>
  );
}
