/**
 * Grunt - The JavaScript task runner http://gruntjs.com/
 */
module.exports = (grunt) => { // trying to be nice
  // timing of grunt tasks
  require('time-grunt')(grunt);

  // modules
  const path = require('path');
  const chalk = require('chalk');
  const log = grunt.log;
  const file = grunt.file;
  const option = grunt.option;
  const cli = grunt.cli;

  // reading package.json
  const pkg = file.readJSON('package.json');
  // root of the project
  const root = process.cwd();

  // some dev sweetness and madness
  option('force', (cli.tasks[0] === 'dev' || cli.tasks[0] === 'fun') && !option('help'));

  // if we force the build, then we should be aware of this
  if (option('force')) {
    // and hey, common, have some fun
    log.writeln(chalk.blue(`May the '--force' be with you ...`));
  }

  // using https://github.com/firstandthird/load-grunt-config
  require('load-grunt-config')(grunt, {
    // path to task.js files, defaults to grunt dir
    configPath: path.join(root, 'grunt'),

    // auto grunt.initConfig
    init: true,

    // data that is passed into grunt.config.
    data: {
      pkg: pkg,
      // gobal config
      path: {
        root: root,
        /**
         * This is a collection of file patterns that refer to our app code (the
         * stuff in `src/`). These file paths are used in the configuration of
         * build tasks.
         *
         * - 'styles'       contains css styles in sass
         * - 'images'       contains images
         * - 'fonts'        contains fonts
         * - 'scripts'      contains app
         * - 'html'         contains index.html
         * - 'templates'    contains templates
         */
        app: {
          base: `${root}/src`,
          main: `${root}/src/app/app.js`,
          scripts: `${root}/src/app`,
          fonts: `${root}/src/fonts`,
          styles: `${root}/src/styles`,
          images: `${root}/src/images`,
          templates: [`${root}/src/app/**/*.tpl.html`],
          html: [`${root}/src/index.html`]
        },
        /**
         * The 'tmp' folder is where our html templates are compiled to JavaScript during
         * the build process and then they are concatenating with all other js files and
         * copy to 'dist' folder.
         */
        tmp: {
          base: `${root}/.tmp/`,
          main: `${root}/.tmp/scripts/app.js`,
          concat: `${root}/.tmp/concat`,
          styles: `${root}/.tmp/styles`,
          scripts: `${root}/.tmp/scripts`
        },
        /**
         * The 'build' folder is where our app resides once it's
         * completely built.
         *
         * - 'base'
         */
        build: {
          base: `${root}/build`
        },
        dist: {
          base: `${root}/www`,
          images: `${root}/www/images`,
          fonts: `${root}/www/fonts`
        }
      },
      cordova: {
        cli: 'cordova',
        build: `${root}/build.json`,
        platforms: ['ios', 'android'],
        plugins: [ // the plugins to be expected to be in the build
          'cordova-plugin-inappbrowser',
          'com.ionic.keyboard',
          'cordova-plugin-battery-status',
          'cordova-plugin-camera',
          'cordova-plugin-console',
          'cordova-plugin-contacts',
          'cordova-plugin-device-motion',
          'cordova-plugin-device-orientation',
          'cordova-plugin-device',
          'cordova-plugin-dialogs',
          'cordova-plugin-file-transfer',
          'cordova-plugin-file',
          // 'cordova-plugin-whitelist',
          'cordova-plugin-geolocation',
          'cordova-plugin-globalization',
          'cordova-plugin-inappbrowser',
          'cordova-plugin-media-capture',
          'cordova-plugin-media',
          'cordova-plugin-network-information',
          'cordova-plugin-splashscreen',
          'cordova-plugin-statusbar',
          'cordova-plugin-vibration',
          'cordova-plugin-flashlight',
          'cordova-plugin-secure-storage',
          'cordova-plugin-crosswalk-webview'
        ]
      }
    },

    // speed is good, right?
    jitGrunt: {
      staticMappings: {
        availabletasks: 'grunt-available-tasks',
        systemjs: 'grunt-systemjs-builder',
        usemin: 'grunt-usemin',
        useminPrepare: 'grunt-usemin'
      }
    },

    // can post process config object before it gets passed to grunt
    postProcess: function(config) {},

    // allows to manipulate the config object before it gets merged with the data object
    preMerge: function(config, data) {}
  });
};
