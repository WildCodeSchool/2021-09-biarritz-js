import { Request, Response, NextFunction } from 'express';
const addressesRouter = require('express').Router();
import * as Address from '../models/address';
import IAddress from '../interfaces/IAddress';
import { ErrorHandler } from '../helpers/errors';
import * as Auth from '../helpers/auth';

///////////// ADDRESS ///////////
addressesRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    Address.getAllAddresses().then((addresses: Array<IAddress>) =>
      res.status(200).json(addresses)
    );
  } catch (err) {
    next(err);
  }
});

addressesRouter.delete(
  '/:idAddress',
  Auth.getCurrentSession,
  Auth.checkSessionPrivileges,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idAddress } = req.params;
      const addressDeleted = await Address.deleteAddress(Number(idAddress));
      if (addressDeleted) {
        res.status(200).send('Address deleted');
      } else {
        throw new ErrorHandler(409, `Address not found`);
      }
    } catch (err) {
      next(err);
    }
  }
);

addressesRouter.post(
  '/',
  Auth.getCurrentSession,
  Address.validateAddress,
  (req: Request, res: Response, next: NextFunction) => {
    try {
      Address.getAllAddresses().then((addresses: Array<IAddress>) =>
        res.status(200).json(addresses)
      );
    } catch (err) {
      next(err);
    }
  }
);

addressesRouter.put(
  '/:idAddress',
  Auth.getCurrentSession,
  Address.validateAddress,
  Address.addressExists,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idAddress } = req.params;
      const addressUpdated = await Address.updateAddress(
        Number(idAddress),
        req.body
      );
      if (addressUpdated) {
        res.status(200).send('Address updated');
      } else {
        throw new ErrorHandler(500, `Address cannot be updated`);
      }
    } catch (err) {
      next(err);
    }
  }
);

export default addressesRouter;
