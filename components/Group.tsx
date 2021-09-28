import * as React from "react";
import cx from "classnames";
import Image from "next/image";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

const Card = ({ children, className, bodyClassName }: CardProps) => (
  <div className={cx("bg-white overflow-hidden shadow rounded-lg", className)}>
    <div className={cx("px-4 py-5 sm:p-6", bodyClassName)}>{children}</div>
  </div>
);
