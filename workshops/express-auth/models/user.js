// create table users(id_user integer not null auto_increment, firstname varchar(100),
// lastname varchar(150), email varchar(255), password varchar(255), primary key (`id_user`));
const argon = require("argon2");

const hashOptions = {
  type: argon.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const cryptePassword = (password) => {
  return argon.hash(password, hashOptions);
};

// test de l'étape 8
cryptePassword("curry").then((hashedPassword) => console.log(hashedPassword));

module.exports = cryptePassword;
