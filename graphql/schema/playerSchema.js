const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    players: [Player]
  }

  type Player {
    _id: ID!
    pFirstName: String!
    pLastName: String!
    playerRole: String!
    playerDob: String!
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
