'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the laudable ' + chalk.red('generator-windmill') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someAnswer;

      done();
    }.bind(this));
  },

  writing: {
    config: function() {
      this.fs.copy(
        this.templatePath('eslintrc'),
        this.destinationPath('.eslintrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('stylelintrc'),
        this.destinationPath('.stylelintrc')
      );
      this.fs.copy(
        this.templatePath('_gulpfile.babel.js'),
        this.destinationPath('gulpfile.babel.js')
      );
      this.fs.copy(
        this.templatePath('_gulpfile.es5.js'),
        this.destinationPath('gulpfile.es5.js')
      );
      this.fs.copy(
        this.templatePath('_karma.conf.js'),
        this.destinationPath('karma.conf.js')
      );
      this.fs.copy(
        this.templatePath('_protractor.conf.js'),
        this.destinationPath('protractor.conf.js')
      );
      this.fs.copy(
        this.templatePath('_tool.config.js'),
        this.destinationPath('tool.config.js')
      );
      this.fs.copy(
        this.templatePath('_webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
      this.fs.copy(
        this.templatePath('_webpack.dev.config.js'),
        this.destinationPath('webpack.dev.config.js')
      );
      this.fs.copy(
        this.templatePath('_webpack.dist.config.js'),
        this.destinationPath('webpack.dist.config.js')
      );
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.appName
        }
      );
    },
  },

  //writing: function () {
  //  this.fs.copy(
  //    this.templatePath('dummyfile.txt'),
  //    this.destinationPath('dummyfile.txt')
  //  );
  //},

  install: function () {
    this.installDependencies();
  }
});
