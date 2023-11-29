import { forwardRef } from "react";

import { useSeparator } from "react-aria";
import type { SeparatorProps } from "react-aria";

import clsx from "clsx";

import type { PropsWithClassesValue } from "./core/types.ts";

const Separator = forwardRef<HTMLDivElement, PropsWithClassesValue<Pick<SeparatorProps, "orientation">>>(
  ({ orientation = "horizontal", className, ...props }, forwardedRef) => {
    const { separatorProps } = useSeparator({ ...props, elementType: "div", orientation });
    return (
      <div
        ref={forwardedRef}
        {...separatorProps}
        className={clsx("bg-vn5", orientation === "horizontal" ? "wfull hpx" : "wpx hfull", className)}
      />
    );
  }
);
if (import.meta.env.DEV) Separator.displayName = "UI/Separator";

export { Separator };
