import { NextFunction, Request, Response } from 'express';
const usersRouter = require('express').Router();
import * as User from '../models/user';
import * as Address from '../models/address';
import * as Auth from '../helpers/auth';
import IUser from '../interfaces/IUser';
import IAddress from '../interfaces/IAddress';
import { ErrorHandler } from '../helpers/errors';

///////////// USERS ///////////////
usersRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    User.getAllUsers().then((users: Array<IUser>) =>
      res.status(200).json(users)
    );
  } catch (err) {
    next(err);
  }
});

usersRouter.get(
  '/:iduser',
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { iduser } = req.params;
      User.getById(Number(iduser)).then((users: IUser) =>
        res.status(200).json(users)
      );
    } catch (err) {
      next(err);
    }
  }
);

usersRouter.post(
  '/',
  Auth.getCurrentSession,
  User.validateUser,
  User.emailIsFree,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: IUser = req.body;
      user.id_user = await User.addUser(user);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }
);

usersRouter.put(
  '/:idUser',
  Auth.getCurrentSession,
  User.validateUser,
  User.userExists,
  async (req: Request, res: Response, next: NextFunction) => {
    const { idUser } = req.params;

    const userUpdated = await User.updateUser(Number(idUser), req.body);
    if (userUpdated) {
      res.status(200).send('User updated');
    } else {
      throw new ErrorHandler(500, `User cannot be updated`);
    }
  }
);

usersRouter.delete(
  '/:idUser',
  Auth.getCurrentSession,
  Auth.checkSessionPrivileges,
  User.userExists,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idUser } = req.params;
      const userDeleted = await User.deleteUser(Number(idUser));
      if (userDeleted) {
        res.status(200).send('User deleted');
      } else {
        throw new ErrorHandler(500, `This user cannot be deleted`);
      }
    } catch (err) {
      next(err);
    }
  }
);

////////// ADDRESSES BY USER
usersRouter.get(
  '/:idUser/addresses',
  User.userExists,
  Auth.getCurrentSession,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idUser } = req.params;

      const addresses: Array<IAddress> = await Address.getByUser(
        Number(idUser)
      );
      res.status(200).json(addresses);
    } catch (err) {
      next(err);
    }
  }
);

usersRouter.delete(
  '/:idUser/addresses',
  Auth.getCurrentSession,
  Auth.checkSessionPrivileges,
  User.userExists,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idUser } = req.params;

      const addressesDeleted = await Address.deleteAddressByUser(
        Number(idUser)
      );
      if (addressesDeleted) {
        res.status(200).send('Addresses deleted');
      } else {
        throw new ErrorHandler(500, `Addresses cannot be deleted`);
      }
    } catch (err) {
      next(err);
    }
  }
);

export default usersRouter;
