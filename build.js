var task = require('bud');
var browserify = require('browserify');
var b = browserify({ cache: {}, packageCache: {}, fullPaths: true, debug: true, detectGlobals: true });
var source = require('vinyl-source-stream');
var vinyl = require('vinyl-fs');
var watchify = require('watchify');
var reactify = require('gulp-react');
var w; 

task('html', task.watch('./src/index.html'), function() {
  vinyl.src("./src/index.html")
    .pipe(vinyl.dest('./public'));
});

task('css', task.watch('./src/index.html'), function() {
  vinyl.src("./src/css/style.css")
    .pipe(vinyl.dest('./public'));
});

task('build', task.once('jsx'), function() {
  b.add('./src/js/app.js');
  w = watchify(b);
  bundle();
  w.on('update', function() {
    bundle();
  });
  w.on('log', function (msg) { 
    console.log(msg);
  });
});

task('jsx', task.watch('./src/**/*.jsx'), function(t) {
  vinyl.src('./src/jsx/**')
       .pipe(reactify({harmony: true}))
       .on('error', console.log)
       .pipe(vinyl.dest('./src/js'))
       .on('end', t.done);
});

function bundle() {
  w.bundle()
   .pipe(source('bundle.js'))
   .pipe(vinyl.dest('./public'));
}

task('default', task.once('build', 'html', 'css'));