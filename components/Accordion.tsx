import * as React from "react";
import { ChevronDown24 } from "./icons/ChevronDownIcon";
import cx from "classnames";
import { useToggle } from "hooks/useToggle";

interface Props {
  className?: string;
  children: React.ReactNode;
  title: React.ReactNode;
  animated?: boolean;
}

export function Accordion({ animated, className, children, title }: Props) {
  const [isExpanded, toggleExpanded] = useToggle(false);

  return (
    <dl className={className}>
      <dt className="text-lg">
        <button
          className="text-left p-2 w-full flex justify-between items-start"
          onClick={toggleExpanded}
        >
          {title}
          <span className="ml-6 h-7 flex items-center text-gray-400">
            <ChevronDown24
              className={cx(
                "relative transition-all duration-300 transform",
                isExpanded ? "-rotate-180" : "rotate-0"
              )}
            />
          </span>
        </button>
      </dt>
      <dd className="mt-2 pr-12">
        {animated ? (
          <div
            className={cx(
              "transition-all",
              isExpanded ? "opacity-100" : "opacity-0"
            )}
          >
            {children}
          </div>
        ) : (
          isExpanded && children
        )}
      </dd>
    </dl>
  );
}
