import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../helpers/errors';

const jwt = require('jsonwebtoken');
require('dotenv').config();

const calculateToken = (userEmail = '', idUser = 0, admin = false) => {
  return jwt.sign(
    { email: userEmail, id: idUser, admin: admin },
    process.env.PRIVATE_KEY
  );
};

const getCurrentUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.cookies.user_token) {
    next(new ErrorHandler(401, 'Unauthorized user, please login'));
  }
  req.userInfo = jwt.decode(req.cookies.user_token);
  if (req.userInfo === undefined) {
    next(new ErrorHandler(401, 'Unauthorized user, please login'));
  } else {
    next();
  }
};

const checkUserPrivileges = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.userInfo);
    if (req.userInfo === undefined || !req.userInfo.admin) {
      throw new ErrorHandler(401, 'You must be admin to perform this action');
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

export { calculateToken, getCurrentUser, checkUserPrivileges };
