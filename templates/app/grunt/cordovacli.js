/**
 * Grunt - cordovacli (https://github.com/csantanapr/grunt-cordovacli)
 */
module.exports = (grunt, config) => {
  return {
    // general config of Cordova
    options: {
      cli: config.cordova.cli,
      path: config.path.build.base,
      id: config.pkg.id,
      name: config.pkg.name,
    },
    // create cordova directory
    create: {
      options: {
        command: 'create',
        args: ['--link-to', config.path.dist.base]
      }
    },
    // configuring the platforms
    platforms: {
      options: {
        command: 'platform',
        action: 'add',
        platforms: config.cordova.platforms
      }
    },
    // configuring the plugins
    plugins: {
      options: {
        command: 'plugin',
        action: 'add',
        plugins: config.cordova.plugins
      }
    },
    // debug the project
    debug: {
      options: {
        command: 'build',
        platforms: config.cordova.platforms,
        // TODO: provide generator to make the keystore
        // args: ['--debug', '--buildConfig', config.cordova.build]
        args: ['--debug']
      }
    },
    // test the project
    release: {
      options: {
        command: 'build',
        platforms: config.cordova.platforms,
        args: ['--release', '--device']
      }
    }
  };
};
