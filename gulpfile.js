var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	livereload = require('gulp-livereload'),
	del = require('del'),
	jade = require('gulp-jade');

gulp.task('templates', function () {
	gulp.src('*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest(''))
});

var stylesSource = {
	sass: 'css/sass/',
	scss: 'css/sass/**/*.scss',
}

gulp.task('styles', function () {
	return sass(stylesSource.sass, { style: 'expanded' })
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('dist/css'))
		.pipe(rename({ suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css'))
		.pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function () {
	return gulp.src('js/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function () {
	return gulp.src('img/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
		.pipe(gulp.dest('dist/img'))
		.pipe(notify({ message: 'Images task complete' }));
});

gulp.task('watch', function () {
	// watch .scss files
	gulp.watch(stylesSource.scss, ['styles']);

	// watch .js files
	gulp.watch('js/*.js', ['scripts']);

	// watch image files
	gulp.watch('img/**/*', ['images']);

	// watch template files
	gulp.watch('*.jade', ['templates']);
});

gulp.task('clean', function (cb) {
	del(['dist/css', 'dist/js', 'dist/img'], cb)
});

gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'scripts', 'images', 'templates', 'watch');
});