import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // {
      //   find: /^lib\/dist\/(.*)$/,
      //   replacement: "lib/dist/$1.mjs",
      // },
      {
        find: /^lib\/dist\/(.*)$/,
        replacement: "http://127.0.0.1:8080/$1.js",
      },
    ],
  },
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        App: path.resolve(__dirname, "src/App.tsx"),
        // Button: path.resolve(__dirname, "src/Button.tsx"),
      },
      external: [
        "react",
        "react-dom",
        // "react-is",
        // "react-jsx-runtime",
        // "lib/dist/button",
        /^lib\/dist\/(.*)$/,
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          // lib: "lib",
        },
      },
    },
  },
});
