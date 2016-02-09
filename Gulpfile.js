var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifyCss = require('gulp-uglifycss');

gulp.task('sass', function() {
    return gulp.src('library/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('library/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync', function() {
    browserSync.init({
    	proxy: 'localhost:8888/wp/'
        //server: {
        //    baseDir: ''
        //}
    });
});

gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('*.php', browserSync.reload);
    gulp.watch(['library/scss/*.scss', 'library/scss/**/*.scss'], ['sass'])
    //gulp.watch('library/scss/*.scss', ['sass']);
    //gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('conc_min_js', function() {
    return gulp.src('app/js/*.js')
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('conc_min_css', function() {
    return gulp.src('library/css/*.css')
        .pipe(concat('all.min.css'))
        .pipe(uglifyCss())
        .pipe(gulp.dest('dist'));
});

gulp.task('concat-uglify', ['conc_min_js', 'conc_min_css']);