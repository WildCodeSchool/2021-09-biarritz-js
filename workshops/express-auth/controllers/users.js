const usersRouteur = require("express").Router();

// mes routes GET, POST, DELETE
usersRouteur.post("/test", (req, res) => {
  const password = req.body.password;
  // crypter

  res.status(200).send(password);
});

module.exports = {
  usersRouteur,
};
