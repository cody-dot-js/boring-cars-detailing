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

export const Group = () => (
  <div className="relative flex w-full">
    <Card className="absolute left-0 z-0 scale-95 transform-gpu bg-gray-800">
      <Image height="200" width="500" src="http://www.placehold.it/500x200" />
      <p>Ayy lmao</p>
    </Card>
    <Card className="absolute z-10 transform-gpu scale-105 bg-gray-800">
      <Image height="200" width="500" src="http://www.placehold.it/500x200" />
      <p>Yo Dawg</p>
    </Card>
    <Card className="absolute z-0 left-full scale-95 transform-gpu bg-gray-800">
      <Image height="200" width="500" src="http://www.placehold.it/500x200" />{" "}
      <p>Bush did 911</p>
    </Card>{" "}
  </div>
);
