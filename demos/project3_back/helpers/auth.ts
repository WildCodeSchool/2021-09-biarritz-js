import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../helpers/errors';
import IUserInfo from '../interfaces/IUserInfo';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const calculateToken = (userEmail = '', idUser = 0, admin = false) => {
  return jwt.sign(
    { email: userEmail, id: idUser, admin: admin },
    process.env.PRIVATE_KEY as string
  );
};

interface ICookie {
  user_token: string;
}

const getCurrentSession = (req: Request, res: Response, next: NextFunction) => {
  const myCookie = req.cookies as ICookie;
  if (!myCookie.user_token) {
    next(new ErrorHandler(401, 'Unauthorized user, please login'));
  } else {
    req.userInfo = jwt.verify(
      myCookie.user_token,
      process.env.PRIVATE_KEY as string
    ) as IUserInfo;
    if (req.userInfo === undefined) {
      next(new ErrorHandler(401, 'Unauthorized user, please login'));
    } else {
      next();
    }
  }
};

const checkSessionPrivileges = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.userInfo === undefined || !req.userInfo.admin) {
    next(new ErrorHandler(401, 'You must be admin to perform this action'));
  } else {
    next();
  }
};

export { calculateToken, getCurrentSession, checkSessionPrivileges };
