'use strict';
var gulp = require('gulp');
var eslint = require('pretty-javascript');
var mocha = require('gulp-mocha');

gulp.task('lint', function () {
  return gulp
    .src([
      'index.js',
      'tests/test.js'
    ])
    .pipe(eslint());
});

gulp.task('test', function () {
  return gulp
    .src('tests/test.js', { read: false })
    // gulp-mocha needs filepaths so you can't have any plugins before it
    .pipe(mocha({ reporter: 'nyan' }));
});

gulp.task('default', ['lint']);
