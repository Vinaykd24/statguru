const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    matchDetails: [MatchDetail]
  }

  type MatchDetail {
    _id: ID!
    playerId: String!
    matchId: String!
    isOut: Boolean!
    runs: Int!
    balls: Int!
    fours: Int!
    sixes: Int!
    overs: Int!
    maidens: Int!
    wickets: Int!
    runsGiven: Int!
    player: Player
  }

  input MatchDetailInputData {
    playerId: String!
    matchId: String!
    isOut: Boolean!
    runs: Int!
    balls: Int!
    fours: Int!
    sixes: Int!
    overs: Int!
    maidens: Int!
    wickets: Int!
    runsGiven: Int!
  }

  extend type Mutation {
    createMatchDetail(matchDetailInput: MatchDetailInputData): MatchDetail!
  }
`;
