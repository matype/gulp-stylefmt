var gutil = require('gulp-util');
var through = require('through2');
var stylefmt = require('stylefmt');

module.exports = function (options) {
  options = options || {};

  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-stylefmt', 'Streaming not supported'));
      return;
    }

    // try {
    //   file.contents = new Buffer(stylefmt.process(file.contents.toString()).toString());
    //   this.push(file);
    // } catch (err) {
    //   this.emit('error', new gutil.PluginError('gulp-stylefmt', err, {fileName: file.path}));
    // }

    var self = this
    stylefmt
      .process(file.contents.toString())
      .then(function (result) {
        file.contents = new Buffer(result.css);
        self.push(file);
        cb();
      })
      .catch(function (err) {
        this.emit('error', new gutil.PluginError('gulp-cssfmt', err, {fileName: file.path}));
      });

  });
};
