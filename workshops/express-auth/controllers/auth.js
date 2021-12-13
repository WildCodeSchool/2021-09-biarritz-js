const authRouteur = require("express").Router();

authRouteur.get("/coucoucou", (req, res) => {
  res.status(200).send("hiboubou");
});

module.exports = authRouteur;
