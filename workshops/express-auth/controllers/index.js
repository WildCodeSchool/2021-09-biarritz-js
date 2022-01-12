// étape 6
const { usersRouteur } = require('./users');
const authRouteur = require('./auth');

// étape 6
const setupRoutes = (app) => {
  app.use('/api/users', usersRouteur);
  // étape 15
  app.use('/api/auth', authRouteur);
  //   app.use("/api/models", modelsRouteur);
  //   app.use("/api/brands", brandsRouteur);
};

// étape 6
module.exports = setupRoutes;
