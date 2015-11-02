import {ItemView} from 'backbone.marionette';
import template from './player-template.hbs';

const PlayerView = ItemView.extend({
  el: '.application',
  template: template,

  ui: {
    'btnVolume': '.btn-control_mute i',
    'btnPlaying': '.btn-play i',
    'btnPrev': '.btn-control_prev',
    'btnNext': '.btn-control_next'
  },

  events: {
    'click .btn-control_mute': 'toggleMute',
    'click .btn-play': 'togglePlaying',
    'click @ui.btnPrev': 'goPrev',
    'click @ui.btnNext': 'goNext'
  },

  initialize() {
    if(!this.collection.length) { return; }

    let firstSong = this.collection.at(0);

    this.model.set('total', this.collection.length - 1);

    this.audio     = document.createElement('audio');
    this.audio.src = firstSong.get('url');
  },

  toggleMute() {
    let isMute    = this.model.get('mute');
    let iconClass = isMute ? 'fa-volume-up' : 'fa-volume-off';

    this.audio.volume = isMute ? 1 : 0;

    this.ui.btnVolume.removeClass()
                     .addClass(`fa ${iconClass}`);

    this.model.set('mute', !isMute);
  },

  play() {
    this.model.set('playing', true);
    this.ui.btnPlaying.removeClass('fa-play').addClass('fa-pause');
    this.audio.play();
  },

  pause() {
    this.model.set('playing', false);
    this.ui.btnPlaying.removeClass('fa-pause').addClass('fa-play');
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

    let song = this.collection.at(goTo);

    this.model.set('current', goTo);

    this.audio.src = song.get('url');
    this.play();
  },

  goNext() {
    let total   = this.model.get('total');
    let current = this.model.get('current');
    let goTo    = current < total ? current + 1 : 0;

    let song = this.collection.at(goTo);

    this.model.set('current', goTo);

    this.audio.src = song.get('url');
    this.play();
  }
});

export default PlayerView;
