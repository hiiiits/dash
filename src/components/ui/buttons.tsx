import { forwardRef } from "react";
import type { ForwardedRef, PropsWithChildren } from "react";

import { mergeProps, useButton, useFocusRing, useHover, useLink } from "react-aria";
import type { AriaButtonOptions, AriaLinkOptions } from "react-aria";

import clsx from "clsx";

import type { PropsWithClassesValue } from "./core/types.ts";
import { useImperativeHandleRef } from "./core/hook.ts";

const createBaseButtonClassName = (isDisabled?: boolean, isPressed?: boolean, isFocusVisible?: boolean, isHovered?: boolean) =>
  clsx(
    "inline-flex items-center justify-center gap2 outline-none cursor-pointer",
    isPressed ? "bg-vn5" : isHovered ? "bg-vn4" : "bg-vn3",
    isDisabled ? "text-vn10 opacity-90 pointer-events-none" : "text-vn11",
    "bg-vn3 text-vn11 border border-vn6 rounded-3",
    isFocusVisible && "ring-(2 offset-2 vp9 offset-vn1)"
  );

type UIButtonOptions = Pick<AriaButtonOptions<"button">, "autoFocus" | "onPress"> & { disabled?: boolean };

const useUIButton = ({ autoFocus, disabled: isDisabled, ...props }: UIButtonOptions, forwardedRef: ForwardedRef<HTMLButtonElement>) => {
  const ref = useImperativeHandleRef(forwardedRef);

  const { buttonProps, isPressed } = useButton({ ...props, elementType: "button", autoFocus, isDisabled }, ref);
  const { focusProps, isFocusVisible } = useFocusRing({ autoFocus });
  const { hoverProps, isHovered } = useHover({ isDisabled });

  return [
    ref,
    mergeProps(buttonProps, focusProps, hoverProps),
    createBaseButtonClassName(isDisabled, isPressed, isFocusVisible, isHovered),
  ] as const;
};

type UIButtonLinkOptions = Pick<AriaLinkOptions, "autoFocus" | "href" | "onPress" | "rel" | "target"> & { disabled?: boolean };

const useUIButtonLink = (
  { autoFocus, disabled: isDisabled, ...props }: UIButtonLinkOptions,
  forwardedRef: ForwardedRef<HTMLAnchorElement>
) => {
  const ref = useImperativeHandleRef(forwardedRef);

  const { linkProps, isPressed } = useLink({ ...props, elementType: "a", autoFocus, isDisabled }, ref);
  const { focusProps, isFocusVisible } = useFocusRing({ autoFocus });
  const { hoverProps, isHovered } = useHover({ isDisabled });

  return [
    ref,
    mergeProps(linkProps, focusProps, hoverProps),
    createBaseButtonClassName(isDisabled, isPressed, isFocusVisible, isHovered),
  ] as const;
};

const ButtonClassName = "px4 h9 font-500 text-base";
const IconButtonClassName = "w9 h9 font-500 text-base";

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<PropsWithClassesValue<UIButtonOptions>>>(
  ({ className, children, ...props }, forwardedRef) => {
    const [ref, $props, $className] = useUIButton(props, forwardedRef);
    return (
      <button ref={ref} {...$props} className={clsx($className, ButtonClassName, className)}>
        {children}
      </button>
    );
  }
);
if (import.meta.env.DEV) Button.displayName = "UI/Button";

const IconButton = forwardRef<HTMLButtonElement, PropsWithChildren<PropsWithClassesValue<UIButtonOptions>>>(
  ({ className, children, ...props }, forwardedRef) => {
    const [ref, $props, $className] = useUIButton(props, forwardedRef);
    return (
      <button ref={ref} {...$props} className={clsx($className, IconButtonClassName, className)}>
        {children}
      </button>
    );
  }
);
if (import.meta.env.DEV) IconButton.displayName = "UI/IconButton";

const ButtonLink = forwardRef<HTMLAnchorElement, PropsWithChildren<PropsWithClassesValue<UIButtonLinkOptions>>>(
  ({ className, children, ...props }, forwardedRef) => {
    const [ref, $props, $className] = useUIButtonLink(props, forwardedRef);
    return (
      <a ref={ref} {...$props} className={clsx($className, ButtonClassName, className)}>
        {children}
      </a>
    );
  }
);
if (import.meta.env.DEV) ButtonLink.displayName = "UI/ButtonLink";

const IconButtonLink = forwardRef<HTMLAnchorElement, PropsWithChildren<PropsWithClassesValue<UIButtonLinkOptions>>>(
  ({ className, children, ...props }, forwardedRef) => {
    const [ref, $props, $className] = useUIButtonLink(props, forwardedRef);
    return (
      <a ref={ref} {...$props} className={clsx($className, IconButtonClassName, className)}>
        {children}
      </a>
    );
  }
);
if (import.meta.env.DEV) IconButtonLink.displayName = "UI/IconButtonLink";

export { Button, IconButton, ButtonLink, IconButtonLink };
