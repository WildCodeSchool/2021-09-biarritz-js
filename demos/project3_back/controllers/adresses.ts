import { Request, Response, NextFunction, Router } from 'express';
import {
  getAllAddresses,
  deleteAddress,
  updateAddress,
  validateAddress,
  addressExists,
} from '../models/address';
import IAddress from '../interfaces/IAddress';
import { ErrorHandler } from '../helpers/errors';
import { getCurrentSession, checkSessionPrivileges } from '../helpers/auth';

const addressesRouter = Router();
///////////// ADDRESS ///////////
addressesRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  getAllAddresses()
    .then((addresses: IAddress[]) => {
      res.setHeader(
        'Content-Range',
        `addresses 0-${addresses.length}/${addresses.length + 1}`
      );
      res.status(200).json(addresses);
    })
    .catch((err) => next(err));
});

addressesRouter.delete(
  '/:idAddress',
  getCurrentSession,
  checkSessionPrivileges,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idAddress } = req.params;
      const addressDeleted = await deleteAddress(Number(idAddress));
      if (addressDeleted) {
        res.status(200).send('Address deleted');
      } else {
        throw new ErrorHandler(409, `Address not found`);
      }
    } catch (err: any) {
      next(err);
    }
  }
);

addressesRouter.post(
  '/',
  getCurrentSession,
  validateAddress,
  (req: Request, res: Response, next: NextFunction) => {
    // Faire le post
  }
);

addressesRouter.put(
  '/:idAddress',
  getCurrentSession,
  validateAddress,
  addressExists,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idAddress } = req.params;
      const addressUpdated = await updateAddress(
        Number(idAddress),
        req.body as IAddress
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