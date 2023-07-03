import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueMacros from "unplugin-vue-macros";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
export default defineConfig({
  plugins: [
    VueMacros.vite({
      plugins: {
        vue: vue(),
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
