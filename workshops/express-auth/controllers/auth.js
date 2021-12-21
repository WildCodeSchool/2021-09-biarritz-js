const authRouteur = require('express').Router();
const { getByEmail, verifyPassword } = require('../models/user');

// étape 16
authRouteur.get('/coucoucou', (req, res) => {
  res.status(200).send('hiboubou');
});

// étape 17
authRouteur.post('/login', (req, res) => {
  const { email, password } = req.body;
  // étape 19
  getByEmail(email)
    .then(([users]) => users[0])
    .then((user) => {
      if (!user) {
        res.status(422).send('email incorrect');
      } else {
        // étape 21
        verifyPassword(password, user.password).then((passwordOk) => {
          // étape 22
          if (passwordOk) {
          }
        });
      }
    });
});

module.exports = authRouteur;
