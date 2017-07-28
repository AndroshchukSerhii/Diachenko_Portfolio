'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./assets/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./assets/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./assets/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./assets/images/**/*.*', $.gulp.series('copy:image'));
    $.gulp.watch('./assets/fonts/**/*.*', $.gulp.series('copy:fonts'));    
  });
};
