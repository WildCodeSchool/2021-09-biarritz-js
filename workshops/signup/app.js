const express = require("express");
const setupRoutes = require("./controllers/index");

// créer application express
const app = express();

//json
app.use(express.json());

//appeler mes routes
setupRoutes(app);

// listen
app.listen(3000, () => {
  console.log("Application lancée sur le port 3000");
});
