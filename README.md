# gulp-stylefmt [![Build Status](https://travis-ci.org/morishitter/gulp-stylefmt.svg)](https://travis-ci.org/morishitter/gulp-stylefmt)

gulp plugin for [stylefmt](https://github.com/morishitter/stylefmt)

## Installation

```shell
$ npm install --save-dev gulp-stylefmt
```

## Usage

```js
var gulp = require('gulp');
var stylefmt = require('gulp-stylefmt');

gulp.task('stylefmt', function () {
  return gulp.src('src/input.css')
    .pipe(stylefmt())
    .pipe(gulp.dest('dist'));
});
```

## License

The MIT License (MIT)

Copyright (c) 2015 - 2016 Masaaki Morishita
