import { defineConfig, presetUno } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";

import coloradix, { gray, slate, red, green, orange, blue, rename } from "@coloradix/unocss";

const radix = coloradix(
  rename({
    gray,
    slate,
    red,
    green,
    orange,
    blue,
  }).to({
    gray: "xn",
    slate: "xp",
    red: "xe",
    green: "xs",
    orange: "xw",
    blue: "xi",
  })
)
  .alias({
    vn: "xn",
    vp: "xp",
    ve: "xe",
    vs: "xs",
    vw: "xw",
    vi: "xi",
  })
  .build();

const breakpoints = {
  xs: "640px",
  s: "768px",
  m: "1024px",
  l: "1280px",
  xl: "1536px",
};

export default defineConfig({
  content: { pipeline: { include: [/\.([jt]sx|html)($|\?)/, "src/**/*.{js,ts}"] } },
  theme: { breakpoints, colors: radix.colors },
  preflights: [radix.preflight],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [presetUno()],
  safelist: (() => {
    const breakpoint = Object.keys(breakpoints);

    const responsive = (...classNames: string[]) => {
      const result: string[] = [];
      classNames.forEach((className) => result.push(className, ...breakpoint.map((breakpoint) => `${breakpoint}:${className}`)));
      return result;
    };

    const spacing = (name: string) => {
      return [`${name}0`, `${name}1`, `${name}2`, `${name}3`, `${name}4`, `${name}5`, `${name}6`, `${name}7`, `${name}8`, `${name}9`];
    };

    return [
      ...responsive("hidden", "block", "inline-block", "flex", "inline-flex"),
      ...responsive(
        ...spacing("m"),
        ...spacing("mx"),
        ...spacing("my"),
        ...spacing("mt"),
        ...spacing("mr"),
        ...spacing("mb"),
        ...spacing("ml")
      ),
      ...responsive(
        ...spacing("p"),
        ...spacing("px"),
        ...spacing("py"),
        ...spacing("pt"),
        ...spacing("pr"),
        ...spacing("pb"),
        ...spacing("pl")
      ),
    ];
  })(),
});
