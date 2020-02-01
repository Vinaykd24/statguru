const Player = require("../../models/player");
const { GraphQLDate, GraphQLDateTime } = require("graphql-iso-date");

module.exports = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  Query: {
    players: async () => {
      return await Player.find();
    }
  },
  Mutation: {
    createPlayer: async function(parent, { playerInput }, req) {
      debugger;
      console.log(playerInput);
      const player = new Player({
        pFirstName: playerInput.pFirstName,
        pLastName: playerInput.pLastName,
        playerRole: playerInput.playerRole,
        playerDob: playerInput.playerDob,
        playerBio: playerInput.playerBio
      });
      const createdPlayer = await player.save();
      console.log(createdPlayer.id);
      return {
        ...createdPlayer._doc,
        _id: createdPlayer._id.toString()
      };
    }
  }
};
