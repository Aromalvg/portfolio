
import path from "path";
import { resolve } from "path";
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from "vite";
 
export default defineConfig({
  base: "/portfolio/",

  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "src/404.html"), // Ensure 404.html is included in the build
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});