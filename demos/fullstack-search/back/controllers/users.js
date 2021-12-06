const usersRouter = require("express").Router();
// Import the user model that we'll need in controller functions
const User = require("../models/user");
const Joi = require("joi");

// Application, écoute les requêtes de type GET envoyées à '/api/users
usersRouter.get("/", (req, res) => {
  //récupére le paramètre name
  const name = req.query.name;
  User.findUsers(name)
    .then((results) => {
      if (results) res.status(200).json(results);
    })
    .catch((err) => res.status(500).send(err));
});

usersRouter.get("/:id", (req, res) => {
  try {
    //récupére le paramètre id
    const id = req.params.id;

    const error = Joi.object({
      id: Joi.number().integer().min(0).required(),
    }).validate({ id }, { abortEarly: false }).error;
    if (error) throw error.message;

    User.findOneUser(id)
      .then((result) => res.status(200).json(result))
      .catch((err) =>
        res.status(500).send("Error retrieving data from database :" + err)
      );
  } catch (error) {
    res.status(422).json(error);
  }
});

// POST /api/users/
usersRouter.post("/", (req, res) => {
  try {
    const error = Joi.object({
      firstname: Joi.string().max(255).required(),
    }).validate(req.body, { abortEarly: false }).error;
    if (error) throw error.message;

    User.addUser(req.body)
      // on récupére l'id de l'élément inséré et on crée l'objet complet pour retour utilisateur
      .then((result) =>
        res.status(200).json({ id: result.insertId, ...req.body })
      )
      .catch((err) =>
        res.status(500).send("Error retrieving data from database :" + err)
      );
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = usersRouter;
