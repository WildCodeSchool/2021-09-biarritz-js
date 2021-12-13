const { usersRouteur } = require("./users");
const authRouteur = require("./auth");

const setupRoutes = (app) => {
  app.use("/api/users", usersRouteur);
  app.use("/api/auth", authRouteur);
  //   app.use("/api/models", modelsRouteur);
  //   app.use("/api/brands", brandsRouteur);
};

module.exports = setupRoutes;
