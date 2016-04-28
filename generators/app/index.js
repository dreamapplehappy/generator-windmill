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
        this.templatePath('.eslintrc'),
        this.destinationPath('.eslintrc')
      );
      this.fs.copy(
        this.templatePath('.gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('.stylelintrc'),
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
      // client common-directives demo
      this.fs.copy(
        this.templatePath('_src/_client/_common-directives/_demo/_index.js'),
        this.destinationPath('src/client/common-directives/demo/index.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-directives/_demo/_demo.html'),
        this.destinationPath('src/client/common-directives/demo/demo.html'));
      // client common-filters
      this.fs.copy(
        this.templatePath('_src/_client/_common-filters/_replace-detail.filter.js'),
        this.destinationPath('src/client/common-filters/replace-detail.filter.js'));
      // client common-services
      this.fs.copy(
        this.templatePath('_src/_client/_common-services/_global/_index.js'),
        this.destinationPath('src/client/common-services/global/index.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_common-services/_http/_index.js'),
        this.destinationPath('src/client/common-services/http/index.js'));
      // client lib
      this.fs.copy(
        this.templatePath('_src/_client/_lib/_home/_app.css'),
        this.destinationPath('src/client/lib/home/app.css'));
      this.fs.copy(
        this.templatePath('_src/_client/_lib/_home/_please-wait/_please-wait.css'),
        this.destinationPath('src/client/lib/home/please-wait/please-wait.css'));
      this.fs.copy(
        this.templatePath('_src/_client/_lib/_home/_please-wait/_please-wait.min.js'),
        this.destinationPath('src/client/lib/home/please-wait/please-wait.min.js'));
      // client modules
      // client modules 404
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_404/_code/_controllers/_404.controller.js'),
        this.destinationPath('src/client/modules/404/code/controllers/404.controller.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_404/_code/_views/_404.html'),
        this.destinationPath('src/client/modules/404/code/views/404.html'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_404/_code/_404.js'),
        this.destinationPath('src/client/modules/404/code/404.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_404/_code/_404.routing.js'),
        this.destinationPath('src/client/modules/404/code/404.routing.js'));
      // client modules demo
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_demo/_code/_controllers/_demo.controller.js'),
        this.destinationPath('src/client/modules/demo/code/controllers/demo.controller.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_demo/_code/_views/_demo.html'),
        this.destinationPath('src/client/modules/demo/code/views/demo.html'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_demo/_code/_services/_demo.service.js'),
        this.destinationPath('src/client/modules/demo/code/services/demo.service.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_demo/_code/_demo.js'),
        this.destinationPath('src/client/modules/demo/code/demo.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_demo/_code/_demo.routing.js'),
        this.destinationPath('src/client/modules/demo/code/demo.routing.js'));
      // client modules home
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_home/_code/_controllers/_home.controller.js'),
        this.destinationPath('src/client/modules/home/code/controllers/home.controller.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_home/_code/_views/_home.html'),
        this.destinationPath('src/client/modules/home/code/views/home.html'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_home/_code/_images/_angular.png'),
        this.destinationPath('src/client/modules/home/code/images/angular.png'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_home/_code/_styles/_home.scss'),
        this.destinationPath('src/client/modules/home/code/styles/home.scss'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_home/_code/_services/_home.service.js'),
        this.destinationPath('src/client/modules/home/code/services/home.service.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_home/_code/_home.js'),
        this.destinationPath('src/client/modules/home/code/home.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_home/_code/_home.routing.js'),
        this.destinationPath('src/client/modules/home/code/home.routing.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_home/_test/_home.spec.js'),
        this.destinationPath('src/client/modules/home/test/home.spec.js'));
      // client modules manage
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_manage/_code/_controllers/_manage.controller.js'),
        this.destinationPath('src/client/modules/manage/code/controllers/manage.controller.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_manage/_code/_views/_manage.html'),
        this.destinationPath('src/client/modules/manage/code/views/manage.html'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_manage/_code/_styles/_manage.scss'),
        this.destinationPath('src/client/modules/manage/code/styles/manage.scss'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_manage/_code/_services/_manage.service.js'),
        this.destinationPath('src/client/modules/manage/code/services/manage.service.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_manage/_code/_manage.js'),
        this.destinationPath('src/client/modules/manage/code/manage.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_modules/_manage/_code/_manage.routing.js'),
        this.destinationPath('src/client/modules/manage/code/manage.routing.js'));
      // client config
      this.fs.copy(
        this.templatePath('_src/_client/_app.config.js'),
        this.destinationPath('src/client/app.config.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_app.js'),
        this.destinationPath('src/client/app.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_app.scss'),
        this.destinationPath('src/client/app.scss'));
      this.fs.copy(
        this.templatePath('_src/_client/_base.controller.js'),
        this.destinationPath('src/client/base.controller.js'));
      this.fs.copy(
        this.templatePath('_src/_client/_index.html'),
        this.destinationPath('src/client/index.html'));
      // server
      this.fs.copy(
        this.templatePath('_src/_server/_app.js'),
        this.destinationPath('src/server/app.js'));
      this.fs.copy(
        this.templatePath('_src/_server/_data.js'),
        this.destinationPath('src/server/data.js'));
      this.fs.copy(
        this.templatePath('_src/_server/_favicon.ico'),
        this.destinationPath('src/server/favicon.ico'));
      this.fs.copy(
        this.templatePath('_src/_server/_routes.js'),
        this.destinationPath('src/server/routes.js'));
      this.fs.copy(
        this.templatePath('_src/_server/_modules/_demo/_new-app-data.js'),
        this.destinationPath('src/server/modules/demo/new-app-data.js'));
      this.fs.copy(
        this.templatePath('_src/_server/_modules/_demo/_new-app-routes.js'),
        this.destinationPath('src/server/modules/demo/new-app-routes.js'));
      this.fs.copy(
        this.templatePath('_src/_server/_utils/_404.js'),
        this.destinationPath('src/server/utils/404.js'));
      this.fs.copy(
        this.templatePath('_src/_server/_utils/_json.js'),
        this.destinationPath('src/server/utils/json.js'));
      // test
      this.fs.copy(
        this.templatePath('_src/_test/_e2e/_demo.spec.js'),
        this.destinationPath('src/test/e2e/demo.spec.js'));
      this.fs.copy(
        this.templatePath('_src/_test/_e2e/_demo1.spec.js'),
        this.destinationPath('src/test/e2e/demo1.spec.js'));
      this.fs.copy(
        this.templatePath('_src/_test/_unit/_webpack.karma.context.js'),
        this.destinationPath('src/test/unit/webpack.karma.context.js'));
    }
  },

  install: function () {
    this.installDependencies();
  }
});
