const playerResolvers = require("./player");
const matchResolvers = require("./match");
const tournamentResolvers = require("./tournament");
const matchDetailResolvers = require("./matchDetail");

module.exports = [
  playerResolvers,
  matchResolvers,
  tournamentResolvers,
  matchDetailResolvers
];
