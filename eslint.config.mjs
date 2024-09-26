import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    files: ["*.js", "*.jsx", "popup/*.js", "popup/*.jsx"],
    rules: {
      // Add any rules you want to enforce
      "indent": ["error", 2],
      "semi": ["error", "always"]
    }
  }
];