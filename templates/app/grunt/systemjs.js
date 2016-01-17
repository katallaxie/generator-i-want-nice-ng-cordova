/**
 * Grunt - systemjs (https://www.npmjs.com/package/grunt-systemjs-builder)
 */
module.exports = (grunt, config) => {
  return {
    options: {
      sfx: true,
      configFile: "./jspm.config.js",
      minify: true,
      build: {
        mangle: false
      }
    },
    all: {
      files: [{
        "src": config.path.app.main,
        "dest": config.path.tmp.main
      }]
    }
  }
};
