// étape 5
const usersRouteur = require('express').Router();
const User = require('../models/user');

// étape 8bis
usersRouteur.post('/test', (req, res) => {
  const password = req.body.password;
  // crypter
  User.cryptePassword(password).then((hashedPassword) =>
    res.status(200).send(hashedPassword)
  );
});

// étape 25
usersRouteur.put('/', MonMiddleWare, (req, res) => {
  res.status(200).send(req.userId);
});

// étape 9
usersRouteur.post('/', (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  // étape 10
  const validationErrors = User.validate(req.body);
  if (validationErrors) {
    // étape 11
    res.status(422).json(validationErrors.details);
  } else {
    // étape 12
    User.cryptePassword(password).then((hashedPassword) =>
      // étape 14
      User.create(firstname, lastname, email, hashedPassword)
        .then((result) => result[0].insertId)
        .then((id) => res.status(201).json({ id, ...req.body }))
        .catch((error) =>
          res.status(500).send('Impossible de créer cet utilisateur')
        )
    );
  }
});

module.exports = {
  usersRouteur,
};
