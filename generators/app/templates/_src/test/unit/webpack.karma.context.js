import angular from 'angular';
import mocks from 'angular-mocks';
import * as main from '../../client/app.js';

let context = require.context('../../client', true, /\.spec\.js/);
context.keys().forEach(context);