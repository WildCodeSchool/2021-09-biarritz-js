const express = require('express');
const app = express();
const routes = require('./controllers');
const port: number = 3000;

app.use(express.json());

routes.setupRoutes(app);

app.listen(port, (err: Error) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
