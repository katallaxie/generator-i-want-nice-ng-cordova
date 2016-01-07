// syntax
'use strict';

// modules

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

var _yeomanGenerator = require('yeoman-generator');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _underscore = require('underscore.string');

var _underscore2 = _interopRequireDefault(_underscore);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// init
_lodash2.default.mixin(_underscore2.default.exports());

// extend the yeoman.base and export as module

var Generator = (function (_Yeoman) {
  _inherits(Generator, _Yeoman);

  function Generator() {
    var _Object$getPrototypeO;

    _classCallCheck(this, Generator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Generator)).call.apply(_Object$getPrototypeO, [this].concat(args)));
    // call super class with arguments

    console.log(_this.user.git.email());

    // have app as parameter
    _this.argument('appname', {
      type: String,
      defaults: _path2.default.basename(process.cwd())
    });
    return _this;
  }

  _createClass(Generator, [{
    key: 'initializing',
    value: function initializing() {
      // we have a different root for the sources
      this.sourceRoot(_path2.default.join(__dirname, '../templates/app'));
    }
  }, {
    key: 'writing',
    value: function writing() {
      // creating the www for Cordova
      try {
        _fs2.default.mkdirSync(this.destinationPath('www'));
      } catch (error) {
        if (error.code != 'EEXIST') throw error;
      }
      // grunt
      this.directory('grunt');
      this.copy('Gruntfile.js');
      // cordova
      this.copy('build.json');
      // npm
      this.template('package.json', 'package.json');
      // git
      this.copy('gitignore', '.gitignore');
      this.copy('gitattributes', '.gitattributes');
      // editorconfig
      this.copy('editorconfig', '.editorconfig');
      // eslint
      this.copy('eslintrc', '.eslintrc');
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
      this.fs.write(this.destinationPath('README.md'), '# ' + this.app + '\n');
    }
  }, {
    key: 'default',
    value: function _default() {
      // Compose here with others Yeoman generator
    }
  }, {
    key: 'installing',
    value: function installing() {
      // npm
      if (!this.options['skip-install']) {
        this.runInstall('npm');
      }
    }
  }, {
    key: 'end',
    value: function end() {
      if (this.options['skip-install']) {
        _util2.default.log(['\nPlease have \'' + _chalk2.default.yellow.bold('npm install') + '\' run.', 'Afterwards run \'' + _chalk2.default.yellow.bold('npm fun') + '\' or \'' + _chalk2.default.yellow.bold('npm fun') + '\''].join('\n'));
      }
    }
  }, {
    key: 'prompting',
    get: function get() {

      return {
        greeting: function greeting() {
          // greeting
          _util2.default.log((0, _yosay2.default)('\'Ey \'Yo! So, u wanna start with your next project? Alright!'));
        },
        askForApp: function askForApp() {
          var _this2 = this;

          // async
          var done = this.async();
          // displaying
          var prompts = [{
            type: 'input',
            name: 'app',
            message: 'What\'s the name of your fun new app?',
            default: this.appname
          }];

          this.prompt(prompts, function (_ref) {
            var app = _ref.app;

            _this2.app = app;
            _this2.appname = _lodash2.default.camelize(_lodash2.default.slugify(_lodash2.default.humanize(app)));
            // resolve
            done();
          });
        },
        askForAuthor: function askForAuthor() {
          var _this3 = this;

          // async
          var done = this.async();
          // displaying
          var prompts = [{
            type: 'input',
            name: 'author',
            message: 'Who is the author? It\'s you, right?',
            default: this.user.git.email()
          }];

          this.prompt(prompts, function (_ref2) {
            var author = _ref2.author;

            _this3.author = author;
            // resolve
            done();
          });
        },
        askForId: function askForId() {
          var _this4 = this;

          // async
          var done = this.async();
          // displaying
          var prompts = [{
            type: 'input',
            name: 'id',
            message: 'What\'s the app store(s) identifier?',
            default: 'com.' + this.appname.toLowerCase()
          }];

          this.prompt(prompts, function (_ref3) {
            var id = _ref3.id;

            _this4.id = id;
            // resolve
            done();
          });
        },
        askForDescription: function askForDescription() {
          var _this5 = this;

          // async
          var done = this.async();
          // displaying
          var prompts = [{
            type: 'input',
            name: 'description',
            message: 'What\'s is your great new app doing?',
            default: 'Something really, really great ...'
          }];

          this.prompt(prompts, function (_ref4) {
            var description = _ref4.description;

            _this5.description = description;
            // resolve
            done();
          });
        }
      };
    }
  }]);

  return Generator;
})(_yeomanGenerator.Base);

exports.default = Generator;
module.exports = exports['default'];