const usersRouter = require("express").Router();
const User = require("../models/user");

// créer les routes pour users
usersRouter.get("/coucou", (req, res) => {
  res.status(200).send("hibou");
});

module.exports = usersRouter;
