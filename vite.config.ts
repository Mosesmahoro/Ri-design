import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  css: {
    postcss: {},
  },
  build: {
    // Increase chunk size warning limit to reduce noise for large media assets
    chunkSizeWarningLimit: 2000,
  },
});
