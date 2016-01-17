/**
 * Grunt - icons (https://github.com/katallaxie/grunt-cordova-icons)
 */
module.exports = () => {
  // returning the config object
  return {
    all: {
      files: [{
        src: './icon.png',
        dest: 'build/res'
      }]
    }
  };
};
