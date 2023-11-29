import type { FC } from "react";

import { Box, Icon, IconButton, IconButtonLink, Separator } from "~/components/ui/index.ts";
import { toggleTheme, useThemeStore } from "~/stores/theme.ts";

export const Component: FC = () => {
  const theme = useThemeStore();

  return (
    <Box display="flex" className="items-center justify-center wscreen hscreen overflow-hidden">
      <Box display="flex" p="3" className="items-center gap3 bg-vn1 border border-vn2 rounded-6 shadow">
        <Box as="span" pl="2" className="text-(vn11 xl) font-(mono 500) s:text-2xl l:text-3xl">
          hiiiits
        </Box>

        <Box px="2" className="h9">
          <Separator orientation="vertical" />
        </Box>

        <IconButton onPress={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? <Icon i="Sun" /> : <Icon i="Moon" />}
        </IconButton>
        <IconButtonLink href="/not-found" aria-label="Go to /not-found">
          <Icon i="Construction" />
        </IconButtonLink>
      </Box>
    </Box>
  );
};

if (import.meta.env.DEV) Component.displayName = "IndexPage";
