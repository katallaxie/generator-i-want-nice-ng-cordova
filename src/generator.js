// syntax
'use strict'

// modules
import 'babel-polyfill';
import {Base as Yeoman} from 'yeoman-generator';
import {default as Util} from 'util';
import {default as Chalk} from 'chalk';
import {default as Yosay} from 'yosay';
import {default as Path} from 'path';
import {default as Pkg} from '../package.json';
import {default as _} from 'lodash';
import {default as s} from 'underscore.string';
import {default as Fs} from 'fs';

// init
_.mixin(s.exports());

// extend the yeoman.base and export as module
export default class Generator extends Yeoman {

  constructor(...args) {
    // call super class with arguments
    super(...args);

    console.log(this.user.git.email());

    // have app as parameter
    this.argument('appname', {
      type: String,
      defaults: Path.basename(process.cwd())
    });
  }

  initializing() {
    // we have a different root for the sources
    this.sourceRoot(Path.join(__dirname, '../templates/app'));
    // supported platforms
    this.platforms = ['iOS', 'Android'];
    // supported plugins
    this.plugins = [
      'cordova-plugin-inappbrowser',
      'com.ionic.keyboard',
      'cordova-plugin-battery-status',
      'cordova-plugin-camera',
      'cordova-plugin-console',
      'cordova-plugin-contacts',
      'cordova-plugin-device-motion',
      'cordova-plugin-device-orientation',
      'cordova-plugin-device',
      'cordova-plugin-dialogs',
      'cordova-plugin-file-transfer',
      'cordova-plugin-file',
      // 'cordova-plugin-whitelist',
      'cordova-plugin-geolocation',
      'cordova-plugin-globalization',
      'cordova-plugin-inappbrowser',
      'cordova-plugin-media-capture',
      'cordova-plugin-media',
      'cordova-plugin-network-information',
      'cordova-plugin-splashscreen',
      'cordova-plugin-statusbar',
      'cordova-plugin-vibration',
      'cordova-plugin-flashlight',
      'cordova-plugin-secure-storage',
      'cordova-plugin-crosswalk-webview'
    ];
    // supported application templates
    this.templates = [
      {
        name : 'Angular 1.x + Ionic',
        value: 'angular-ionic'
      },
      {
        name: 'Angular 2',
        value: 'angular2'
      }
    ];
  }

