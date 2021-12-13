// Etape 2
const express = require("express");
const app = express();
const connection = require("./db-config");
const port = 3000;

// Etape 2
app.get("/coucou", (req, res) => {
  res.status(200).send("hibou");
});

// Etape 2
app.listen(port, () => {
  console.log(
    `Mon application est lancée et écoute les requêtes sur le port ${port}`
  );
});
