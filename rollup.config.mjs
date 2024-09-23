// rollup.config.js
import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import { defineConfig } from "rollup";

// Common Rollup plugins
const commonPlugins = [commonjs(), resolve(), typescript()];

// ESM Configuration
const esmConfig = defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist/esm",
    format: "es",
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: "src",
    entryFileNames: "[name].mjs", // Define how the files will be named
  },
  plugins: [...commonPlugins],
});

// CommonJS Configuration
const cjsConfig = defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist/cjs",
    format: "cjs",
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: "src",
    entryFileNames: "[name].js", // Define how the files will be named
  },
  plugins: [...commonPlugins],
});

export default [esmConfig, cjsConfig];
