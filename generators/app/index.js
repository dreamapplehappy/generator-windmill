'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the laudable ' + chalk.green('generator-windmill') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'appName',
        message: 'What is your app\'s name ?'
      },
      {
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

    app: function() {
      // client file
      // client file assets
      this.fs.copy(
        this.templatePath('_src/_client/_assets/_images/iyizhan.png'),
        this.destinationPath('src/client/assets/images/iyizhan.png'));
      // client file common-blocks
      this.fs.copy(
        this.templatePath('_src/_client/_common-blocks/_block-log/_log.js'),
        this.destinationPath('src/client/common-blocks/block-log/log.js'));
      // client file common-components
      // client file common-components navbar
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_navbar/_index.js'),
        this.destinationPath('src/client/common-components/navbar/index.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_navbar/_navbar.component.js'),
        this.destinationPath('src/client/common-components/navbar/navbar.component.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_navbar/_navbar.controller.js'),
        this.destinationPath('src/client/common-components/navbar/navbar.controller.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_navbar/_navbar.css'),
        this.destinationPath('src/client/common-components/navbar/navbar.css'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_navbar/_navbar.html'),
        this.destinationPath('src/client/common-components/navbar/navbar.html'));
      // client file common-components navbar
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_tabs/_controllers/_pane.controller.js'),
        this.destinationPath('src/client/common-components/tabs/controllers/pane.controller.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_tabs/_controllers/_tab.controller.js'),
        this.destinationPath('src/client/common-components/tabs/controllers/tab.controller.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_tabs/_templates/_pane.html'),
        this.destinationPath('src/client/common-components/tabs/templates/pane.html'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_tabs/_templates/_tab.html'),
        this.destinationPath('src/client/common-components/tabs/templates/tab.html'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_tabs/_component.config.js'),
        this.destinationPath('src/client/common-components/tabs/component.config.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_tabs/_index.js'),
        this.destinationPath('src/client/common-components/tabs/index.js'));
      // client file common-components weui
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_index.js'),
        this.destinationPath('src/client/common-components/weui/index.js'));
      // client file common-components weui weui__action-sheet
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_action-sheet/_index.js'),
        this.destinationPath('src/client/common-components/weui/weui_action-sheet/index.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_action-sheet/_config.js'),
        this.destinationPath('src/client/common-components/weui/weui_action-sheet/config.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_action-sheet/_controllers/_action-sheet.controller.js'),
        this.destinationPath('src/client/common-components/weui/weui_action-sheet/controllers/action-sheet.controller.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_action-sheet/_styles/_action-sheet.scss'),
        this.destinationPath('src/client/common-components/weui/weui_action-sheet/styles/action-sheet.scss'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_action-sheet/_templates/_action-sheet.html'),
        this.destinationPath('src/client/common-components/weui/weui_action-sheet/templates/action-sheet.html'));
      // client file common-components weui weui__dialog
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_dialog/_index.js'),
        this.destinationPath('src/client/common-components/weui/weui_dialog/index.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_dialog/_config.js'),
        this.destinationPath('src/client/common-components/weui/weui_dialog/config.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_dialog/_controllers/_alert-dialog.controller.js'),
        this.destinationPath('src/client/common-components/weui/weui_dialog/controllers/alert-dialog.controller.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_dialog/_controllers/_confirm-dialog.controller.js'),
        this.destinationPath('src/client/common-components/weui/weui_dialog/controllers/confirm-dialog.controller.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_dialog/_templates/_alert-dialog.html'),
        this.destinationPath('src/client/common-components/weui/weui_dialog/templates/alert-dialog.html'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_dialog/_templates/_confirm-dialog.html'),
        this.destinationPath('src/client/common-components/weui/weui_dialog/templates/confirm-dialog.html'));
      // client file common-components weui weui__progress
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_progress/_index.js'),
        this.destinationPath('src/client/common-components/weui/weui_progress/index.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_progress/_config.js'),
        this.destinationPath('src/client/common-components/weui/weui_progress/config.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_progress/_controllers/_progress.controller.js'),
        this.destinationPath('src/client/common-components/weui/weui_progress/controllers/progress.controller.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_progress/_styles/_progress.scss'),
        this.destinationPath('src/client/common-components/weui/weui_progress/styles/progress.scss'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_progress/_templates/_progress.html'),
        this.destinationPath('src/client/common-components/weui/weui_progress/templates/progress.html'));
      // client file common-components weui weui__search-bar
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_search-bar/_index.js'),
        this.destinationPath('src/client/common-components/weui/weui_search-bar/index.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_search-bar/_config.js'),
        this.destinationPath('src/client/common-components/weui/weui_search-bar/config.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_search-bar/_controllers/_search-bar.controller.js'),
        this.destinationPath('src/client/common-components/weui/weui_search-bar/controllers/search-bar.controller.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_search-bar/_styles/_search-bar.scss'),
        this.destinationPath('src/client/common-components/weui/weui_search-bar/styles/search-bar.scss'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_search-bar/_templates/_search-bar.html'),
        this.destinationPath('src/client/common-components/weui/weui_search-bar/templates/search-bar.html'));
      // client file common-components weui weui__toast
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_toast/_index.js'),
        this.destinationPath('src/client/common-components/weui/weui_toast/index.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_toast/_config.js'),
        this.destinationPath('src/client/common-components/weui/weui_toast/config.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_toast/_controllers/_toast.controller.js'),
        this.destinationPath('src/client/common-components/weui/weui_toast/controllers/toast.controller.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_toast/_styles/_toast.scss'),
        this.destinationPath('src/client/common-components/weui/weui_toast/styles/toast.scss'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_toast/_templates/_loading-toast.html'),
        this.destinationPath('src/client/common-components/weui/weui_toast/templates/loading-toast.html'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-components/_weui/_weui_toast/_templates/_toast.html'),
        this.destinationPath('src/client/common-components/weui/weui_toast/templates/toast.html'));

    }
  },

  install: function () {
    this.installDependencies();
  }
});
