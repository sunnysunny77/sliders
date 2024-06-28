import globals from "globals";
export default [
  {
    rules: {
      semi: ["warn", "always"]
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
