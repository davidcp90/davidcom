var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', function () {
 return gulp.src('assets/sass/main.sass')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('assets/css'));
});
gulp.task('watch', function() {
  gulp.watch('assets/**/*.sass', ['sass']);
});