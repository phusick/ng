var gulp = require('gulp');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var paths = {
  scripts: [
    'src/**/*.module.js',
    'src/**/!(main)*.js',
    '!src/**/*.spec.js',
    'src/main.js'
  ]
};

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('js/main.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);
