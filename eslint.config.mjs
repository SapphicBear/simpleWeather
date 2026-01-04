import js from "@eslint/js";
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

module.exports = defineConfig([
  { files: ["./src/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser} }, globalIgnores(["webpack.*", "dist/"]), eslintConfigPrettier,
]);
