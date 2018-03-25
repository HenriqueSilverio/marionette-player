import { Model } from 'backbone';

const Song = Model.extend({
  defaults() {
    return {
      url   : '',
      cover : '',
      title : '',
      artist: '',
    };
  }
});

export default Song;
