const gradesRouter = require("express").Router();

//il faut aller dans /api/grades/coucou pour déclencher cette route
gradesRouter.get("/coucou", (req, res) => {
  res.status(200).json("hibou");
});

module.exports = gradesRouter;
