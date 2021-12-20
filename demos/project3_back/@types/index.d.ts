import * as express from 'express';
import IUserInfo from '../interfaces/IUserInfo';
declare global {
  namespace Express {
    interface Request {
      userInfo?: IUserInfo;
    }
  }
}
