import { useSyncExternalStore } from "react";

import type { IXStore } from "ixstore";

const useStore = <T>(store: IXStore<T>) => useSyncExternalStore(store.sub, store.get);
const createUseStore =
  <T>(store: IXStore<T>) =>
  () =>
    useStore(store);

export { useStore, createUseStore };
