const esbuild = require("esbuild");
const { lessLoader } = require("esbuild-plugin-less");
const { style } = require("@hyrious/esbuild-plugin-style");
const path = require("node:path");
const fs = require("fs").promises;
const manifestPlugin = require("esbuild-plugin-manifest");

esbuild
  .build({
    entryPoints: [
      "./src/app.tsx",
      "./src/button/",
      "./src/input/",
      "./src/container/",
      "./src/index.html",
    ],
    // publicPath: "http://localhost:8080/",
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
      ".svg": "file",
    },
    external: ["react", "react-dom"],
    write: true,
    plugins: [
      // style(),
      lessLoader({
        javascriptEnabled: true,
      }),
    ],
  })
  .then((result) => {
    console.log("result...", result);
  });

esbuild
  .build({
    entryPoints: [
      "./src/app.tsx",
      "./src/button/",
      "./src/input/",
      "./src/container/",
      "./src/index.html",
    ],
    publicPath: "http://localhost:8080/",
    // sourceRoot: "http://localhost:8080/dist/",
    outdir: "federated",
    bundle: true,
    sourcemap: false,
    minify: false,
    splitting: true,
    metafile: true,
    format: "esm",
    target: ["esnext"],
    loader: {
      ".html": "copy",
      ".svg": "file",
    },
    external: ["react", "react-dom"],
    write: true,
    plugins: [
      manifestPlugin({
        hash: false,
      }),
      // {
      //   name: "css-file",
      //   setup(build) {
      //     const path = require("path");

      //     build.onResolve({ filter: /\.css/ }, (args) => {
      //       return {
      //         path: path.join(args.resolveDir, args.path),
      //         namespace: "less-file",
      //       };
      //     });

      //     build.onLoad(
      //       { filter: /.*/, namespace: "less-file" },
      //       async (args) => {
      //         var template = (css) =>
      //           `typeof document<'u'&&` +
      //           `document.head.appendChild(document.createElement('style'))` +
      //           `.appendChild(document.createTextNode('asdas'))`;
      //         const result = await esbuild.build({
      //           entryPoints: [args.path],
      //           bundle: true,
      //           write: false,
      //         });
      //         return {
      //           contents: result.outputFiles[0].text,
      //           loader: "css",
      //           write: true,
      //         };
      //       }
      //     );
      //   },
      // },
      // {
      //   name: "inline-style",
      //   setup({ onLoad }) {
      //     var fs = require("fs");
      //     var template = (css, args) =>
      //       `typeof document<'u'&&` +
      //       `document.head.appendChild(document.createElement('style'))` +
      //       `.appendChild(document.createTextNode(${JSON.stringify([
      //         css,
      //         args,
      //       ])}))`;
      //     onLoad({ filter: /\.less/ }, async (args) => {
      //       let css = await fs.promises.readFile(args.path, "utf8");
      //       return args;
      //       return { contents: template(css, args) };
      //     });
      //   },
      // },
      // {
      //   name: "inline-style",
      //   setup({ onLoad }) {
      //     var fs = require("fs");
      //     var template = (props) => `/*${JSON.stringify(props)}*/\n`;
      //     onLoad({ filter: /\.less/ }, async (args) => {
      //       // let css = await fs.promises.readFile(args.path, "utf8");
      //       return { contents: template(args) };
      //     });
      //   },
      // },
      lessLoader({
        javascriptEnabled: true,
      }),
      {
        name: "css-file",
        setup(build) {
          const options = build.initialOptions;
          build.onEnd(async (args) => {
            console.log(
              "🚀 ~ file: esbuild.js ~ line 142 ~ build.onEnd ~ args",
              Object.keys(args.metafile.inputs).filter(
                (k) => k.indexOf("utton") > -1
              ),
              {
                button: args.metafile.inputs["src/button/index.tsx"].imports,
              }
            );
            const outputKeys = Object.keys(args.metafile.outputs);
            const genFilter = (postfix) => (k) => k.endsWith(postfix);

            const content = outputKeys.filter(genFilter(".js"));
            const css = await Promise.all(
              outputKeys.filter(genFilter(".css")).map((key) => {
                return path.resolve(key);
              })
            );
            console.log(
              "🚀 ~ file: esbuild.js ~ line 140 ~ build.onEnd ~ css",
              {
                options,
                css,
                content,
                manifest: await fs.readFile(
                  path.resolve(__dirname, options.outdir, "manifest.json"),
                  "utf8"
                ),
              }
            );
          });
        },
      },
    ],
  })
  .then((result) => {
    // console.log("result...", result);
  });

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
