var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var config = {
    source: './src/',
    dist: './public/'
};
var paths = {
    assets: "assets/",
    html: "*.html",
    mainSass: "scss/style.scss",
    mainJS: "js/**/*.js",
    img: "img/**/*.png"
};
var sources = {
    assets: config.source + paths.assets,
    html: config.source + paths.html,    
    rootSass: config.source + paths.assets + paths.mainSass,
    rootJS: config.source + paths.assets + paths.mainJS,
    img: paths.assets + paths.img,
};
gulp.task('html', () => {
    gulp.src(sources.html).pipe(gulp.dest(config.dist));
});
gulp.task('sass', () => {
    gulp.src(sources.rootSass)
        .pipe(sass({
            outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(gulp.dest(config.dist + paths.assets + "css"));
});
gulp.task('img', () => {
    gulp.src(config.source + sources.img)
        .pipe(gulp.dest(config.dist + paths.assets + "img"))
});

gulp.task('js', ()=>{
	gulp.src(sources.rootJS)
	.pipe(concat('app.js'))
	.pipe(browserify())
	.pipe(gulp.dest(config.dist+paths.assets+"js"))
});