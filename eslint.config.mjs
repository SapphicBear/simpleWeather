import js from "@eslint/js";
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  { 
    files: ["./src/*.{js,mjs,cjs}"],  
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.amd,
      },
      sourceType: "module",
      
    }
  }, 
    globalIgnores(
      [
        "webpack.*",
        "dist/"
      ],
    ), 
    eslintConfigPrettier,
]);
