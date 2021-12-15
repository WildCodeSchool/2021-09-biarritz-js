const connection = require("../db-config");
const Joi = require("joi");

const emailAlreadyExists = async (email) => {
  // Aller voir dans la base de données si un utilisateur avec cet email existe

  //   version avec async/await
  const [user] = await findUserByEmail(email);
  return user[0] ? true : false;

  //    Version avec .then
  //   return new Promise(function (resolve, reject) {
  //     findUserByEmail(email)
  //       .then(([user]) => {
  //         if (user[0]) {
  //           resolve(true);
  //         } else {
  //           resolve(false);
  //         }
  //       })
  //       .catch((err) => reject(err));
  //   });
};

const findUserByEmail = (email) => {
  return connection
    .promise()
    .query("SELECT * FROM users WHERE email = ?", [email]);
};

// fonction 2
const validate = (data) => {
  return Joi.object({
    email: Joi.string().email().max(255).required(),
    password: Joi.string().min(8).max(12).required(),
  }).validate(data, { abortEarly: false }).error;
};

// fonction 3

//test fonction emailAlreadyExists
emailAlreadyExists("lydiepluvinage@yahoo.fr").then((exists) =>
  console.log(exists)
);

//test fonction validate
console.log(validate({ email: "lydie@wild", password: "curry" }));

module.exports = { emailAlreadyExists, validate };
