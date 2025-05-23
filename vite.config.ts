import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      data: path.resolve(__dirname, "src/data"),
      features: path.resolve(__dirname, "src/features"),
      experiences: path.resolve(__dirname, "src/experiences"),
      hooks: path.resolve(__dirname, "src/hooks"),
      layout: path.resolve(__dirname, "src/layout"),
      providers: path.resolve(__dirname, "src/providers"),
      ui: path.resolve(__dirname, "src/ui"),
      utils: path.resolve(__dirname, "src/utils"),
    },
  },
  build: {
    outDir: "build",
  },
});
