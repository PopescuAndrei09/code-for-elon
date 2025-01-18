/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["turbo", "next", "prettier", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "turbo/no-undeclared-env-vars": "off",
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports", fixStyle: "separate-type-imports" },
    ],
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
  },
  parserOptions: {
    ecmaFeatures: { jsx: true }
  },
  ignorePatterns: [
    "**/*.config.js",
    "**/*.config.mjs",
    "**/*.config.cjs",
    "**/dist/**",
    "**/.next/**",
    "**/eslint/**"
  ],
  reportUnusedDisableDirectives: true
}

module.exports = config
