var Sequelize = require('sequelize');

var Sequelize = require('sequelize');

var db = new Sequelize(
  "tripplanner",
  "postgres",
  "8colt90",
   {
     "dialect": "postgres",
     "port": 5432
   }
);
module.exports = db;

