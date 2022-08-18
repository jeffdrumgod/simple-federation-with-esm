import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://127.0.0.1:8080",
  plugins: [dts(), react()],
  resolve: {
    alias: [
      // {
      //   find: /^lib\/dist\/(.*)/,
      //   replacement: "http://127.0.0.1:8080/$1.js",
      // },
      // {
      //   find: /\@infralabs\/admin-utility-design-system/,
      //   replacement: "http://127.0.0.1:8090/$1.js",
      // },
      // {
      //   find: /^\@infralabs\/admin-utility-design-system\/(.*)/,
      //   replacement: "http://127.0.0.1:8090/$1.js",
      // },
    ],
  },
  build: {
    manifest: true,
    target: "esnext",
    rollupOptions: {
      input: {
        Input: path.resolve(__dirname, "src/Input.tsx"),
        Button: path.resolve(__dirname, "src/Button.tsx"),
        main: path.resolve(__dirname, "index.html"),
        App: path.resolve(__dirname, "src/App.tsx"),
      },
      external: ["react", "react-dom"],
      output: {
        format: "es",
        chunkFileNames: "[name].js",
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
        manualChunks: {
          "vite-test-lib-1": ["./src/Input.tsx", "./src/Button.tsx"],
        },
        globals: {
          react: "React",
          "react-dom": "ReactDom",
        },
      },
    },
  },
});
