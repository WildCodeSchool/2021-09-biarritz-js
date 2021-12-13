// Etape 2
const express = require("express");
const setupRoutes = require("./controllers");
const app = express();
const connection = require("./db-config");
const port = 3000;

// indispensable pour lire le req.body
app.use(express.json());

// Etape 2
app.get("/coucou", (req, res) => {
  res.status(200).send("hibou");
});

// Etape 6
setupRoutes(app);

// Etape 2
app.listen(port, () => {
  console.log(
    `Mon application est lancée et écoute les requêtes sur le port ${port}`
  );
});
