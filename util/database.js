const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url =
  "mongodb+srv://vinaykd:AUrPce5jyKW4Qacy@cluster0-5n844.mongodb.net/game-play-dev";
const local_url = "http://localhost:27017";
let _db;

const mongoConnect = callback => {
  MongoClient.connect(local_url)
    .then(client => {
      console.log("🚀 Connected to MongoDb!");
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
