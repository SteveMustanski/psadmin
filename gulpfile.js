"use strict";

const gulp = require("gulp");
const connect = require("gulp-connect");
const open = require("gulp-open");
const browserify = require("browserify"); // to bundle JS
const reactify = require("reactify"); // convert React JSX to JS
const source = require("vinyl-source-stream"); // use text streams with gulp
const concat = require("gulp-concat");

const config = {
  port: 9003,
  devBaseUrl: "http://localhost",
  paths: {
    html: "./src/*.html",
    js: "./src/**/*.js",
    images: "./src/images/*",
    css: [
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "node_modules/toastr/build/toastr.css"
    ],
    dist: "./dist",
    mainJs: "./src/main.js"
  }
};

// Task to start a local dev server
gulp.task("connect", function() {
  connect.server({
    root: ["dist"],
    port: config.port,
    base: config.devBaseUrl,
    livereload: false
  });
});

gulp.task("open", gulp.series("connect"), function(done) {
  gulp
    .src("dist/index.html")
    .pipe(open({ uri: config.devBaseUrl + ":" + config.port + "/" }));
  done();
});

gulp.task("html", function(done) {
  gulp
    .src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
  done();
});

gulp.task("images", function(done) {
  gulp
    .src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + "/images"))
    .pipe(connect.reload());
  done();
});

gulp.task("js", function(done) {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on("error", console.error.bind(console))
    .pipe(source("bundle.js"))
    .pipe(gulp.dest(config.paths.dist + "/scripts"))
    .pipe(connect.reload());
  done();
});

gulp.task("css", function(done) {
  gulp
    .src(config.paths.css)
    .pipe(concat("bundle.css"))
    .pipe(gulp.dest(config.paths.dist + "/css"));
  done();
});

gulp.task("watch", function() {
  gulp.watch(config.paths.html, gulp.series("html"));
  gulp.watch(config.paths.js, gulp.series("js"));
});

let build = gulp.series("html", "js", "images", "css");
gulp.task("default", gulp.series(build, gulp.parallel("open", "watch")));
