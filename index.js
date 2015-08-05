var gutil = require('gulp-util');
var through = require('through2');
var cssfmt = require('cssfmt');

module.exports = function (options) {
  options = options || {};

  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-cssfmt', 'Streaming not supported'));
      return;
    }

    try {
      file.contents = new Buffer(cssfmt.process(file.contents.toString()).toString());
      this.push(file);
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-cssfmt', err, {fileName: file.path}));
    }

    cb();
  });
};
