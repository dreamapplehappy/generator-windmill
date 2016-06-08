'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  //Configurations will be loaded here.
  //Ask for user input
  prompting: function() {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your project name',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    }, function(answers) {
      this.props = answers;
      this.log(answers.name);
      done();
    }.bind(this));
  },
  //Writing Logic here
  //writing: {
  //  //Copy the configuration files
  //  config: function() {
  //    this.fs.copyTpl(
  //      this.templatePath('package.json'),
  //      this.destinationPath('package.json'), {
  //        name: this.props.name
  //      }
  //    );
  //    this.fs.copyTpl(
  //      this.templatePath('bower.json'),
  //      this.destinationPath('bower.json'), {
  //        name: this.props.name
  //      }
  //    );
  //    this.fs.copy(
  //      this.templatePath('bowerrc'),
  //      this.destinationPath('.bowerrc')
  //    );
  //  },
  //
  //  //Copy application files
  //  app: function() {
  //    //Server file
  //    this.fs.copyTpl(
  //      this.templatePath('server.js'),
  //      this.destinationPath('server.js'),
  //      this.destinationPath('/views/index.ejs'), {
  //        name: this.props.name
  //      }
  //    );
  //    /////Routes
  //    this.fs.copy(
  //      this.templatePath('routes/all.js'),
  //      this.destinationPath('routes/all.js'));
  //
  //
  //    // Model
  //    this.fs.copy(
  //      this.templatePath('model/todo.js'),
  //      this.destinationPath('model/todo.js'));
  //
  //    // Views
  //    this.fs.copyTpl(
  //      this.templatePath('views/index.ejs'),
  //      this.destinationPath('/views/index.ejs'), {
  //        name: this.props.name
  //      }
  //    );
  //
  //    // Public/
  //    this.fs.copy(
  //      this.templatePath('public/css/app.css'),
  //      this.destinationPath('public/css/app.css')
  //    );
  //    this.fs.copy(
  //      this.templatePath('public/js/app.js'),
  //      this.destinationPath('public/js/app.js')
  //    );
  //  }
  //},
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
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('karma.conf.js'),
        this.destinationPath('karma.conf.js')
      );
      this.fs.copy(
        this.templatePath('protractor.conf.js'),
        this.destinationPath('protractor.conf.js')
      );
      this.fs.copy(
        this.templatePath('tool.config.js'),
        this.destinationPath('tool.config.js')
      );
      this.fs.copy(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
      this.fs.copy(
        this.templatePath('webpack.dev.config.js'),
        this.destinationPath('webpack.dev.config.js')
      );
      this.fs.copy(
        this.templatePath('webpack.dist.config.js'),
        this.destinationPath('webpack.dist.config.js')
      );
      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'), {
          name: this.props.appName
        }
      );
    },

    app: function() {
      // client file
      // client file assets
      this.fs.copy(
        this.templatePath('src/client/assets/images/iyizhan.png'),
        this.destinationPath('src/client/assets/images/iyizhan.png'));

      // client file common-blocks
      this.fs.copy(
        this.templatePath('src/client/common-blocks/module.a.js'),
        this.destinationPath('src/client/common-blocks/module.a.js'));
      this.fs.copy(
        this.templatePath('src/client/common-blocks/module.b.js'),
        this.destinationPath('src/client/common-blocks/module.b.js'));
      // client file common-components
      // client file common-components navbar
      this.fs.copy(
        this.templatePath('src/client/common-components/navbar/index.js'),
        this.destinationPath('src/client/common-components/navbar/index.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/navbar/navbar.component.js'),
        this.destinationPath('src/client/common-components/navbar/navbar.component.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/navbar/controllers/navbar.controller.js'),
        this.destinationPath('src/client/common-components/navbar/controllers/navbar.controller.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/navbar/styles/navbar.scss'),
        this.destinationPath('src/client/common-components/navbar/styles/navbar.scss'));
      this.fs.copy(
        this.templatePath('src/client/common-components/navbar/templates/navbar.html'),
        this.destinationPath('src/client/common-components/navbar/templates/navbar.html'));
      // client file common-components navbar
      this.fs.copy(
        this.templatePath('src/client/common-components/tabs/controllers/pane.controller.js'),
        this.destinationPath('src/client/common-components/tabs/controllers/pane.controller.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/tabs/controllers/tab.controller.js'),
        this.destinationPath('src/client/common-components/tabs/controllers/tab.controller.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/tabs/templates/pane.html'),
        this.destinationPath('src/client/common-components/tabs/templates/pane.html'));
      this.fs.copy(
        this.templatePath('src/client/common-components/tabs/templates/tab.html'),
        this.destinationPath('src/client/common-components/tabs/templates/tab.html'));
      this.fs.copy(
        this.templatePath('src/client/common-components/tabs/component.config.js'),
        this.destinationPath('src/client/common-components/tabs/component.config.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/tabs/index.js'),
        this.destinationPath('src/client/common-components/tabs/index.js'));
      // client file common-components weui
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/index.js'),
        this.destinationPath('src/client/common-components/weui/index.js'));
      // client file common-components weui weuiaction-sheet
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_action-sheet/index.js'),
        this.destinationPath('src/client/common-components/weui/weui_action-sheet/index.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_action-sheet/config.js'),
        this.destinationPath('src/client/common-components/weui/weui_action-sheet/config.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_action-sheet/controllers/action-sheet.controller.js'),
        this.destinationPath('src/client/common-components/weui/weui_action-sheet/controllers/action-sheet.controller.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_action-sheet/styles/action-sheet.scss'),
        this.destinationPath('src/client/common-components/weui/weui_action-sheet/styles/action-sheet.scss'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_action-sheet/templates/action-sheet.html'),
        this.destinationPath('src/client/common-components/weui/weui_action-sheet/templates/action-sheet.html'));
      // client file common-components weui weuidialog
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_dialog/index.js'),
        this.destinationPath('src/client/common-components/weui/weui_dialog/index.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_dialog/config.js'),
        this.destinationPath('src/client/common-components/weui/weui_dialog/config.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_dialog/controllers/alert-dialog.controller.js'),
        this.destinationPath('src/client/common-components/weui/weui_dialog/controllers/alert-dialog.controller.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_dialog/controllers/confirm-dialog.controller.js'),
        this.destinationPath('src/client/common-components/weui/weui_dialog/controllers/confirm-dialog.controller.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_dialog/templates/alert-dialog.html'),
        this.destinationPath('src/client/common-components/weui/weui_dialog/templates/alert-dialog.html'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_dialog/templates/confirm-dialog.html'),
        this.destinationPath('src/client/common-components/weui/weui_dialog/templates/confirm-dialog.html'));
      // client file common-components weui weuiprogress
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_progress/index.js'),
        this.destinationPath('src/client/common-components/weui/weui_progress/index.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_progress/config.js'),
        this.destinationPath('src/client/common-components/weui/weui_progress/config.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_progress/controllers/progress.controller.js'),
        this.destinationPath('src/client/common-components/weui/weui_progress/controllers/progress.controller.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_progress/styles/progress.scss'),
        this.destinationPath('src/client/common-components/weui/weui_progress/styles/progress.scss'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_progress/templates/progress.html'),
        this.destinationPath('src/client/common-components/weui/weui_progress/templates/progress.html'));
      // client file common-components weui weuisearch-bar
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_search-bar/index.js'),
        this.destinationPath('src/client/common-components/weui/weui_search-bar/index.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_search-bar/config.js'),
        this.destinationPath('src/client/common-components/weui/weui_search-bar/config.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_search-bar/controllers/search-bar.controller.js'),
        this.destinationPath('src/client/common-components/weui/weui_search-bar/controllers/search-bar.controller.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_search-bar/styles/search-bar.scss'),
        this.destinationPath('src/client/common-components/weui/weui_search-bar/styles/search-bar.scss'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_search-bar/templates/search-bar.html'),
        this.destinationPath('src/client/common-components/weui/weui_search-bar/templates/search-bar.html'));
      // client file common-components weui weuitoast
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_toast/index.js'),
        this.destinationPath('src/client/common-components/weui/weui_toast/index.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_toast/config.js'),
        this.destinationPath('src/client/common-components/weui/weui_toast/config.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_toast/controllers/toast.controller.js'),
        this.destinationPath('src/client/common-components/weui/weui_toast/controllers/toast.controller.js'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_toast/styles/toast.scss'),
        this.destinationPath('src/client/common-components/weui/weui_toast/styles/toast.scss'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_toast/templates/loading-toast.html'),
        this.destinationPath('src/client/common-components/weui/weui_toast/templates/loading-toast.html'));
      this.fs.copy(
        this.templatePath('src/client/common-components/weui/weui_toast/templates/toast.html'),
        this.destinationPath('src/client/common-components/weui/weui_toast/templates/toast.html'));
      // client common-directives demo
      this.fs.copy(
        this.templatePath('src/client/common-directives/demo/index.js'),
        this.destinationPath('src/client/common-directives/demo/index.js'));
      this.fs.copy(
        this.templatePath('src/client/common-directives/demo/demo.html'),
        this.destinationPath('src/client/common-directives/demo/demo.html'));
      // client common-filters
      this.fs.copy(
        this.templatePath('src/client/common-filters/replace-detail.filter.js'),
        this.destinationPath('src/client/common-filters/replace-detail.filter.js'));
      // client common-services
      this.fs.copy(
        this.templatePath('src/client/common-services/global/index.js'),
        this.destinationPath('src/client/common-services/global/index.js'));
      this.fs.copy(
        this.templatePath('src/client/common-services/http/index.js'),
        this.destinationPath('src/client/common-services/http/index.js'));
      // client lib
      this.fs.copy(
        this.templatePath('src/client/lib/home/app.css'),
        this.destinationPath('src/client/lib/home/app.css'));
      this.fs.copy(
        this.templatePath('src/client/lib/home/please-wait/please-wait.css'),
        this.destinationPath('src/client/lib/home/please-wait/please-wait.css'));
      this.fs.copy(
        this.templatePath('src/client/lib/home/please-wait/please-wait.min.js'),
        this.destinationPath('src/client/lib/home/please-wait/please-wait.min.js'));
      // client modules
      // client modules 404
      this.fs.copy(
        this.templatePath('src/client/modules/404/code/controllers/404.controller.js'),
        this.destinationPath('src/client/modules/404/code/controllers/404.controller.js'));
      this.fs.copy(
        this.templatePath('src/client/modules/404/code/views/404.html'),
        this.destinationPath('src/client/modules/404/code/views/404.html'));
      this.fs.copy(
        this.templatePath('src/client/modules/404/code/404.js'),
        this.destinationPath('src/client/modules/404/code/404.js'));
      this.fs.copy(
        this.templatePath('src/client/modules/404/code/404.routing.js'),
        this.destinationPath('src/client/modules/404/code/404.routing.js'));
      // client modules demo
      this.fs.copy(
        this.templatePath('src/client/modules/demo/code/controllers/demo.controller.js'),
        this.destinationPath('src/client/modules/demo/code/controllers/demo.controller.js'));
      this.fs.copy(
        this.templatePath('src/client/modules/demo/code/views/demo.html'),
        this.destinationPath('src/client/modules/demo/code/views/demo.html'));
      this.fs.copy(
        this.templatePath('src/client/modules/demo/code/services/demo.service.js'),
        this.destinationPath('src/client/modules/demo/code/services/demo.service.js'));
      this.fs.copy(
        this.templatePath('src/client/modules/demo/code/demo.js'),
        this.destinationPath('src/client/modules/demo/code/demo.js'));
      this.fs.copy(
        this.templatePath('src/client/modules/demo/code/demo.routing.js'),
        this.destinationPath('src/client/modules/demo/code/demo.routing.js'));
      // client modules home

      this.fs.copy(
        this.templatePath('src/client/modules/home/code/controllers/home.controller.js'),
        this.destinationPath('src/client/modules/home/code/controllers/home.controller.js'));
      this.fs.copy(
        this.templatePath('src/client/modules/home/code/controllers/home-guide.controller.js'),
        this.destinationPath('src/client/modules/home/code/controllers/home-guide.controller.js'));
      this.fs.copy(
        this.templatePath('src/client/modules/home/code/views/home.html'),
        this.destinationPath('src/client/modules/home/code/views/home.html'));
      this.fs.copy(
        this.templatePath('src/client/modules/home/code/views/home-guide.html'),
        this.destinationPath('src/client/modules/home/code/views/home-guide.html'));
      this.fs.copy(
        this.templatePath('src/client/modules/home/code/images/home__home-header.png'),
        this.destinationPath('src/client/modules/home/code/images/home__home-header.png'));
      this.fs.copy(
        this.templatePath('src/client/modules/home/code/styles/home.scss'),
        this.destinationPath('src/client/modules/home/code/styles/home.scss'));
      this.fs.copy(
        this.templatePath('src/client/modules/home/code/styles/home-guide.scss'),
        this.destinationPath('src/client/modules/home/code/styles/home-guide.scss'));
      this.fs.copy(
        this.templatePath('src/client/modules/home/code/home.js'),
        this.destinationPath('src/client/modules/home/code/home.js'));
      this.fs.copy(
        this.templatePath('src/client/modules/home/code/home.routing.js'),
        this.destinationPath('src/client/modules/home/code/home.routing.js'));
      this.fs.copy(
        this.templatePath('src/client/modules/home/test/home.spec.js'),
        this.destinationPath('src/client/modules/home/test/home.spec.js'));

      // client modules manage
      this.fs.copy(
        this.templatePath('src/client/modules/manage/code/controllers/manage.controller.js'),
        this.destinationPath('src/client/modules/manage/code/controllers/manage.controller.js'));
      this.fs.copy(
        this.templatePath('src/client/modules/manage/code/views/manage.html'),
        this.destinationPath('src/client/modules/manage/code/views/manage.html'));
      this.fs.copy(
        this.templatePath('src/client/modules/manage/code/styles/common.scss'),
        this.destinationPath('src/client/modules/manage/code/styles/common.scss'));
      this.fs.copy(
        this.templatePath('src/client/modules/manage/code/styles/tabs.less'),
        this.destinationPath('src/client/modules/manage/code/styles/tabs.less'));
      this.fs.copy(
        this.templatePath('src/client/modules/manage/code/manage.js'),
        this.destinationPath('src/client/modules/manage/code/manage.js'));
      this.fs.copy(
        this.templatePath('src/client/modules/manage/code/manage.routing.js'),
        this.destinationPath('src/client/modules/manage/code/manage.routing.js'));

      // client config
      this.fs.copy(
        this.templatePath('src/client/app.config.js'),
        this.destinationPath('src/client/app.config.js'));
      this.fs.copy(
        this.templatePath('src/client/app.js'),
        this.destinationPath('src/client/app.js'));
      this.fs.copy(
        this.templatePath('src/client/app.scss'),
        this.destinationPath('src/client/app.scss'));
      this.fs.copy(
        this.templatePath('src/client/base.controller.js'),
        this.destinationPath('src/client/base.controller.js'));
      this.fs.copy(
        this.templatePath('src/client/index.html'),
        this.destinationPath('src/client/index.html'));
      // server
      this.fs.copy(
        this.templatePath('src/server/app.js'),
        this.destinationPath('src/server/app.js'));
      this.fs.copy(
        this.templatePath('src/server/data.js'),
        this.destinationPath('src/server/data.js'));
      this.fs.copy(
        this.templatePath('src/server/favicon.ico'),
        this.destinationPath('src/server/favicon.ico'));
      this.fs.copy(
        this.templatePath('src/server/routes.js'),
        this.destinationPath('src/server/routes.js'));
      this.fs.copy(
        this.templatePath('src/server/modules/demo/new-app-data.js'),
        this.destinationPath('src/server/modules/demo/new-app-data.js'));
      this.fs.copy(
        this.templatePath('src/server/modules/demo/new-app-routes.js'),
        this.destinationPath('src/server/modules/demo/new-app-routes.js'));
      this.fs.copy(
        this.templatePath('src/server/modules/wechat/new-app-data.js'),
        this.destinationPath('src/server/modules/wechat/new-app-data.js'));
      this.fs.copy(
        this.templatePath('src/server/modules/wechat/new-app-routes.js'),
        this.destinationPath('src/server/modules/wechat/new-app-routes.js'));
      this.fs.copy(
        this.templatePath('src/server/utils/404.js'),
        this.destinationPath('src/server/utils/404.js'));
      this.fs.copy(
        this.templatePath('src/server/utils/json.js'),
        this.destinationPath('src/server/utils/json.js'));
      // test
      this.fs.copy(
        this.templatePath('src/test/e2e/demo.spec.js'),
        this.destinationPath('src/test/e2e/demo.spec.js'));
      this.fs.copy(
        this.templatePath('src/test/e2e/demo1.spec.js'),
        this.destinationPath('src/test/e2e/demo1.spec.js'));
      this.fs.copy(
        this.templatePath('src/test/unit/webpack.karma.context.js'),
        this.destinationPath('src/test/unit/webpack.karma.context.js'));
    }
  },
  install: function() {
    // 安装npm依赖
    this.npmInstall();
    // 安装全部依赖
    //this.installDependencies();
  }
});
