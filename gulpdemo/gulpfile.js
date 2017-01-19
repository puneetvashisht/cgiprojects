var gulp = require('gulp');
var gulpUtil = require('gulp-util');

gulp.task('copyhtml', function(){
    gulpUtil.log('Copying html files');
    gulp.src('./src/**/*.html').pipe(gulp.dest('./build'))
})
