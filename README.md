miguelgazela.github.io
======================

### Getting Started

#### Install Gulp

This project uses Gulp as an automated task runner tool. If you want to change the Javascript or CSS (and other stuff) used by it you need to run gulp.

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

#### Install Bower

This project also users Bower as a package manager for all the libraries/frameworks that this website uses.

+ Install Bower globally:

```sh
$ npm install -g bower
```

+ Install package dependencies

```sh
$ bower install
```

##### Other commands

+ List Installed Packages

```sh
$ bower list
```

+ Update packages

```sh
$ bower update
```

+ Update Individual Package

```sh
$ bower update <package>
```