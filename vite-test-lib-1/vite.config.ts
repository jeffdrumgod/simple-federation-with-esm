import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import dts from "vite-plugin-dts";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://127.0.0.1:8080",
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    dts(),
    react(),
    federation({
      name: "module-name",
      filename: "remoteEntry.js",
      exposes: {
        Input: path.resolve(__dirname, "src/Input/index.tsx"),
        Button: path.resolve(__dirname, "src/Button/index.tsx"),
      },
    }),
  ],
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
      // input: {
      //   Input: path.resolve(__dirname, "src/Input.tsx"),
      //   Button: path.resolve(__dirname, "src/Button.tsx"),
      //   main: path.resolve(__dirname, "index.html"),
      //   App: path.resolve(__dirname, "src/App.tsx"),
      // },
      external: ["react", "react-dom"],
      output: {
        // manualChunks: {
        //   Input: ["./src/Input.tsx"],
        //   Button: ["./src/Button.tsx"],
        // },
        exports: "auto",
        format: "esm",
        chunkFileNames: "[name].js",
        entryFileNames: "[name].js",
        assetFileNames: (assetInfo, ...args) => {
          console.log("🚀 ~ file: vite.config.ts ~ line 64 ~ assetInfo", {
            assetInfo,
            args,
          });
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return "[name]-[hash].[ext]";
        },
        globals: {
          react: "React",
          "react-dom": "ReactDom",
        },
      },
    },
  },
});
