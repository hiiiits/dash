import type { FC } from "react";

import { Box } from "~/components/ui/index.ts";

export const Component: FC = () => {
  return (
    <Box display="flex" className="items-center justify-center wscreen hscreen overflow-hidden">
      <Box px="2" className="text-(vn11 xl) font-(mono 500) s:text-2xl l:text-3xl">
        404 | Not found
      </Box>
    </Box>
  );
};

if (import.meta.env.DEV) Component.displayName = "NotFoundPage";
