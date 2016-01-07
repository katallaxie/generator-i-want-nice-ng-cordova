/**
 * Grunt - available-tasks (https://github.com/ben-eb/grunt-available-tasks)
 */
module.exports = (grunt, config) => {
  return {
    options: {
      filter: 'exclude',
      tasks: ['availabletasks', 'default']
    }
  }
};
