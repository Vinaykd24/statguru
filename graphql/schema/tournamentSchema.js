const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    tournaments: [Tournament]
  }

  type Tournament {
    _id: ID!
    name: String!
    stage: String!
    isCompleted: String!
  }

  input TournamentInputData {
    name: String!
    stage: String!
    isCompleted: String!
  }

  type Mutation {
    createTournament(tournamentInput: TournamentInputData): Tournament!
  }
`;
