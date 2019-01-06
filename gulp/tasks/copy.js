'use strict';

module.exports = function() {
  $.gulp.task('copy', function() {
    return $.gulp.src('./src/font/**/*.*', { 
      since: $.gulp.lastRun('copy'),
      base: "src"
     })
      .pipe($.gulp.dest('./build'));
  });
};