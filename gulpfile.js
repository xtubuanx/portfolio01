var gulp = require("gulp");
var sass = require("gulp-sass");
var sassGlob = require("gulp-sass-glob");
var soursemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssdeclsort = require("css-declaration-sorter");
var mqpacker = require("css-mqpacker");
var aigis = require("gulp-aigis");
var browserSync = require("browser-sync");


gulp.task("sass", function () {

    return gulp.src("./shared/sass/**/*.scss")
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))//plumberの引数にエラーメッセージを設定
        .pipe(soursemaps.init())
        .pipe(sassGlob())

        //.pipe(sass({outputStyle: 'compressed'}))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(postcss([
            autoprefixer({
                // ☆IEは10以上、Androidは4.4以上
                // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
                browsers: ["last 2 versions", "ie >= 10", "Android >= 4"],
                cascade: false,
                grid: true
            })
        ]))

        .pipe(postcss([cssdeclsort({order: "smacss"})]))
        .pipe(postcss([mqpacker()]))
        .pipe(soursemaps.write("./"))
        .pipe(gulp.dest("./shared/css"));


});


gulp.task('aigis', function () {
    return gulp.src('./aigis_config.yml')
        .pipe(aigis());
});


gulp.task('server', function () {
    return browserSync.init({
        server: {
            baseDir: "./",       //対象ディレクトリ
            index: "index.html"      //インデックスファイル
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

//ファイル監視
gulp.task("watch", ["server"], function () {
    gulp.watch("./shared/sass/**/*.scss", ["sass"]);
    gulp.watch("./shared/css/*.css", ["bs-reload"]);
    gulp.watch("./*.html", ['bs-reload']);
});