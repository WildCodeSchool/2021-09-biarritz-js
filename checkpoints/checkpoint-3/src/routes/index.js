const albumRouter = require('./albums');
const trackRouter = require('./tracks');

const setupRoutes = (app) => {
  app.use('/api/tracks', trackRouter);
  app.use('/api/albums', albumRouter);
};

module.exports = setupRoutes;
