import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
  ...tseslint.configs.recommended,
];
