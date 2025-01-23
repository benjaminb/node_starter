const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();
CONNECTION_DETAILS = {
  host: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
