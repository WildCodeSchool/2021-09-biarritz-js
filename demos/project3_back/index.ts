import express from 'express';
const cookieParser = require('cookie-parser');
require('dotenv').config();
import { handleError, ErrorHandler } from './helpers/errors';
import setupRoutes from './controllers';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

setupRoutes(app);

// A mettre à la fin pour gèrer les erreurs qui sortiront des routes
app.use(handleError);

app.get('/error', (req, res) => {
  throw new ErrorHandler(500, 'Internal server error');
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
