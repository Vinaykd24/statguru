const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  name: { type: String, required: true },
  stage: { type: String, required: true },
  isCompleted: { type: String, required: true }
});

module.exports = mongoose.model("Tournament", tournamentSchema);
