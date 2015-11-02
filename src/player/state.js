import {Model} from 'backbone';

const State = Model.extend({
  defaults() {
    return {
      mute: false,
      total: 0,
      current: 0,
      playing: false
    };
  }
});

export default State;
