/**
 * Grunt - processhtml (https://www.npmjs.com/package/grunt-processhtml)
 */
module.exports = (grunt, config) => {
  return {
    options: {
      commentMarker: 'process' // that is because we have usemin
    },
    all: {
      files: {
        'www/index.html': 'www/index.html'
      }
    }
  };
};
