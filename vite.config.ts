import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

export default defineConfig(({ command }) => ({
  plugins: [react(), visualizer({ open: true })],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
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
  esbuild: command === "build" ? { drop: ["console", "debugger"] } : {},
  build: {
    target: "esnext",
    sourcemap: true,
    minify: "esbuild",
    outDir: "dist",
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
}));
