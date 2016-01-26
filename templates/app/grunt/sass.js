/**
 * Grunt - sass (https://github.com/gruntjs/grunt-contrib-sass)
 */
module.exports = (grunt, config) => {
  return {
    all: { // distribution is with compressed css
      options: {
        outputStyle: 'expanded',
        sourceMap: true
      },
      files: [{
        expand: true,
        cwd: config.path.app.styles,
        src: ['app.scss'],
        dest: config.path.tmp.styles,
        ext: '.css'
      }]
    }
  };
};
