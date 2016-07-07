var fs = require('fs');
var assert = require('assert');
var gutil = require('gulp-util');
var stylefmt = require('stylefmt');
var gulpStylefmt = require('../');

it('stylefmt', function (cb) {
  var stream = gulpStylefmt();
  var cssFile = fs.readFileSync('test/fixtures/input.css', 'utf-8');

  stylefmt
    .process(cssFile)
    .then(function (result) {
      stream.on('data', function (file) {
        assert.equal(file.contents.toString(), output);
      });

      stream.write(new gutil.File({
        contents: new Buffer(cssFile)
      }));

      cb();
    })
    .catch(function (e) {
      cb(e);
    });

});
