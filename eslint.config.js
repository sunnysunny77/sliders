import globals from "globals";
export default [
  {
    rules: {
      semi: ["warn", "always"],
      quotes: ["error", "double"]
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  }
];
