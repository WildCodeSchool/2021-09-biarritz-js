const usersRouteur = require("express").Router();
const User = require("../models/user");

// mes routes GET, POST, DELETE
usersRouteur.post("/test", (req, res) => {
  const password = req.body.password;
  // crypter
  User.cryptePassword(password).then((hashedPassword) =>
    res.status(200).send(hashedPassword)
  );
});

usersRouteur.post("/", (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const validationErrors = User.validate(req.body);
  if (validationErrors) {
    res.status(422).json(validationErrors.details);
  } else {
    User.cryptePassword(password).then((hashedPassword) =>
      User.create(firstname, lastname, email, hashedPassword)
        .then((result) => result[0].insertId)
        .then((id) => res.status(201).json({ id, ...req.body }))
        .catch((error) =>
          res.status(500).send("Impossible de créer cet utilisateur")
        )
    );
  }
});

module.exports = {
  usersRouteur,
};
