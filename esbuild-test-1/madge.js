const glob = require("glob");
const madge = require("madge");

(async () => {
  const files = await glob.sync("./dist/**/*.js");
  madge(files)
    .then((res) => res.image("./reports/dependency-tree.svg"))
    .then((writtenImagePath) => {
      console.log("Image dependency-tree.svg written to " + writtenImagePath);
    });
})();
