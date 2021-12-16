const usersRouter = require('express').Router();
import { Request, Response } from 'express';
const Session = require('../models/session');

interface UserInfo {
  firstname: string;
  lastname: string;
  age: number;
  sex: boolean;
  email: string;
}

usersRouter.get('/coucou', (req: Request, res: Response) => {
  res.status(200).send('hibou users');
});

///////////// USERS ///////////////
usersRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send('get all users');
});

usersRouter.get('/:iduser', (req: Request, res: Response) => {
  const { iduser } = req.params;
  res.status(200).send('get user for id_user ' + iduser);
});

usersRouter.post('/', (req: Request, res: Response) => {
  const user: UserInfo = req.body;
  console.log(user.email);
  res.status(200).send('post user');
});

usersRouter.put('/:iduser', (req: Request, res: Response) => {
  const { iduser } = req.params;
  res.status(200).send('put user for id_user ' + iduser);
});

usersRouter.delete('/:iduser', (req: Request, res: Response) => {
  const { iduser } = req.params;
  res.status(200).send('delete user for id_user ' + iduser);
});

///////////// SESSIONS BY USER //////////////

usersRouter.get('/:iduser/sessions', (req: Request, res: Response) => {
  const { iduser } = req.params;

  //   Session.findByUser(iduser).then((sessions: Array<Object>) =>
  //     res.status(200).json(sessions)
  //   );

  res.status(200).send(`SELECT s.* 
FROM sessions s
INNER JOIN user_has_session us 
ON s.id_session = us.id_session
AND us.id_user = ${iduser}
AND s.date > NOW()`);
});

module.exports = { usersRouter };
