/**
 * Grunt - cordova-splashs (https://github.com/katallaxie/grunt-cordova-splashs.git)
 */
module.exports = () => {
  // returning the config object
  return {
    all: {
      files: [{
        src: './splash.png',
        dest: 'build/res'
      }]
    }
  }
}
