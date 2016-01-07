/**
 * Grunt - eslint (https://github.com/sindresorhus/grunt-eslint)
 */
module.exports = (grunt, config) => {
  return {
    options: {
      format: 'stylish'
    },
    src: `${config.path.app.scripts}/**/*.js`
  }
};
