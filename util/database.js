const mongodb = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.vevti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
    .then(client => {
      console.log('Connected to Mongo DB!');
      callback(client);
    })
    .catch(err => console.log(err));
};

module.exports = mongoConnect;
