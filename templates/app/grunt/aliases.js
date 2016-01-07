/**
 * Grunt - Aliases
 */
module.exports = (grunt, config) => { // passing in grunt and the config
  // returning the available grunt tasks
  return {
    // not really to be used; just outputs the available tasks
    'default': {
      description: 'Does not really do anything.',
      tasks: []
    },
    'dev': {
      description: 'Alias for \'fun\' task',
      tasks: [
        'fun'
      ]
    },
    'fun': {
      description: 'Local development in the browser of choice (Default: Chrome)',
      tasks: [
        // eslint
        'eslint',
        // globbing sass on components
        'sass_globbing',
        // compile sass
        'sass',
        // launching browserSync
        'browserSync',
        // watch for changes
        'watch'
      ]
    },
    'init': {
      description: 'Initializes the project',
      tasks: [
        // what a mess ...
        'clean',
        // init cordova
        'cordovacli:create',
        // configuring cordova
        // 'cordova:config',
        // configuring the platforms
        'cordovacli:platforms',
        // configuring the plugins
        'cordovacli:plugins'
      ]
    },
    // alias to release
    'build': {
      description: 'Alias for the \'release\' task',
      tasks: ['release']
    },
    // what follows are the usable tasks
    'release': {
      description: 'Ready to ship the .apk, or .ipa of the app',
      tasks: [
        // eslint
        'eslint',
        // globbing sass on components
        'sass_globbing',
        // compile sass
        'sass',
        // prepare usemin
        'useminPrepare',
        // concat css
        'concat:generated',
        // post process css
        'postcss',
        // jspm
        'systemjs',
        // copy everything to www
        'copy',
        // compress images
        'newer:imagemin',
        // substitute
        'usemin',
        // postprocess html
        'processhtml',
        // build test target
        'cordovacli:release'
      ]
    },
    'debug': {
      description: 'Builds a debugable version of the app that.',
      tasks: [
        // eslint
        'eslint',
        // globbing sass on components
        'sass_globbing',
        // compile sass
        'sass',
        // prepare usemin
        'useminPrepare',
        // concat css
        'concat:generated',
        // post process css
        'postcss',
        // jspm
        'systemjs',
        // copy everything to www
        'copy',
        // compress images
        'newer:imagemin',
        // substitute
        'usemin',
        // postprocess html
        'processhtml',
        // build test target
        'cordovacli:debug'
      ]
    },
    'test': {
      description: 'Testing',
      tasks: []
    }
  };
};
