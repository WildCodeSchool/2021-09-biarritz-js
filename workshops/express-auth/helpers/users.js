// étape 22
//dire qu'on va lire dans le .env
require('dotenv').config();
const jwt = require('jsonwebtoken');

// étape 24 - rajout de l'id
const calculateToken = (userEmail = '', userId = 0) => {
  return jwt.sign({ email: userEmail, id: userId }, process.env.PRIVATE_KEY);
};

//étape 27 - middleware
const readUserFromCookie = (req, res, next) => {
  const userInfo = jwt.verify(req.cookies.monCookie, process.env.PRIVATE_KEY);
  req.userId = userInfo.id;
  next();
};

module.exports = { calculateToken, readUserFromCookie };
