
var gulp = require('gulp'),
    sass = require('gulp-sass');
    
gulp.task('css', function() {
  return gulp.src('./assets/sass/styles.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function() {
  gulp.watch(['./assets/sass/styles.scss', 'Gulpfile.js'], ['css']);
});

gulp.task('default', ['watch']);