const { gql } = require("apollo-server-express");
const { GraphQLDate, GraphQLDateTime } = require("graphql-iso-date");

module.exports = gql`
  scalar Date
  scalar DateTime
  extend type Query {
    players: [Player]
  }

  type Player {
    _id: ID!
    pFirstName: String!
    pLastName: String!
    playerRole: String!
    playerDob: DateTime!
    playerBio: String!
  }

  input PlayerInputData {
    pFirstName: String!
    pLastName: String!
    playerRole: String!
    playerDob: String
    playerBio: String!
  }

  extend type Mutation {
    createPlayer(playerInput: PlayerInputData): Player!
  }
`;
