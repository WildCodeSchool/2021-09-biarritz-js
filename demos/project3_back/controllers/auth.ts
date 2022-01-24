import { Request, Response, NextFunction, Router } from 'express';
import * as User from '../models/user';
import IUser from '../interfaces/IUser';
import { ErrorHandler } from '../helpers/errors';
import { calculateToken } from '../helpers/auth';

const authRouter = Router();

authRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    User.getByEmail(email)
      .then(async (user) => {
        if (!user) throw new ErrorHandler(401, 'This user does not exist');
        else {
          const passwordIsCorrect: boolean = await User.verifyPassword(
            password,
            user.password
          );
          if (passwordIsCorrect) {
            const token = calculateToken(
              email,
              Number(user.id_user),
              user.admin
            );
            res.cookie('user_token', token);
            res.json({
              id: user.id_user,
              firstname: user.firstname,
              admin: user.admin,
            });
          } else throw new ErrorHandler(401, 'Invalid Credentials');
        }
      })
      .catch((err) => next(err));
  } catch (err) {
    next(err);
  }
});

export default authRouter;
