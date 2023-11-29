import type { SVGProps } from "react";

import type { IconName } from "./types.ts";

type IconProps = SVGProps<SVGSVGElement> & {
  i: IconName;
  size?: string | number;
};

const Icon = ({ i, size, width = size, height = size, className, ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" width={width} height={height} {...props} className={`lucide ${className}`}>
      <use href={`/icons.svg#i-${i}`} />
    </svg>
  );
};

export type { IconName };
export { Icon };
