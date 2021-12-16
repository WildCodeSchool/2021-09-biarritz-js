import { Request, Response } from 'express';
const sessionsRouter = require('express').Router();

sessionsRouter.get('/coucou', (req: Request, res: Response) => {
  res.status(200).send('hibou sessions');
});

///////////// SURFSTYLES BY SESSIONS///////////
sessionsRouter.get('/:idsession/surfstyles', (req: Request, res: Response) => {
  const { idsession } = req.params;
  res
    .status(200)
    .send('get all surf styles for session id_session' + idsession);
});

module.exports = { sessionsRouter };
