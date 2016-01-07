/**
 * Grunt - watch (https://github.com/gruntjs/grunt-contrib-watch)
 */
module.exports = (grunt, config) => {
  return {
    options: {
      spawn: false, // important, do not remove this to have browserSync running
      reload: true
    },
    // watch for the css
    css: {
      files: [`${config.path.app.styles}/**/*.scss`, `${config.path.app.scripts}/**/*.scss`],
      tasks: [
        // mapping scss components
        'sass_globbing',
        // processing the sass
        'sass'
      ]
    }
  };
};
