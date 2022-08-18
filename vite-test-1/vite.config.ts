import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://127.0.0.1:8090",
  plugins: [
    react({
      // babel: {
      //   plugins: ["@babel/plugin-syntax-import-assertions"],
      // },
    }),
  ],
  resolve: {
    alias: [
      // {
      //   find: /^lib\/dist\/(.*).css$/,
      //   replacement: "http://127.0.0.1:8080/$1.css",
      // },
      // {
      //   find: /^lib\/dist\/(.*)$/,
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
      // {
      //   find: /^\@infralabs\/admin-utility-design-system\/(.*)/,
      //   replacement: "http://127.0.0.1:8090/$1.js",
      // },
    ],
  },
  // experimental: {
  //   renderBuiltUrl: (filename, { hostType, type }) => {
  //     console.log(
  //       "🚀 ~ file: vite.config.ts ~ line 27 ~ filename",
  //       filename,
  //       type
  //     );
  //     return "https://www.domain.com/" + filename;
  //     // if (hostType === "js") {
  //     //   return { runtime: `window.__toCdnUrl(${JSON.stringify(filename)})` };
  //     // } else {
  //     //   return { relative: true };
  //     // }
  //   },
  // },
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        App: path.resolve(__dirname, "src/App.tsx"),
        Button: path.resolve(__dirname, "src/Button.tsx"),
      },
      external: [
        "react",
        "react-dom",
        "react-is",
        "react-jsx-runtime",
        "lib/dist/button",
        "lib/**/*",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          lib: "lib",
        },
      },
    },
  },
});
