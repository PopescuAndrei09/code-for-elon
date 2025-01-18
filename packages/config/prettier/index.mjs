import { fileURLToPath } from "url"

/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */
/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  endOfLine: "auto",
  htmlWhitespaceSensitivity: "css",
  jsxSingleQuote: true,
  printWidth: 120,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "none",
  useTabs: false,
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  tailwindConfig: fileURLToPath(new URL("../tailwind/tailwind.config.ts", import.meta.url)),
  importOrder: [
    "^@/lib/sentry$",
    "^(react/(.*)$)|^(react$)|^(react-native(.*)$)",
    "^(next/(.*)$)|^(next$)",
    "^(expo(.*)$)|^(expo$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@ssp/(.*)$",
    "",
    "^@/(.*)$",
    "^~/",
    "^[../]",
    "^[./]"
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "4.4.0"
}

export default config
