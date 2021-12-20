import express from 'express';
import usersRouter from './users';
import addressesRouter from './adresses';
import authRouter from './auth';

const setupRoutes = (app: express.Application) => {
  app.use('/api/users', usersRouter);
  app.use('/api/addresses', addressesRouter);
  app.use('/api/login', authRouter);
};

export default setupRoutes;
