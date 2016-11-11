var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');

gulp.task('sass', function () {
  return gulp.src('./static/assets/css/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./static/build/'));
});

gulp.task('bundle', function () {
  return gulp.src('./static/assets/js/index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./static/build/'));
});

gulp.task('watch', function () {
  gulp.watch('./static/assets/css/**/*.scss', ['sass']);
  gulp.watch('./static/assets/js/**/**/*.js', ['bundle']);
});

gulp.task('default', ['bundle', 'sass', 'watch']);
