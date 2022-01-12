require('dotenv').config();
const express = require('express');
const setupRoutes = require('./routes');
const app = express();

app.use(express.json());

// Etape 2
app.get('/coucou', (req, res) => {
  res.status(200).send('hibou');
});

setupRoutes(app);

// Please keep this module.exports app, we need it for the tests !
module.exports = app;
