const glob = require("glob");
const madge = require("madge");

glob("./dist/{/**/*.js,/**/*.mjs}", (_err, files) => {
  if (files.length) {
    madge(files)
      .then((res) => res.image("./reports/dependency-tree.svg"))
      .then((writtenImagePath) => {
        console.log(
          "🌳 Image dependency-tree.svg written to " + writtenImagePath
        );
      });
  }
});
