"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect");
var open = require("gulp-open");
var browserify = require("browserify"); // to bundle JS
var reactify = require("reactify"); // convert React JSX to JS
var source = require("vinyl-source-stream"); // use text streams with gulp

var config = {
  port: 9005,
  devBaseUrl: "http://localhost",
  paths: {
    html: "./src/*.html",
    js: "./src/**/*.js",
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
    livereload: true
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

gulp.task("watch", function() {
  gulp.watch(config.paths.html, gulp.series("html"));
  gulp.watch(config.paths.js, gulp.series("js"));
  // console.log("watching");
  // done();
});

let build = gulp.series("html", "js");
gulp.task("default", gulp.series(build, gulp.parallel("open", "watch")));
