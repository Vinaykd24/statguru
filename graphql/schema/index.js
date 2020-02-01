const { gql } = require("apollo-server-express");
const tournamentSchema = require("./tournamentSchema");
const matchSchema = require("./matchSchema");
const playerGqlSchema = require("./playerSchema");
const matchDetailSchema = require("./matchDetailSchema");
// const playerSchema = require("./playerSchema");

const linkSchema = gql`
  type Query {
    _: Boolean
  }
`;

module.exports = [
  linkSchema,
  tournamentSchema,
  playerGqlSchema,
  matchSchema,
  matchDetailSchema
];
