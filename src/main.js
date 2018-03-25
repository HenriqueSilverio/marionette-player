import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import State from './player/state';
import Songs from './player/songs';
import Player from './player/player';

// marionette.inspector
if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}

const data = [{
  url   : 'https://copy.com/7iRRqLIZWvr7xp7T?download=1',
  title : 'Highway To Hell',
  artist: 'AC/DC',
  cover : 'images/01.jpg'
}, {
  url   : 'https://copy.com/YjEedRpiauB6y0Zn?download=1',
  title : 'Whiskey In The Jar',
  artist: 'Metallica',
  cover : 'images/02.jpg'
}, {
  url   : 'https://copy.com/TpMTcGdbSmx6ctnO?download=1',
  title : 'The Unforgiven II',
  artist: 'Metallica',
  cover : 'images/03.jpg'
}];

const state    = new State();
const playlist = new Songs(data);

const app = new Player({
  model     : state,
  collection: playlist,
});

// document ready
$(() => {
  app.start();
});
