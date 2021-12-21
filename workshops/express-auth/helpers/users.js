// étape 22
//dire qu'on va lire dans le .env
require('dotenv').config();
const jwt = require('jsonwebtoken');

// étape 24 - rajout de l'id
const calculateToken = (userEmail = '', userId = 0) => {
  return jwt.sign({ email: userEmail, id: userId }, process.env.PRIVATE_KEY);
};

module.exports = calculateToken;
