/**
 * Grunt - eslint (https://github.com/sindresorhus/grunt-eslint)
 */
module.exports = (grunt, config) => {
  return {
    options: {
      sfx: true,
      // baseURL: "./src",
      configFile: "./jspm.config.js",
      minify: false,
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
