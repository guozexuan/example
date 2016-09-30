/**
 * Created by Administrator on 2016/9/27.
 */

var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat'),   //合并
    jsmin = require('gulp-uglify');   //压缩js

gulp.task('less',function(){
    return gulp.src('./build/less/*.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('index', function() {
    return gulp.src([
        './build/js/lib/zepto.min.js',
        './build/js/lib/linghit.sdk.js',
        './build/js/lib/verificationAlert.v1.0.2.js',
        './build/js/lib/selectAlert.v1.2.2.js',
        './build/js/lib/mobliescroll.js',
        './build/js/index.js'])
        .pipe( concat('index.js'))  //合并
        //.pipe( jsmin() )  //压缩
        .pipe( gulp.dest('./dist/js') );
});

gulp.task('js', ['index']);

//监听
gulp.task('watch',function(){
    gulp.watch(['./build/less/*.less', './build/less/common/*.less'], ['less']);
    gulp.watch(['./build/js/lib/*.js', './build/js/*.js'], ['js']);
});

gulp.task('default', ['less', 'watch', 'js'], function(){
    //默认代码处
});
