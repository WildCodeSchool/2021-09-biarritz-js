import { Request, Response, NextFunction } from 'express';
const addressesRouter = require('express').Router();
import * as Address from '../models/address';
import IAddress from '../interfaces/IAddress';
import { ErrorHandler } from '../helpers/errors';

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
  Address.validateAddress,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idAddress } = req.params;
      const address: IAddress = req.body;
      const addressExists = await Address.getById(Number(idAddress));
      if (!addressExists.length) {
        throw new ErrorHandler(409, `This address does not exist`);
      } else {
        const addressUpdated = await Address.updateAddress(
          Number(idAddress),
          address
        );
        if (addressUpdated) {
          res.status(200).send('Address updated');
        } else {
          throw new ErrorHandler(500, `Address cannot be updated`);
        }
      }
    } catch (err) {
      next(err);
    }
  }
);

export default addressesRouter;
