const usersRouter = require("./users");

// centraliser les routes
const setupRoutes = (app) => {
  app.use("/api/users", usersRouter);
};

module.exports = setupRoutes;
