// Etape 2
//dire qu'on va lire dans le .env
require('dotenv').config();
// connecte à une base mysql
const mysql = require('mysql2');

//crée une connection à partir des infos du .env
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the nodeJS server PORT !
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = connection;
