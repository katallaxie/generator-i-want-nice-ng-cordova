/**
 * Grunt - useminPrepare (https://github.com/yeoman/grunt-usemin)
 */
module.exports = (grunt, config) => {
  return {
    all: {
      options: {
        dest: 'build'
      },
      src: ['src/index.html']
    }
  };
};
