import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,test.js}"],  ignores: ["dist/", "build/", "*.min.js", "temp/", "webpack.config.js"], plugins: { js, jest }, extends: ["js/recommended"], languageOptions: { globals: globals.jest}, rules: {
      "semi": "error", 
      "prefer-const": "warn", 
    } },
]);
