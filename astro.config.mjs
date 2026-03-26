import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static", // importante

  vite: {
    plugins: [tailwindcss()],

    build: {
      minify: "esbuild",
      cssMinify: true,
    },
  },
});