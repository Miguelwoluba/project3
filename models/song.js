const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const SongSchema = new Schema({
  title: { type: String, required: true },
  youTubeHash: { type: String, required: true }
});

var Song = mongoose.model("Song", SongSchema);
module.exports = Song;
