import { Application } from 'backbone.marionette';
import PlayerView from './player-view';

const Player = Application.extend({
  region: '[data-app-root]',

  initialize(options = {}) {
    this.model      = options.model;
    this.collection = options.collection;
  },

  onStart() {
    const view = new PlayerView({
      model     : this.model,
      collection: this.collection,
    });

    this.showView(view);
  }
});

export default Player;
