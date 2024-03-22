/* eslint-env node */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Setup an alias for the src path
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // This will make sure that the asset paths are correct in the build output
    assetsDir: "assets",
    rollupOptions: {
      // This can help ensure that assets are copied to the dist folder
      output: {
        // if you have asset or image references in your html or css that you want to be bundled.
        assetFileNames: (assetInfo) => {
          if (
            assetInfo.name.endsWith(".png") ||
            assetInfo.name.endsWith(".jpg") ||
            assetInfo.name.endsWith(".jpeg")
          ) {
            return "assets/images/[name]-[hash][extname]";
          }
          // Other assets like fonts can go to another folder
          return "assets/other/[name]-[hash][extname]";
        },
      },
    },
  },
  // base setting is important if your app is not served from the server root
  base: process.env.NODE_ENV === "production" ? "/frontend/dist" : "/",
});
