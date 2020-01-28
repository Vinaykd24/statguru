const Tournament = require("../models/tournament");

// module.exports = {
//   hello() {
//     return {
//       text: "Hello World!",
//       views: 1234
//     };
//   }
// };

module.exports = {
  createTournament: async function({ tournamentInput }, req) {
    const tournament = new Tournament({
      name: tournamentInput.name,
      stage: tournamentInput.stage,
      isCompleted: tournamentInput.isCompleted
    });
    const createdTournament = await tournament.save();
    return { ...createdTournament._doc, _id: createdTournament._id.toString() };
  }
};
