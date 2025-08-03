import { defineConfig } from "tsup";
import { peerDependencies } from "./package.json";

export default defineConfig({
  entry: ["core/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  tsconfig: "tsconfig.build.json",
  outDir: "dist",
  external: Object.keys(peerDependencies),
});
