miguelgazela.github.io
======================

### Getting Started

#### Install Gulp

This project uses Gulp as an automated task runner tool. If you want to change the Javascript or CSS used by it you need to run gulp.

+ Install Gulp globally:

```sh
$ npm install --global gulp
```

+ Install Gulp in your project devDependencies:

```sh
$ npm install --save-dev gulp
```

+ Create a `gulpfile.js` at the root of your project:

```js
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
```

+ Run Gulp:

```sh
$ gulp
```

The default task will run and do nothing. To run individual tasks, use `gulp <task> <othertask>`.

Read the following article for where to go next: [getting started with gulp](http://markgoodyear.com/2014/01/getting-started-with-gulp/)