/**
 * Grunt - copy (https://github.com/gruntjs/grunt-contrib-copy)
 */
module.exports = (grunt, config) => {
  return {
    all: { // prepare for distribution in www (test)
      files: [{
        expand: true,
        cwd: config.path.app.base,
        src: [
          'index.html'
        ],
        dest: config.path.dist.base
      }, {
        expand: true,
        cwd: config.path.tmp.base,
        src: [
          'scripts/**/*.{js,map}'
        ],
        dest: config.path.dist.base
      }, {
        expand: true,
        cwd: config.path.tmp.concat,
        src: [
          'styles/**/*.{css,map}'
        ],
        dest: config.path.dist.base
      }, {
        expand: true,
        cwd: config.path.app.fonts,
        src: [
          '**/*.{eot,svg,ttf,woff,woff2}'
        ],
        dest: config.path.dist.fonts,
        flatten: true
      }, {
        expand: true,
        cwd: './jspm_packages',
        src: [
          '**/*.{eot,svg,ttf,woff,woff2}'
        ],
        dest: config.path.dist.fonts,
        flatten: true
      }]
    }
  };
};
