# Next Generation Angular 2 + Cordova Generator

> Experimental Yeoman generator for your next and next-gen Angular 2 +  Cordova project - lets you quickly set up a project with recent technologies in mind.

The generator is coded in [ES6](https://github.com/lukehoban/es6features) with [Babel](https://babeljs.io/) as polyfill. Thus, it avoids much of the overhead in creating the generator.

## Features
- Angular 2.0 and Angular 1.x with upgrade path
- Cordova 5 + Setup (Asset production to come...)
- Uses ES6/ES7 with [Babel](https://babel.js) as transpiler to write modern-day JavaScript without the use of typescript
- Use ES6 Modules via [SystemJS](https://github.com/systemjs/systemjs)
- Modular [Grunt](http://gruntjs.com/)
- [Sass](http://sass-lang.com/) for CSS preprocessing
- Bundling JavaScript via SystemJS (SFX)
- Uses [BrowserSync](https://www.browsersync.io/) to live code in the browser
- Also does image compression via imagemin
- It is delivered with [Crosswalk](https://crosswalk-project.org/) as web view (Android only)
- Also adds many default plugins for Cordova

> Only supported platforms are iOS and Android

## Todo
- Unit testing and E2E (Karma & Nightwatch + Appium)
- Deployment to stores
- More tide integration
- ... many more things

## Usage

> Many thins are still in the flow

### Setup

Install `yo`, `grunt-cli`, `cordova`, `jspm`, and `ios-sim` in the global scope `-g`:

```
npm i -g yo grunt-cli cordova jspm ios-sim
```

Create a new folder for your project, and `cd` into it:
```
mkdir my-new-app && cd $_
```

Run `yo i-want-nice-ng-cordova`
```
yo i-want-nice-ng-cordova [appname]
```

Have fun with `fun`.
```
npm fun
```
or
```
grunt fun
```

### Debug && Release

As to to have a release build you have to provide a keystore and information in `build.json`.

As to to have a debug build just run `debug`:

```
grunt debug
```

Or:

```
npm debug
```

As to to have a release build just run `release` or `build`:

```
npm release
```

Or:

```
grunt release
```

### Testing

> tba (unit testing, and uat... to come)
