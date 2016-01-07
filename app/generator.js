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
          default: this.appname
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
          default: this.user.git.email()
        }];

        this.prompt(prompts, ( { author } ) => {
          this.author = author;
          // resolve
          done();
        });
      },

      askForId() {
        // async
        let done = this.async();
        // displaying
        let prompts = [{
          type: 'input',
          name: 'id',
          message: `What's the app store(s) identifier?`,
          default: `com.${this.appname.toLowerCase()}`
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
          default: `Something really, really great ...`
        }];

        this.prompt(prompts, ( { description } ) => {
          this.description = description;
          // resolve
          done();
        });
      }

    };
  }

  writing() {
    // creating the www for Cordova
    try {
      Fs.mkdirSync(this.destinationPath('www'));
    } catch(error) {
      if ( error.code != 'EEXIST' ) throw error;
    }
    // grunt
    this.directory('grunt');
    this.copy('Gruntfile.js');
    // cordova
    this.copy('build.json');
    // npm
    this.template('package.json', 'package.json');
    // git
    this.copy('.gitignore');
    this.copy('.gitattributes');
    // editorconfig
    this.copy('.editorconfig');
    // eslint
    this.copy('.eslintrc');
    // jspm
    this.copy('jspm.config.js');
    // styles
    this.directory('src/styles');
    // images
    this.directory('src/images');
    // fonts
    this.directory('src/fonts');
    // app templates
    this.directory('src/app');
    // index.html
    this.template('src/index.html');
    // Write your files
    this.fs.write(this.destinationPath('README.md'), `# ${ this.app }\n`);
  }

  default() {
    // Compose here with others Yeoman generator
  }

  installing() {
    // npm
    if (!this.options['skip-install']) {
      this.runInstall('npm');
    }
  }

  end() {
    if (this.options['skip-install']) {
      Util.log([`\nPlease have '${Chalk.yellow.bold('npm install')}' run.`,
        `Afterwards run '${Chalk.yellow.bold('npm fun')}' or '${Chalk.yellow.bold('npm fun')}'`].join('\n'));
    }
  }
}
