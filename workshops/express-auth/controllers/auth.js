const authRouteur = require('express').Router();
const { getByEmail, verifyPassword } = require('../models/user');
const calculateToken = require('../helpers/users');

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
            // étape 23
            // générer un token
            const token = calculateToken(email);

            // l'envoyer par cookie
            res.cookie('monCookie', token);
            res.send();
          }
        });
      }
    });
});

module.exports = authRouteur;
