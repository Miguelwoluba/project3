const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  SongSchema = require('./song');
  
const PlaylistSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  songs: [{
    type: Schema.Types.ObjectId,
    ref: 'Song'
  }]
},
{
usePushEach: true
});

var Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = Playlist;
