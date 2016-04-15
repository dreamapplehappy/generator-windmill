'use strict';

export default angular
  .module('home', [
    require('./controllers/home.controller').name,
    require('./controllers/home-guide.controller').name
  ]);
