const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const graphqlHttp = require("express-graphql");
const grapqlSchema = require("./graphql/schema");
const grapqlResolver = require("./graphql/resolvers");
// const mongoConnect = require("./util/database").mongoConnect;
const url =
  "mongodb+srv://vinaykd:AUrPce5jyKW4Qacy@cluster0-5n844.mongodb.net/game-play-dev";

const errorController = require("./controllers/error");
// const User = require("./models/user");

const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

// const adminRoutes = require("./routes/admin");
// const gp_adminRoutes = require("./routes/gp-admin");
// const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  //   User.findById("5baa2528563f16379fc8a610")
  //     .then(user => {
  //       req.user = new User(user.name, user.email, user.cart, user._id);
  //       next();
  //     })
  //     .catch(err => console.log(err));
  next();
});

// app.use("/admin", adminRoutes);
// app.use("/admin", gp_adminRoutes);
// app.use(shopRoutes);

// app.use(errorController.get404);

app.use(
  "/graphql",
  graphqlHttp({
    schema: grapqlSchema,
    rootValue: grapqlResolver,
    graphiql: true
  })
);

// mongoConnect(() => {
//   console.log();
//   app.listen(3000);
// });
mongoose
  .connect(url)
  .then(result => {
    console.log("🚀 Connected to MongoDb!");
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
