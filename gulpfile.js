var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-ruby-sass');
//var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');


gulp.task('sass',function() {
    // gulp.src('./sass/*.scss')
    //     .pipe(sass())
    return sass('./sass/*.scss',{style:'expanded'})
        .pipe(minifyCSS({keepBreaks:false,compatibility:'ie7'}))
        .pipe(gulp.dest('./css'));
});

gulp.task('scripts',function() {
    gulp.src('./script/*.js')
        .pipe(jshint())
        //.pipe(concat('zp.js'))
        //.pipe(gulp.dest('./js'))
        //.pipe(rename('common-min.js'))
        .pipe(uglify())
        //.pipe(rename('*-min.js'))
        .pipe(gulp.dest('./js'));
});

gulp.task('watch', function(){
    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch('./script/*.js', ['scripts']);
});

gulp.task('default', ['sass','scripts']);