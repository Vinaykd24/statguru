const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  pFirstName: { type: String, required: true },
  pLastName: { type: String, required: true },
  playerRole: String,
  playerDob: Date,
  playerBio: String
});

module.exports = mongoose.model("Player", playerSchema);
