# gulp-cssfmt [![Build Status](https://travis-ci.org/morishitter/gulp-cssfmt.svg)](https://travis-ci.org/morishitter/gulp-cssfmt)

gulp plugin for [CSSfmt](https://github.com/morishitter/cssfmt)

## Installation

```shell
$ npm install --save-dev gulp-cssfmt
```

## Usage

```js
var gulp = require('gulp');
var cssfmt = require('gulp-cssfmt');

gulp.task('cssfmt', function () {
  return gulp.src('src/input.css')
    .pipe(cssfmt())
    .pipe(gulp.dest('dist'));
});
``

## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
