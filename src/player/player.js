import {Application} from 'backbone.marionette';
import PlayerView from './player-view';

const Player = Application.extend({
  initialize() {
    this.layout = new PlayerView();
    this.layout.render();
  }
});

export default Player;
