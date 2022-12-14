const esbuild = require("esbuild");
const stylePlugin = require("esbuild-style-plugin");
const path = require("node:path");
const fs = require("fs").promises;
const manifestPlugin = require("esbuild-plugin-manifest");
const entryPoints = require("./exposes");
const { mode } = require("minimist")(process.argv.slice(2));

const config = {
  entryPoints: entryPoints,
  outdir: "dist",
  bundle: true,
  sourcemap: false,
  minify: true,
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
    stylePlugin({
      renderOptions: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    }),
  ],
};

if (mode === "development") {
  console.log(`π Development mode started\n`);
  // config.watch = {
  //   onRebuild(error, result) {
  //     if (error) console.error("π΄ Rebuild failed:", error);
  //     else console.log("π’ Rebuild succeeded");
  //   },
  // };
  const port = 3001;
  esbuild.serve(
    {
      port: 3001,
      host: "0.0.0.0",
      servedir: path.resolve(__dirname, "./dist"),
      onRequest: (args) => {
        console.log(`π Request ${args.status}: ${args.method} - ${args.path}`);
      },
    },
    {
      ...config,
      external: [],
      minify: false,
      logLevel: "debug",
    }
  );
  console.log(
    `π’ Server available: http://localhost:${port}\n\nπEnjoy yourself!\n\n`
  );
} else {
  console.log(`π Build with production mode started...\n`);
  console.log(`πͺ External packages: ${JSON.stringify(config.external)}\n`);
  esbuild.build(config).then(async (result) => {
    if (config.metafile && result) {
      await fs.mkdir(path.resolve(__dirname, "./reports"), { recursive: true });
      await fs.writeFile(
        path.resolve(__dirname, "./reports/meta.json"),
        JSON.stringify(result.metafile, null, 2),
        "utf8"
      );
    }
    console.log(`π’ Build finished!\n\n`);
  });
}
