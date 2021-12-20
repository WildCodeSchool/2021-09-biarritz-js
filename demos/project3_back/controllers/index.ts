import express from 'express';
import usersRouter from './users';
import addressesRouter from './adresses';

const setupRoutes = (app: express.Application) => {
  app.use('/api/users', usersRouter);
  app.use('/api/addresses', addressesRouter);
};

export default setupRoutes;
