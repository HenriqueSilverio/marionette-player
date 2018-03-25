import { Collection } from 'backbone';
import Song from './song';

const Songs = Collection.extend({
  model: Song
});

export default Songs;
