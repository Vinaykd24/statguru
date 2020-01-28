const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
const grapqlSchema = require("./graphql/schema/index");
const grapqlResolver = require("./graphql/resolvers/index");

const combineSchema = require("./graphql/schema");
const combineResolvers = require("./graphql/resolvers");
const { buildSchema } = require("graphql");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const url =
  "mongodb+srv://vinaykd:AUrPce5jyKW4Qacy@cluster0-5n844.mongodb.net/game-play-dev";
const local_url = "mongodb://127.0.0.1:27017";

// Construct a schema, using GraphQL schema language
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

const server = new ApolloServer({
  typeDefs: combineSchema,
  resolvers: combineResolvers,
  graphiql: true
});

server.applyMiddleware({ app });
app.use(cors());

// The root provides a resolver function for each API endpoint
// const root = {
//   hello: () => {
//     return "Hello world!";
//   }
// };

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     // schema: grapqlSchema,
//     // rootValue: grapqlResolver,
//     schema: combineSchema,
//     rootValue: combineResolvers,
//     graphiql: true
//   })
// );

mongoose
  .connect(local_url)
  .then(result => {
    console.log("🚀 Connected to MongoDb!");
    app.listen(4000);
    console.log(
      "Running a GraphQL API server at http://localhost:4000/graphql"
    );
  })
  .catch(err => {
    console.log(err);
  });
