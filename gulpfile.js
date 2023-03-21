gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require("gulp-notify"),
    minify = require('gulp-minify')
    watch = require('gulp-watch');

//Html Task pug to html
gulp.task('html',function(){
    return gulp.src('stage/html/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest("./dist"))
    .pipe(livereload())
})
//css task
gulp.task('css',function(){
    return gulp.src(['stage/css/**/*.css','stage/css/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(concat('main.css'))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(livereload())
}) 
//javascript task
gulp.task('js',function(){
    return gulp.src('stage/js/*.js')
    .pipe(concat('script.js'))
    .pipe(minify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(livereload())
})

//watch task and run all tasks
gulp.task('watch',function(){
    require('./server.js');
    livereload.listen();
    gulp.watch('stage/html/**/*.pug',gulp.series('html'));
    gulp.watch(['stage/css/**/*.css','stage/css/**/*.scss'],gulp.series('css'));
    gulp.watch('stage/js/*.js',gulp.series('js'));
    notify("All Is Done")
})