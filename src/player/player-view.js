import {ItemView} from 'backbone.marionette';
import template from './player-template.hbs';

const PlayerView = ItemView.extend({
  el: '.application',
  template: template,

  ui: {
    'iconVolume'  : '.btn--mute i',
    'iconPlaying' : '.btn--play i',
    'btnPrev'     : '.btn--prev',
    'btnNext'     : '.btn--next'
  },

  events: {
    'click .btn--play'  : 'togglePlaying',
    'click .btn--mute'  : 'toggleMute',
    'click @ui.btnPrev' : 'goPrev',
    'click @ui.btnNext' : 'goNext'
  },

  initialize() {
    if(!this.collection.length) { return; }

    let firstSong = this.collection.at(0);

    this.model.set('total', this.collection.length - 1);

    this.audio     = document.createElement('audio');
    this.audio.src = firstSong.get('url');

    this.audio.addEventListener('ended', this.goNext);
  },

  toggleMute() {
    let isMute    = this.model.get('mute');
    let iconClass = isMute ? 'volume-up' : 'volume-off';

    this.audio.volume = isMute ? 1 : 0;

    this.ui.iconVolume.removeClass()
                     .addClass(`icon-${iconClass}`);

    this.model.set('mute', !isMute);
  },

  play() {
    this.model.set('playing', true);
    this.ui.iconPlaying.removeClass('icon-play').addClass('icon-pause');
    this.audio.play();
  },

  pause() {
    this.model.set('playing', false);
    this.ui.iconPlaying.removeClass('icon-pause').addClass('icon-play');
    this.audio.pause();
  },

  togglePlaying() {
    let playOrPause = this.model.get('playing') ? 'pause' : 'play';
    this[playOrPause]();
  },

  goPrev() {
    let total   = this.model.get('total');
    let current = this.model.get('current');
    let goTo    = current > 0 ? current - 1 : total;
    let song    = this.collection.at(goTo);

    this.model.set('current', goTo);
    this.audio.src = song.get('url');
    this.play();
  },

  goNext() {
    let total   = this.model.get('total');
    let current = this.model.get('current');
    let goTo    = current < total ? current + 1 : 0;
    let song    = this.collection.at(goTo);

    this.model.set('current', goTo);
    this.audio.src = song.get('url');
    this.play();
  }
});

export default PlayerView;
