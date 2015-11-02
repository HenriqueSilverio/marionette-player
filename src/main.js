/* jshint unused: false */

import './plugins';
import State from './player/state';
import Songs from './player/songs';
import Player from './player/player';

let data = [{
  url: 'https://copy.com/TpMTcGdbSmx6ctnO?download=1',
  title: 'The Unforgiven II',
  artist: 'Metallica',
  cover: 'images/01.jpg'
}, {
  url: 'https://copy.com/7iRRqLIZWvr7xp7T?download=1',
  title: 'Highway To Hell',
  artist: 'AC/DC',
  cover: 'images/02.jpg'
}, {
  url: 'https://copy.com/YjEedRpiauB6y0Zn?download=1',
  title: 'Whiskey In The Jar',
  artist: 'Metallica',
  cover: 'images/03.jpg'
}];

let playlist = new Songs(data);

let state = new State();

let app = new Player({
  model: state,
  collection: playlist
});
