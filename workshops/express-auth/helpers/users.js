// étape 22
//dire qu'on va lire dans le .env
require('dotenv').config();
const jwt = require('jsonwebtoken');

const calculateToken = (userEmail = '') => {
  return jwt.sign({ email: userEmail }, process.env.PRIVATE_KEY);
};

module.exports = calculateToken;
