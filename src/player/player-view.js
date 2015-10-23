import {LayoutView} from 'backbone.marionette';
import template from './player-template.hbs';

const PlayerView = LayoutView.extend({
  el: '.application',
  template: template
});

export default PlayerView;
