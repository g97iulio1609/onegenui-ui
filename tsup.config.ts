import { defineConfig } from "tsup";

const isWatch = process.argv.includes("--watch");

export default defineConfig({
  entry: ["src/index.ts", "src/definitions.ts"],
  format: ["cjs", "esm"],
  // Skip DTS in watch mode - declarations are generated during build
  // This avoids race conditions with workspace dependencies
  dts: isWatch ? false : { resolve: false },
  sourcemap: true,
  clean: !isWatch,
  external: [
    "react",
    "react-dom",
    "@onegenui/core",
    "@onegenui/react",
    "@onegenui/utils",
    "@onegenui/schemas",
    "clsx",
    "tailwind-merge",
  ],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
