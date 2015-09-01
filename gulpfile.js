var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('html', function () {
  return gulp.src('src/index.html')
  .pipe(gulp.dest('dist'))
})

gulp.task('scripts', function () {
  return gulp.src('src/js/*js')
  .pipe(concat('all.js'))
  .pipe(gulp.dest('dist'))
})

gulp.task('styles', function () {
  return gulp.src('src/css/app.css')
  .pipe(gulp.dest('dist'))
})

gulp.task('watchout', function () {
  gulp.watch('src/js/*js', ['scripts'])
  gulp.watch('src/css/app.css', ['styles'])
  gulp.watch('src/index.html', ['html'])
})

gulp.task('default', ['html', 'scripts', 'styles', 'watchout'])
