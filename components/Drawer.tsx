import * as React from "react";
import { Transition } from "@headlessui/react";

export interface DrawerProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  footer?: React.ReactNode;
}

export function Drawer({
  children,
  title,
  isOpen = false,
  onClose,
  footer,
}: DrawerProps) {
  return (
    <Transition show={isOpen}>
      <div className="fixed inset-0 overflow-hidden z-40">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background overlay, show/hide based on slide-over state. */}
          <Transition.Child
            enter="ease-in-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={onClose}
            aria-hidden="true"
          />
          <section
            className="absolute inset-y-0 right-0 max-w-full flex"
            aria-labelledby="slide-over-heading"
          >
            {/* Slide-over panel, show/hide based on slide-over state. */}
            <Transition.Child
              className="relative w-screen max-w-md"
              enter="transform transition ease-in-out duration-150"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-150"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="flex flex-col flex-nowrap h-full bg-white shadow-xl">
                <div className="flex justify-between border border-gray-200 border-t-0 border-l-0 border-r-0 py-4 px-4">
                  <h2 className="text-lg font-medium text-gray-900">{title}</h2>
                  <CloseButton onClose={onClose} />
                </div>
                <div className="flex-grow overflow-auto relative">
                  {children}
                </div>
                <footer className="flex-shrink-0 p-4 border border-gray-200 border-l-0 border-r-0 border-b-0">
                  {footer}
                </footer>
              </div>
            </Transition.Child>
          </section>
        </div>
      </div>
    </Transition>
  );
}

const CloseButton = ({ onClose }: { onClose?: () => void }) => (
  <button
    onClick={onClose}
    className="text-lg font-medium rounded-md text-gray-500 hover:text-gray-800 focus:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
  >
    <span className="sr-only">Close drawer</span>
    <svg
      className="h-7 w-7 p-1"
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
);
