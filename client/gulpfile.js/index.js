const { src, dest, parallel, series } = require("gulp");
const clean = require("gulp-clean");

const SRC_FOR_CLEAN_CONFIG = { read: false };

const MAIN_BUNDLE_DEST_PATH = "../static/";
const JS_BUNDLE_DEST_PATH = `${MAIN_BUNDLE_DEST_PATH}static/js`;
const CSS_BUNDLE_DEST_PATH = `${MAIN_BUNDLE_DEST_PATH}static/css`;
const MEDIA_BUNDLE_DEST_PATH = `${MAIN_BUNDLE_DEST_PATH}static/media`;

const rename = require("gulp-rename");
function renameDefinition() {
  return src("/src/modules/*/Types/*.ts", {allowEmpty : true})
    .pipe(rename({ extname: ".d.ts" }))
}

function cleanDestDir() {
  return src(MAIN_BUNDLE_DEST_PATH, SRC_FOR_CLEAN_CONFIG).pipe(
    clean({ force: true })
  );
}
function cssBundle() {
  return src(["build/static/css/*.css"]).pipe(dest(CSS_BUNDLE_DEST_PATH));
}
function jsBundle() {
  return src(["build/static/js/*.js"]).pipe(dest(JS_BUNDLE_DEST_PATH));
}

function mainBundle() {
  return src([
    "build/*.js",
    "build/*.json",
    "build/*.ico",
    "build/*.html"
  ]).pipe(dest(MAIN_BUNDLE_DEST_PATH));
}

function mediaBundle() {
  return src(["build/static/media/*"]).pipe(dest(MEDIA_BUNDLE_DEST_PATH));
}

exports.default = series(
  cleanDestDir,
  parallel(mainBundle, jsBundle, cssBundle, mediaBundle)
);

exports.renameDefinition = renameDefinition;
