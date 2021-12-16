const Users = require('./users');
const Sessions = require('./sessions');

const setupRoutes = (app: any) => {
  app.use('/api/users', Users.usersRouter);
  app.use('/api/sessions', Sessions.sessionsRouter);
};

module.exports = { setupRoutes };
