import IAddress from '../interfaces/IAddress';
import IUser from '../interfaces/IUser';
import IUserInfo from '../interfaces/IUserInfo';
declare global {
  namespace Express {
    interface Request {
      userInfo?: IUserInfo;
      record?: IUser | IAddress; // used to store deleted record to send appropriate responses to react-admin
    }
  }
}
