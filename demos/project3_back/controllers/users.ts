import { NextFunction, Request, Response } from 'express';
const usersRouter = require('express').Router();
import * as User from '../models/user';
import * as Address from '../models/address';
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
      User.getById(Number(iduser)).then((users: Array<IUser>) =>
        res.status(200).json(users)
      );
    } catch (err) {
      next(err);
    }
  }
);

usersRouter.post(
  '/',
  User.validateUser,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: IUser = req.body;

      const userExists = await User.getByEmail(user.email);
      if (userExists.length) {
        throw new ErrorHandler(409, `This user already exists`);
      } else {
        const idCreated = await User.addUser(user);
        res.status(201).json({ id_user: idCreated, ...user });
      }
    } catch (err) {
      next(err);
    }
  }
);

usersRouter.put(
  '/:idUser',
  User.validateUser,
  async (req: Request, res: Response, next: NextFunction) => {
    const { idUser } = req.params;
    const user: IUser = req.body;
    const userExists = await User.getById(Number(idUser));
    if (!userExists.length) {
      throw new ErrorHandler(404, `This user does not exist`);
    } else {
      const userUpdated = await User.updateUser(Number(idUser), user);
      if (userUpdated) {
        res.status(200).send('User updated');
      } else {
        throw new ErrorHandler(500, `User cannot be updated`);
      }
    }
  }
);

usersRouter.delete(
  '/:idUser',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idUser } = req.params;
      const userExists = await User.getById(Number(idUser));
      if (!userExists.length) {
        throw new ErrorHandler(404, `This user doesn't exist`);
      } else {
        // Aller supprimer les adresses de l'utilisateur

        const userDeleted = await User.deleteUser(Number(idUser));
        if (userDeleted) {
          res.status(200).send('User deleted');
        } else {
          throw new ErrorHandler(500, `This user cannot be deleted`);
        }
      }
    } catch (err) {
      next(err);
    }
  }
);

////////// ADDRESSES BY USER
usersRouter.get(
  '/:idUser/addresses',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idUser } = req.params;
      const userExists = await User.getById(Number(idUser));
      if (!userExists.length) {
        throw new ErrorHandler(404, `This user does not exist`);
      } else {
        const addresses: Array<IAddress> = await Address.getByUser(
          Number(idUser)
        );
        res.status(200).json(addresses);
      }
    } catch (err) {
      next(err);
    }
  }
);

usersRouter.delete(
  '/:idUser/addresses',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idUser } = req.params;
      const userExists = await User.getById(Number(idUser));
      if (!userExists.length) {
        throw new ErrorHandler(404, `This user does not exist`);
      } else {
        const addressesDeleted = await Address.deleteAddressByUser(
          Number(idUser)
        );
        if (addressesDeleted) {
          res.status(200).send('Addresses deleted');
        } else {
          throw new ErrorHandler(500, `Addresses cannot be deleted`);
        }
      }
    } catch (err) {
      next(err);
    }
  }
);

export default usersRouter;
