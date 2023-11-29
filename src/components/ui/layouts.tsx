import { reklassed } from "@klass/react";

const conditions = {
  __: "",
  xs: "xs:",
  s: "s:",
  m: "m:",
  l: "l:",
  xl: "xl:",
};

const defaultCondition = "__" satisfies keyof typeof conditions;

const spacing = (name: string) => {
  return {
    "0": `${name}0`,
    "1": `${name}1`,
    "2": `${name}2`,
    "3": `${name}3`,
    "4": `${name}4`,
    "5": `${name}5`,
    "6": `${name}6`,
    "7": `${name}7`,
    "8": `${name}8`,
    "9": `${name}9`,
  };
};

const Box = reklassed("div", {
  conditions,
  defaultCondition,
  variants: {
    display: {
      none: "hidden",
      block: "block",
      "i-block": "inline-block",
      flex: "flex",
      "i-flex": "inline-flex",
    },
    m: spacing("m"),
    mx: spacing("mx"),
    my: spacing("my"),
    mt: spacing("mt"),
    mr: spacing("mr"),
    mb: spacing("mb"),
    ml: spacing("ml"),
    p: spacing("p"),
    px: spacing("px"),
    py: spacing("py"),
    pt: spacing("pt"),
    pr: spacing("pr"),
    pb: spacing("pb"),
    pl: spacing("pl"),
  },
});

export { Box };
