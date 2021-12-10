// TODO1 - importer express
const express = require("express");
// TODO2 - créer l'application express
const app = express();
//TODO13 - cryptage
const argon2 = require("argon2");

//TODO 15 - token & cookie
const jwt = require("jsonwebtoken");

// TODO7 - INDISPENSABLE POUR LIRE REQ.BODY
app.use(express.json());
// TODO 10 - Validation des données
const Joi = require("joi");

// TODO3 - se connecter à la base de données (grace au .env)
const connection = require("./db-config");

// TODO5 - route de test : coucou hibou
app.get("/coucou", (req, res) => {
  //   res.status(200).json({ coucou: "hibou" }); // génère du json
  res.status(200).send("hibou");
});

// TODO6 - route GET plants
app.get("/api/plants", (req, res) => {
  //TODO9 - Rajouter la récupération du filtre dans l'url
  const { name } = req.query;
  let sqlParams = [];
  let sqlQuery = "SELECT * FROM plants";
  if (name) {
    sqlQuery += " WHERE name LIKE ?";
    // utilise les % pour que le LIKE marche dans la requête
    sqlParams.push("%" + name + "%");
  }
  connection
    .promise()
    .query(sqlQuery, sqlParams)
    .then((result) => result[0])
    .then((data) => res.status(200).json(data));
});

// TODO7 - route POST plants
app.post("/api/plants", (req, res) => {
  const { name } = req.body;
  // TODO 10 - Validation des données
  const { error } = Joi.object({
    name: Joi.string().min(1).max(100).required(),
  }).validate({ name }, { abortEarly: false });

  if (error) {
    // TODO 10 - Validation des données
    res.status(422).json(error);
  } else {
    connection
      .promise()
      .query("INSERT INTO plants (name) VALUES (?)", name)
      .then((result) => result[0].insertId)
      .then((id) => {
        res.status(201).json({ id, name });
      });
  }
});

//TODO 11 - Route DELETE
app.delete("/api/plants/:id", (req, res) => {
  //récupérer le paramètre directement depuis l'url de la requete
  const { id } = req.params;
  connection
    .promise()
    .query("DELETE FROM plants WHERE id_plant = ?", id)
    .then((result) => result[0].affectedRows === 1)
    .then((operationSuccessfull) => {
      operationSuccessfull
        ? res.status(200).json("Operation Successfull")
        : res.status(404).send("Plant not found");
    });
});

// TODO 12 - Route PUT
app.put("/api/plants/:id", (req, res) => {
  //récupérer le paramètre directement depuis l'url de la requete
  const { id } = req.params;
  const { name } = req.body;

  // on oublie pas de valider les données utilisateurs
  const { error } = Joi.object({
    name: Joi.string().min(1).max(100).required(),
  }).validate({ name }, { abortEarly: false });

  if (error) {
    res.status(422).send("Incorrect data");
  } else {
    connection
      .promise()
      .query("UPDATE plants SET name = ? WHERE id_plant = ?", [name, id])
      .then((result) => result[0].affectedRows === 1)
      .then((operationSuccessfull) => {
        operationSuccessfull
          ? res.status(200).json({ id_plant: id, name })
          : res.status(404).send("Plant not found");
      });
  }
});

// TODO8 - Route GET /:id plants
app.get("/api/plants/:id", (req, res) => {
  //récupérer le paramètre directement depuis l'url de la requete
  const { id } = req.params;
  connection
    .promise()
    .query("SELECT * FROM plants WHERE id_plant = ?", id)
    .then((result) => result[0])
    .then((data) => res.status(200).json(data));
});

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPlant = (plainPlant) => {
  return argon2.hash(plainPlant, hashingOptions);
};

const verifyPlant = (plainPlant, hashedPlant) => {
  return argon2.verify(hashedPlant, plainPlant, hashingOptions);
};

//TODO 13 - cryptage
app.post("/api/stnalp", async (req, res) => {
  // récupérer dans body le name non crypté
  const { name } = req.body;
  // crypter le name
  const hashedPlant = await hashPlant(name);
  // insertion en base
  connection
    .promise()
    .query("INSERT INTO plants (name) VALUES (?)", hashedPlant)
    .then((result) => result[0].insertId)
    .then((id) => {
      res.status(201).json({ id, name });
    });
});

// TODO 15 - Token & cookie
const calculateToken = (id_plant = 0) => {
  return jwt.sign({ id: id_plant }, process.env.PRIVATE_KEY);
};

//TODO 14 - login
app.post("/api/login", async (req, res) => {
  const { id_plant, name } = req.body;

  const [result] = await connection
    .promise()
    .query("SELECT * FROM plants WHERE id_plant = ?", [id_plant]);
  const plantConnected = await verifyPlant(name, result[0].name);

  // TODO 15 - renvoyer un cookie contenant le token

  if (plantConnected) {
    // générer le token
    const token = calculateToken(result[0].id_plant);
    // envoyer le cookie
    res.cookie("id_plant", token);
    res.send();
  } else {
    res.status(401).send("Combinaison id/name invalide");
  }
});

// TODO4 - dire à l'application d'écouter un port
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