  get prompting() {

    return {

      greeting() {
        // greeting
        Util.log(Yosay('\'Ey \'Yo! So, u wanna start with your next project? Alright!'));
      },

      askForApp() {
        // async
        let done = this.async();
        // displaying
        let prompts = [{
          type: 'input',
          name: 'app',
          message: `What's the name of your fun new app?`,
          default: this.appname,
          store: true
        }];

        this.prompt(prompts, ( { app } ) => {
          this.app = app;
          this.appname = _.camelize(_.slugify(_.humanize(app)));
          // resolve
          done();
        });
      },

      askForAuthor() {
        // async
        let done = this.async();
        // displaying
        let prompts = [{
          type: 'input',
          name: 'author',
          message: `Who is the author? It's you, right?`,
          default: this.user.git.email(),
          store: true
        }];

        this.prompt(prompts, ( { author } ) => {
          this.author = author;
          // resolve
          done();
        });
      },

      askForId () {
        // async
        let done = this.async();
        // displaying
        let prompts = [{
          type: 'input',
          name: 'id',
          message: `What's the app store(s) identifier?`,
          default: `com.${this.appname.toLowerCase()}`,
          store: true
        }];

        this.prompt(prompts, ( { id } ) => {
          this.id = id;
          // resolve
          done();
        });
      },

      askForDescription() {
        // async
        let done = this.async();
        // displaying
        let prompts = [{
          type: 'input',
          name: 'description',
          message: `What's is your great new app doing?`,
          default: `Something really, really great ...`,
          store: true
        }];

        this.prompt(prompts, ( { description } ) => {
          this.description = description;
          // resolve
          done();
        });
      },

      askForPlatforms () {
        // async
        let done = this.async();
        // displaying
        let prompts = [{
          type: 'checkbox',
          name: 'platforms',
          message: `What are the platforms you plan to support?`,
          choices: this.platforms,
          default: this.platforms,
          validate: (choices) => {
            if (!choices.length > 0) {
              return 'You have to choose, but do so wisely.';
            }
            return true;
          },
          required: true,
          store: true
        }];

        this.prompt(prompts, ( { platforms } ) => {
          this.platforms = platforms.map(platform => platform.toLowerCase());
          // resolve
          done();
        });
      },

      askForTemplates () {
        // async
        let done = this.async();
        // displaying
        let prompts = [{
          type: 'list',
          name: 'template',
          message: `What template you want to start with?`,
          choices: this.templates,
          required: true,
          store: true
        }];

        this.prompt(prompts, ( { template } ) => {
          this.templates = template;
          // resolve
          done();
        });
      },

      askForPhantomJS () {
        // async
        let done = this.async();
        // displaying
        let prompts = [{
          type: 'input',
          name: 'phantomjs',
          message: `Where does your Phantom JS 2.x resides?`,
          default: process.env.PHANTOMJS_BIN,
          store: true
        }];

        this.prompt(prompts, ( { phantomjs } ) => {
          this.phantomjs = phantomjs;
          // resolve
          done();
        });
      },

      askForPlugins () {
        // async
        let done = this.async();
        // displaying
        let prompts = [{
          type: 'checkbox',
          name: 'plugins',
          message: `What plugins do you want to use?`,
          choices: this.plugins,
          default: this.plugins,
          required: true,
          store: true
        }];

        this.prompt(prompts, ( { plugins } ) => {
          this.plugins = plugins.map(plugin => plugin.toLowerCase());
          // resolve
          done();
        });
      }

    };
  }

  configuring () {
    this.isAngular2 = this.templates === 'angular2';
    this.isAngular = !this.isAngular2;
  }

  writing() {
    // creating the www for Cordova
    try {
      Fs.mkdirSync(this.destinationPath('www'));
    } catch(error) {
      if ( error.code != 'EEXIST' ) throw error;
    }
    // grunt
    this.directory( 'grunt' );
    this.template( 'Gruntfile.js' );
    // cordova
    this.copy( 'build.json' );
    // npm
    this.template( 'package.json', 'package.json' );
    // git
    this.copy( '_gitignore', '.gitignore' );
    this.copy( '_gitattributes', '.gitattributes' );
    // editorconfig
    this.copy( '_editorconfig', '.editorconfig' );
    // eslint
    this.copy( '_eslintrc', '.eslintrc' );
    // karma
    this.template( 'karma.conf.js' );
    // jspm
    this.copy( 'jspm.config.js' );
    // styles
    this.directory( 'src/styles' );
    // images
    this.directory( 'src/images' );
    // fonts
    this.directory( 'src/fonts' );
    // app templates
    this.directory( 'src/app' );
    // index.html
    this.template( 'src/index.html' );
    // icon
    this.copy( 'icon.png' );
    // splash
    this.copy( 'splash.png' );
    // Write your files
    this.fs.write( this.destinationPath( 'README.md' ), `# ${ this.app }\n` );
    // having the template as wanted
    if ( this.isAngular2 ) {
      this.directory( `../${this.templates}`, `${this.destinationRoot()}/src` );
    }
  }

  default() {
    // Compose here with others Yeoman generator
  }

  installing() {
    // npm
    if (!this.options['skip-install']) {
      this.runInstall('npm', '', '--quiet');
    }
  }

  end() {
    // saving config
    this.config.save();
    // in case you wanted to skip install
    if (this.options['skip-install']) {
      Util.log([`\nPlease have '${Chalk.yellow.bold('npm install')}' run.`,
        `Afterwards run '${Chalk.yellow.bold('npm fun')}' or '${Chalk.yellow.bold('npm fun')}'`].join('\n'));
    }
  }
}
