const Match = require("../../models/match");
const Player = require("../../models/player");
const Tournament = require("../../models/tournament");
const { GraphQLDate, GraphQLDateTime } = require("graphql-iso-date");

module.exports = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  Query: {
    matches: async () => {
      return await Match.find();
    },
    matchScoreCard: async (parent, { id }) => {
      return await Player.find({ matchId: id });
    },
    matchInfo: async (parent, { id }) => {
      return await Match.findById(id);
    }
  },
  Mutation: {
    createMatch: async function(parent, { matchInput }, req) {
      debugger;
      console.log(matchInput);
      const match = new Match({
        date: matchInput.date,
        venue: matchInput.venue,
        oppTeam: matchInput.oppTeam,
        oppTeamScore: matchInput.oppTeamScore,
        oppTeamWkts: matchInput.oppTeamWkts,
        homeTeamScore: matchInput.homeTeamScore,
        homeTeamWkts: matchInput.homeTeamWkts,
        result: matchInput.result,
        playerId: matchInput.playerId,
        tourId: matchInput.tourId,
        resultFla: matchInput.resultFla
      });
      const createdMatch = await match.save();
      console.log(createdMatch.id);
      return {
        ...createdMatch._doc,
        _id: createdMatch._id.toString()
      };
    }
  },
  Match: {
    tournament: async parent => {
      return await Tournament.findById(parent.id);
    }
  }
};
