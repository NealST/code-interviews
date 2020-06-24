const { src, dest, parallel } = require("gulp");
const babel = require("gulp-babel");

function getBabelConfig(isEs = false) {
  return {
    presets: [
      ["@babel/preset-env", {modules: isEs ? false : 'commonjs'}]
    ],
    plugins: []
  }
}

function buildForLib() {
  const babelConfig = getBabelConfig();
  return src("src/**/*.js").pipe(babel(babelConfig)).pipe(dest("lib")).on("end", () => {
    console.log("lib目录构建完成");
  }).on("error", (err) => {
    console.error(err);
  })
}

function buildForEs() {
  const babelConfig = getBabelConfig(true);
  return src("src/**/*.js").pipe(babel(babelConfig)).pipe(dest("es")).on("end", () => {
    console.log("es目录构建完成");
  }).on("error", (err) => {
    console.error(err);
  })
}

exports.default = parallel(buildForEs, buildForLib);