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
    // pngquant = require('imagemin-pngquant'),
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
        html: 'src/**/*.html',
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
    // tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "ccc-shop"
};

gulp.task('webserver', function (done) {
    browserSync(config);
    done();
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function (done) {
    gulp.src(path.src.html) 
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({ stream: true }));
    done();
});

gulp.task('js:build', function (done) {
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
        .pipe(reload({ stream: true }));
    done();
});
gulp.task('style:build', function (done) {
    gulp.src(path.src.style) 
        .pipe(sourcemaps.init())
        // .pipe(sass({
        //     sourceMap: true,
        //     errLogToConsole: true
        // }))
        .pipe(sass.sync().on("error", sass.logError))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({ stream: true }));
    done();
});

gulp.task('image:build', function (done) {
    gulp.src(path.src.img) 
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            // use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({ stream: true }));
    done();
});

gulp.task('fonts:build', function(done) {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
    done();
});
gulp.task('svg:build', function(done) {
    gulp.src(path.src.svg)
        .pipe(gulp.dest(path.build.svg));
    done();
});

gulp.task('build', gulp.series(
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build',
    'svg:build',
    function (done) {
        done();
    }
));


gulp.task('watch', function(done){
    watch(path.watch.html, gulp.series('html:build'));
    watch(path.watch.style, gulp.series('style:build'));
    watch(path.watch.js, gulp.series('js:build'));
    watch(path.watch.img, gulp.series('image:build'));
    watch(path.watch.fonts, gulp.series('fonts:build'));
    watch(path.watch.svg, gulp.series('svg:build'));
    done();
});

gulp.task('default', gulp.series('build', gulp.parallel('webserver', 'watch')));