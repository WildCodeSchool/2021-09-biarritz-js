require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const api = require('./api');
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/coucou', (req, res) => {
  res.send('hibou');
});

app.use('/api', api);

module.exports = app;
