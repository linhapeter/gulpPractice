const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

gulp.task('message', function(done) {
    console.log('Gulp makes me happy :D');
    done();
})

gulp.task('default', function(done) {
    console.log('Default task works');
    done();
})

gulp.task('copyHTML', function(done) {
    gulp.src('src/*.html').pipe(gulp.dest('dist'));
    done();
})

gulp.task('imageMin', () =>
    gulp.src('src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'))
);

gulp.task('minify', function(done) {
    gulp.src('src/js/*.js').pipe(uglify()).pipe(gulp.dest('dist/js'));
    done();
})