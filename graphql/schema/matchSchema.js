const { gql } = require("apollo-server-express");
const { GraphQLDate, GraphQLDateTime } = require("graphql-iso-date");

module.exports = gql`
  extend type Query {
    matches: [Match]
    matchScoreCard(id: String!): [MatchScoreCard]
    matchInfo(id: String!): Match
  }

  type Match {
    _id: ID
    date: DateTime!
    venue: String!
    oppTeam: String!
    oppTeamScore: Int!
    oppTeamWkts: Int!
    homeTeamScore: Int!
    homeTeamWkts: Int!
    result: String!
    playerId: String!
    tourId: String!
    resultFla: String!
    tournament: Tournament
  }

  type MatchScoreCard {
    playerId: String
    pFirstName: String
    pLastName: String
    playerRole: String
    scoreDetail: [MatchDetail]
    matchInfo: Match
  }

  input MatchInputData {
    date: String!
    venue: String!
    oppTeam: String!
    oppTeamScore: Int!
    oppTeamWkts: Int!
    homeTeamScore: Int!
    homeTeamWkts: Int!
    result: String!
    resultFla: Boolean!
    playerId: String!
    tourId: String!
  }

  extend type Mutation {
    createMatch(matchInput: MatchInputData): Match!
  }
`;
