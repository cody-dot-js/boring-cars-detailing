import * as React from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import type { Props } from "./Comments";

const DynamicComments = dynamic(() => import("./Comments"));

export function Comments(props: Props) {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div
      className="w-full min-h-400 flex justify-center items-center"
      ref={ref}
    >
      {inView && <DynamicComments {...props} />}
    </div>
  );
}
