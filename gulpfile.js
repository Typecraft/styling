var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('sass-min', function() {
  gulp.src('src/index.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      browsers: ["last 2 version"]
    }))
    .pipe(rename('typecraft.min.css'))
    .pipe(gulp.dest('build'))
})

gulp.task('sass', function() {
  gulp.src('src/index.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ["last 2 version"]
    }))
    .pipe(rename('typecraft.css'))
    .pipe(gulp.dest('build'))
})


gulp.task('watch', ['watch-all'])

gulp.task('watch-all', function() {
  gulp.watch('src/**/*.scss', ['sass', 'sass-min'])
})

gulp.task('watch-min', function() {
  gulp.watch('src/**/*.scss', ['sass-min'])
})

gulp.task('default', ['sass', 'sass-min'])

