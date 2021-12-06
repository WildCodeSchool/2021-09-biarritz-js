const usersRouter = require("./users");
const gradesRouter = require("./grades");

const setupRoutes = (app) => {
  app.use("/api/users", usersRouter);
  // route factice pour l'exemple, ne contient pas de modèle
  app.use("/api/grades", gradesRouter);
};

module.exports = {
  setupRoutes,
};
