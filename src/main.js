/* jshint unused: false */

import './plugins';
import State from './player/state';
import Songs from './player/songs';
import Player from './player/player';

let data = [{
  url: '/audio/01.mp3',
  title: 'The Unforgiven II',
  artist: 'Metallica'
}, {
  url: '/audio/02.mp3',
  title: 'Highway To Hell',
  artist: 'AC/DC'
}, {
  url: '/audio/03.mp3',
  title: 'Whiskey In The Jar',
  artist: 'Metallica'
}];

let playlist = new Songs(data);

let state = new State();

let app = new Player({
  model: state,
  collection: playlist
});
