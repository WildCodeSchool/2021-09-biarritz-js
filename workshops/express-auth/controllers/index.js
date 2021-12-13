const { usersRouteur } = require("./users");

const setupRoutes = (app) => {
  app.use("/api/users", usersRouteur);
  //   app.use("/api/cars", carsRouteur);
  //   app.use("/api/models", modelsRouteur);
  //   app.use("/api/brands", brandsRouteur);
};

module.exports = setupRoutes;
