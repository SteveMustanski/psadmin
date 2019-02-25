"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect");
var open = require("gulp-open");

var config = {
  port: 9005,
  devBaseUrl: "http://localhost",
  paths: {
    html: "./src/*.html",
    dist: "./dist"
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

gulp.task("watch", function() {
  gulp.watch(config.paths.html, ["html"]);
});

gulp.task("default", gulp.series("html", "open", "watch"));
