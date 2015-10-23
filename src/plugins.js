/* jshint unused: false */

import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import 'babel/polyfill';

// start the marionette inspector
if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}
