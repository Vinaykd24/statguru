const { buildSchema } = require("graphql");

// module.exports = buildSchema(`
// type TestData {
//   text: String!
//   views: Int!
// }
// type RootQuery {
//   hello: TestData!
// }
//   schema {
//     query: RootQuery
//   }
// `);

module.exports = buildSchema(`
type Tournament{
  _id: ID!
  name: String!
  stage: String!
  isCompleted: String!
}
input TournamentInputData{
  name: String!
  stage: String!
  isCompleted: String!
}

type RootQuery{
  hello: String
}

type RootMutation {
  createTournament(tournamentInput: TournamentInputData): Tournament!
}
schema {
  query: RootQuery
  mutation: RootMutation
}
`);
