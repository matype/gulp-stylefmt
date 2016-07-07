var gutil = require('gulp-util');
var through = require('through2');
var postcss = require('postcss');
var scss = require('postcss-scss');
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

    var self = this
    postcss([stylefmt(options)])
      .process(file.contents.toString(), { syntax: scss })
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
