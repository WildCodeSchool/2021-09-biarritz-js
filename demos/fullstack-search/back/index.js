const connection = require("./db-config");
const cors = require("cors");
const express = require("express");
const app = express();
const { setupRoutes } = require("./controllers");

// utilise le package cors pour autoriser les appels extérieurs
app.use(
  cors({
    origin: "*",
  })
);

// pour pouvoir lire le req.body
app.use(express.json());

const port = process.env.PORT || 8000;

// Va te connecter avec toutes les routes des controlleurs
setupRoutes(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
