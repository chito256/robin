var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');

gulp.task('sass', function () {
  return gulp.src('./assets/css/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('bundle', function () {
  return gulp.src('./assets/js/index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function () {
  gulp.watch('./assets/css/**/*.scss', ['sass']);
  gulp.watch('./assets/js/**/**/*.js', ['bundle']);
});

gulp.task('default', ['bundle', 'sass', 'watch']);
