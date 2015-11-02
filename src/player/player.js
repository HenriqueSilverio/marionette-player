import {Application} from 'backbone.marionette';
import PlayerView from './player-view';

const Player = Application.extend({
  initialize(options = {}) {
    this.layout = new PlayerView({
      model: options.model,
      collection: options.collection
    });

    this.layout.render();
  }
});

export default Player;
