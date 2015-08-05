var fs = require('fs');
var assert = require('assert');
var gutil = require('gulp-util');
var cssfmt = require('cssfmt');
var gulpCssfmt = require('../');

it('cssfmt', function (cb) {
  var stream = gulpCssfmt();
  var cssFile = fs.readFileSync('test/fixtures/input.css', 'utf-8');
  var output = cssfmt.process(cssFile);

  stream.on('data', function (file) {
    assert.equal(file.contents.toString(), output);
    cb();
  });

  stream.write(new gutil.File({
    contents: new Buffer(cssFile)
  }));
});
