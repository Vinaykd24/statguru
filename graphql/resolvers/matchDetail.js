const PlayerMatch = require("../../models/playerMatch");
const Player = require("../../models/player");

module.exports = {
  Query: {
    matchDetails: async () => {
      return await PlayerMatch.find();
    }
  },
  Mutation: {
    createMatchDetail: async function(parent, { matchDetailsInput }, req) {
      console.log(matchDetailsInput);
      const matchDetail = new PlayerMatch({
        playerId: matchDetailsInput.playerId,
        matchId: matchDetailsInput.matchId,
        isOut: matchDetailsInput.isOut,
        runs: matchDetailsInput.runs,
        balls: matchDetailsInput.balls,
        fours: matchDetailsInput.fours,
        sixes: matchDetailsInput.sixes,
        overs: matchDetailsInput.overs,
        maidens: matchDetailsInput.maidens,
        wickets: matchDetailsInput.wickets,
        runsGiven: matchDetailsInput.runsGiven
      });
      const createMatchDetail = await matchDetail.save();
      console.log(createMatchDetail.id);
      return {
        ...createMatchDetail._doc,
        _id: createMatchDetail._id.toString()
      };
    }
  },
  MatchDetail: {
    player: async parent => {
      console.log("parent value ->>>>", parent);
      return await PlayerMatch.findById(parent._id);
    }
  }
};
