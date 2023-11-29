import { useImperativeHandle, useRef } from "react";

import type { ForwardedRef } from "react";

const useImperativeHandleRef = <T extends Element>(forwardedRef: ForwardedRef<T>) => {
  const ref = useRef<T>(null);
  useImperativeHandle(forwardedRef, () => ref.current!);
  return ref;
};

export { useImperativeHandleRef };
