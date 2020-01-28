const Tournament = require("../../models/tournament");

module.exports = {
  Query: {
    tournaments: async () => {
      return await Tournament.find();
    }
  },
  Mutation: {
    createTournament: async function(parent, { tournamentInput }, req) {
      debugger;
      console.log(tournamentInput);
      const tournament = new Tournament({
        name: tournamentInput.name,
        stage: tournamentInput.stage,
        isCompleted: tournamentInput.isCompleted
      });
      const createdTournament = await tournament.save();
      console.log(createdTournament.id);
      return {
        ...createdTournament._doc,
        _id: createdTournament._id.toString()
      };
    }
  }
};
