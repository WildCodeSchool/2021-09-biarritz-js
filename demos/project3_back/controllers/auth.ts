import { Request, Response, NextFunction } from 'express';
const authRouter = require('express').Router();
import * as User from '../models/user';
import IUser from '../interfaces/IUser';
import { ErrorHandler } from '../helpers/errors';

import { calculateToken } from '../helpers/auth';

authRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const user: IUser = await User.getByEmail(email);
      if (!user) throw new ErrorHandler(401, 'This user does not exist');
      else {
        const passwordIsCorrect: boolean = await User.verifyPassword(
          password,
          user.password
        );
        if (passwordIsCorrect) {
          const token = calculateToken(email, Number(user.id_user), user.admin);
          res.cookie('user_token', token);
          res.send();
        } else throw new ErrorHandler(401, 'Invalid Credentials');
      }
    } catch (err) {
      next(err);
    }
  }
);

export default authRouter;
