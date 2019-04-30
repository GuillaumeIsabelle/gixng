 
 
var gulp = require('gulp');

var clean = require('gulp-clean');

require('dotenv').config();

var { outputPath, projectName } = require('gixng');

var target_dist = process.env.TARGET_DIST;//'/w/_vh/guillaumeisabelle.com/xng/';
console.log(target_dist);


var source_dist_path ='./' + outputPath + '/**';

gulp.task('copy-dist', function() {
  return gulp.src(source_dist_path)
    .pipe(gulp.dest(target_dist));
});

var source_dist_path_style ='./' + outputPath + '/*.css';

gulp.task('copy-dist:style', function() {
  return gulp.src(source_dist_path_style)
    .pipe(gulp.dest(target_dist));
});

var source_dist_path_assets ='./' + outputPath + '/assets/**';

gulp.task('copy-dist:assets', function() {
  return gulp.src(source_dist_path_assets)
    .pipe(gulp.dest(target_dist));
});

gulp.task('copy-elements', function() {
  return gulp.src('./elements/*')
    .pipe(gulp.dest(target_dist));
});

//@issue can not clean outside...
gulp.task('clean-dist', function () {
  return gulp.src(target_dist, {read: false})
      .pipe(clean());
});