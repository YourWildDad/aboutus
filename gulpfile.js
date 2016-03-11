'use strict';
var gulp = require('gulp'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    LessPluginAutoPrefix = require("less-plugin-autoprefix"),
    concat = require('gulp-concat'),
    autoprefix = new LessPluginAutoPrefix({
        browsers: [
            'last 8 versions',
            "ie >= 7"
        ]
    });
gulp.task('less', function() {
    gulp.src('./pages/css/*.less')
        .pipe(less({plugins: [autoprefix]}))
        .pipe(gulp.dest('./pages/css'));
});
//gulp.task('js', function() {
//    gulp.src(['./pages/js/*.js', '!./pages/js/*.min.js'])
//        .pipe(uglify())
//        //.pipe(rename({suffix: '.min'}))
//        .pipe(gulp.dest('./pages/js'));
//});
gulp.task('clean', function() {
    gulp.src('./dist').pipe(clean());
});
gulp.task('dist', function() {
    gulp.src('./pages/css/*.less')
        .pipe(less({plugins: [autoprefix]}))
        .pipe(minifycss())
        //.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'));
    gulp.src(['./pages/js/*.js', '!./pages/js/*.min.js'])
        .pipe(uglify())
        //.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'));
    gulp.src('./pages/js/*.min.js')
        .pipe(gulp.dest('./dist/js'));
    gulp.src('./pages/*')
        .pipe(gulp.dest('./dist'));
    gulp.src('./pages/fonts/*')
        .pipe(gulp.dest('./dist/fonts'));
    gulp.src('./pages/images/*')
        .pipe(gulp.dest('./dist/images'));
});
gulp.task('watch', function() {
    gulp.watch('./pages/css/*.less', ['less']);
});
gulp.task('init', ['less', 'dist']);
gulp.task('default', []);
