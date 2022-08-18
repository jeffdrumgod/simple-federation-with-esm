const esbuild = require("esbuild");
const { lessLoader } = require("esbuild-plugin-less");

esbuild.serve(
  {
    servedir: "dist",
    port: 8080,
  },
  {
    entryPoints: [
      "./src/app.tsx",
      "./src/button/",
      "./src/input/",
      "./src/container/",
      "./src/index.html",
    ],
    publicPath: "http://localhost:8080/",
    // sourceRoot: "http://localhost:8080/dist/",
    outdir: "dist",
    bundle: true,
    sourcemap: false,
    minify: false,
    splitting: true,
    format: "esm",
    target: ["esnext"],
    loader: {
      ".html": "copy",
    },
    external: ["react", "react-dom"],
    write: true,
    plugins: [
      lessLoader({
        javascriptEnabled: true,
      }),
    ],
  }
);

// const results = esbuild
//   .build({
//     entryPoints: ["./src/app.tsx", "./src/button/", "./src/input/"],
//     publicPath: "http://localhost:8080/dist/",
//     // sourceRoot: "http://localhost:8080/dist/",
//     outdir: "dist",
//     bundle: true,
//     sourcemap: false,
//     minify: false,
//     splitting: true,
//     format: "esm",
//     target: ["esnext"],
//     write: true,
//     plugins: [
//       lessLoader({
//         javascriptEnabled: true,
//       }),
//     ],
//   })
//   .then((result) => {
//     console.log("result...", result);
//   });

// const results = esbuild.buildSync({
//   entryPoints: ["./src/app.tsx", "./src/button.tsx"],
//   outdir: "dist",
//   bundle: false,
//   sourcemap: true,
//   minify: false,
//   splitting: true,
//   format: "esm",
//   target: ["esnext"],
//   write: false,
// });
// //   .catch(() => process.exit(1));
// console.log("🚀 ~ file: esbuild.js ~ line 15 ~ results", results);
