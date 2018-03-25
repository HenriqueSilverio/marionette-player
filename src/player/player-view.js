import { View } from 'backbone.marionette';
import template from './player-template.hbs';

const PlayerView = View.extend({
  className: 'player',

  template: template,

  ui: {
    'iconVolume'  : '.btn--mute i',
    'iconPlaying' : '.btn--play i',
    'btnPrev'     : '.btn--prev',
    'btnNext'     : '.btn--next',
    'songName'    : '.song__name',
    'songArtist'  : '.song__artist',
    'songCover'   : '.song__cover',
  },

  events: {
    'click .btn--play'  : 'togglePlaying',
    'click .btn--mute'  : 'toggleMute',
    'click @ui.btnPrev' : 'goPrev',
    'click @ui.btnNext' : 'goNext',
  },

  initialize(options = {}) {
    this.model      = options.model;
    this.collection = options.collection;

    const firstSong = this.collection.at(0);

    this.model.set('total', this.collection.length - 1);

    this.audio     = document.createElement('audio');
    this.audio.src = firstSong.get('url');

    this.listenTo(this.model, 'change:current', this.onSongChange);
    this.audio.addEventListener('ended', this.goNext.bind(this));
  },

  templateContext() {
    const firstSong = this.collection.at(0);

    return {
      cover : firstSong.get('cover'),
      title : firstSong.get('title'),
      artist: firstSong.get('artist'),
    };
  },

  onSongChange(state) {
    const current = this.collection.at(state.get('current'));

    this.ui.songName.html(current.get('title'));
    this.ui.songCover.attr('src', current.get('cover'));
    this.ui.songArtist.html(current.get('artist'));
  },

  toggleMute() {
    const isMute    = this.model.get('mute');
    const iconClass = isMute ? 'volume-up' : 'volume-off';

    this.audio.volume = isMute ? 1 : 0;

    this.ui.iconVolume.removeClass().addClass(`icon-${iconClass}`);

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
    const playOrPause = this.model.get('playing') ? 'pause' : 'play';

    this[playOrPause]();
  },

  goPrev() {
    const total   = this.model.get('total');
    const current = this.model.get('current');
    const goTo    = current > 0 ? current - 1 : total;
    const song    = this.collection.at(goTo);

    this.model.set('current', goTo);
    this.audio.src = song.get('url');
    this.play();
  },

  goNext() {
    const total   = this.model.get('total');
    const current = this.model.get('current');
    const goTo    = current < total ? current + 1 : 0;
    const song    = this.collection.at(goTo);

    this.model.set('current', goTo);
    this.audio.src = song.get('url');
    this.play();
  }
});

export default PlayerView;
