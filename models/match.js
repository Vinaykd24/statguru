const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const matchSchema = new Schema({
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  oppTeam: { type: String, required: true },
  oppTeamScore: { type: String, required: true },
  oppTeamWkts: { type: String, required: true },
  homeTeamScore: { type: String, required: true },
  homeTeamWkts: { type: String, required: true },
  result: { type: String, required: true },
  playerId: { type: String, required: true },
  tourId: { type: String, required: true },
  resultFla: { type: Boolean, required: true }
});

module.exports = mongoose.model("Match", matchSchema);
