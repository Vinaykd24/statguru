const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerMatchSchema = new Schema({
  playerId: { type: Number, required: true },
  matchId: { type: Number, required: true },
  isOut: { type: Boolean, required: true },
  runs: { type: Number, required: true },
  balls: { type: Number, required: true },
  fours: { type: Number, required: true },
  sixes: { type: Number, required: true },
  overs: { type: Number, required: true },
  maidens: { type: Number, required: true },
  wickets: { type: Number, required: true },
  runsGiven: { type: Number, required: true }
});

module.exports = mongoose.model("PlayerMatch", playerMatchSchema);
