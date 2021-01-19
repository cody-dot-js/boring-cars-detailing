import * as React from "react";
import Link from "next/link";
import classnames from "classnames";
interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const Header = ({ children, className }: Props) => (
  <header
    className={classnames(
      "sticky top-0 bg-gray-900 text-gray-50 shadow z-30",
      className
    )}
  >
    <div className="flex items-center	justify-between max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <Link href="/">
        <img
          alt="application icon"
          className="cursor-pointer mr-4"
          src="/shotsearch_icon.png"
          width="32"
          height="32"
        />
      </Link>
      <Link href="/">
        <h1 className="prose cursor-pointer flex-initial hidden sm:inline-block mr-4 text-3xl font-bold leading-tight">
          App Template
        </h1>
      </Link>
      {children}
    </div>
  </header>
);
