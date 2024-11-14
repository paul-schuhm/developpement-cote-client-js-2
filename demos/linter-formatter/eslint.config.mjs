import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  //Configuration pré-définie
  pluginJs.configs.recommended,
  //Configuration personnelle
  {
    languageOptions: { globals: globals.browser },
    rules: {
      //Indiquer le niveau de sévérité (warn,)
      "no-unused-vars": "error",
      "no-undef": "error",
      "prefer-const": "warn", //check
      camelcase: ["error", { ignoreImports: true }], //check en changeant getName à get_name (cherche underscore)
    },
  },
];
