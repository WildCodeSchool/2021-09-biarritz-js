const connection = require("../db-config");

const findUsers = (name) => {
  // Aller chercher dans la base de données les utilisateurs
  // par défaut, on récupére tous les users
  let sqlQuery = "SELECT * FROM users";
  // si le paramètre name est indiqué, on souhaite filtrer les utilisateurs
  if (name !== undefined) {
    sqlQuery += ` WHERE firstname LIKE '%${name}%'`;
  }
  return connection
    .promise()
    .query(sqlQuery)
    .then((response) => response[0]);
};

const findOneUser = (id) => {
  // Aller chercher un utilisateur en fonction de son id
  return connection
    .promise()
    .query("SELECT * FROM users WHERE id = ?", id)
    .then((response) => response[0]);
};

const addUser = ({ firstname }) => {
  // Insère en base l'utilisateur demandé
  return (
    connection
      .promise()
      .query("INSERT INTO users (firstname) VALUES (?)", firstname)
      // on récupére l'id de l'élément inséré et on le renvoie
      .then((response) => response[0])
  );
};

module.exports = {
  findUsers,
  findOneUser,
  addUser,
};
