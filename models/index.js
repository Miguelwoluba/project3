const mongoose = require('mongoose');
require('dotenv').config();

// Connect to the Mongo DB
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Playlist";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


module.exports = {
  Playlist: require('./playlist'),
  Song: require('./song'),
}
