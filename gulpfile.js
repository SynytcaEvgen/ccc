'use strict';
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    fileinclude = require('gulp-file-include'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
    build: {
        html: 'build/',
        js: 'build/assets/js/',
        css: 'build/assets/css/',
        img: 'build/assets/img/',
        fonts: 'build/assets/fonts/',
        svg:'build/assets/sprite/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/assets/js/index.js',
        style: 'src/assets/sass/**/*.scss',
        img: 'src/assets/img/**/*.*',
        fonts: 'src/assets/fonts/**/*.*',
        svg: 'src/assets/sprite/sprite.svg'
    },
    watch: {
        html: 'src/assets/**/*.html',
        js: 'src/assets/js/index.js',
        style: 'src/assets/sass/**/*.scss',
        img: 'src/assets/img/**/*.*',
        fonts: 'src/assets/fonts/**/*.*',
        svg: 'src/assets/sprite/sprite.svg'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "ccc-shop"
};

gulp.task('webserver', async function () {
    browserSync(config);
});

gulp.task('clean', async function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', async function () {
    gulp.src(path.src.html) 
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', async function () {
    gulp.src(path.src.js)  
        .pipe(sourcemaps.init()) 
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            ignoreFiles: ['-min.js']
        }))
        .pipe(sourcemaps.write()) 
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});
gulp.task('style:build', async function () {
    gulp.src(path.src.style) 
        .pipe(sourcemaps.init())
        .pipe(sass({
            sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', async function () {
    gulp.src(path.src.img) 
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', async function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});
gulp.task('svg:build', async function() {
    gulp.src(path.src.svg)
        .pipe(gulp.dest(path.build.svg))
});

gulp.task('build', gulp.series(
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build',
    'svg:build'
));


gulp.task('watch', async function(){
    watch([path.watch.html], async function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], async function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], async function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], async function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], async function(event, cb) {
        gulp.start('fonts:build');
    });
    watch([path.watch.svg], async function(event, cb) {
        gulp.start('svg:build');
    });
});


gulp.task('default', gulp.series('build', 'webserver', 'watch'));