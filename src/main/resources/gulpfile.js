var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./static/assets/css/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./static/build/'));
});

gulp.task('watch', function () {
  gulp.watch('./static/assets/css/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
