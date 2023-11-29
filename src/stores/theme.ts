import ixbroadcastr from "ixbroadcastr";
import ixstoragest from "ixstoragest";

import { createUseStore } from "~/utils/ixstore-react.ts";

type Theme = "light" | "dark";

const NAME = "[hiiiits][theme]";

const ThemeStore = ixstoragest<Theme>(NAME, "dark");
const bc = ixbroadcastr<Theme>(NAME);
const useThemeStore = createUseStore(ThemeStore);

const toggleTheme = () => {
  ThemeStore.set(bc.send(ThemeStore.get() === "dark" ? "light" : "dark"));
};

const documentTheme = (theme: Theme) => document.documentElement.setAttribute("data-theme", theme);

const setupTheme = () => {
  documentTheme(ThemeStore.get());
  const unsub = ThemeStore.sub(documentTheme);
  const unlisten = bc.listen(ThemeStore.set);

  return () => {
    unsub();
    unlisten();
  };
};

export { toggleTheme };
export { setupTheme };
export { useThemeStore };
export default ThemeStore;
