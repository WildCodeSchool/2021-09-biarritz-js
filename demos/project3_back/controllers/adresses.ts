import { Request, Response, NextFunction, Router } from 'express';
import {
  getAllAddresses,
  deleteAddress,
  updateAddress,
  validateAddress,
  addressExists,
  getById,
} from '../models/address';
import IAddress from '../interfaces/IAddress';
import { ErrorHandler } from '../helpers/errors';
import { getCurrentSession, checkSessionPrivileges } from '../helpers/auth';
import { formatSortString } from '../helpers/functions';

const addressesRouter = Router();
///////////// ADDRESS ///////////
addressesRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  const sortBy: string = req.query.sort as string;
  getAllAddresses(formatSortString(sortBy))
    .then((addresses: IAddress[]) => {
      res.setHeader(
        'Content-Range',
        `addresses : 0-${addresses.length}/${addresses.length + 1}`
      );
      res.status(200).json(addresses);
    })
    .catch((err) => next(err));
});

addressesRouter.get(
  '/:idAddress',
  (req: Request, res: Response, next: NextFunction) => {
    const { idAddress } = req.params;
    getById(Number(idAddress))
      .then((address: IAddress) => {
        res.status(200).json(address);
      })
      .catch((err) => next(err));
  }
);

addressesRouter.delete(
  '/:idAddress',
  getCurrentSession,
  checkSessionPrivileges,
  addressExists,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idAddress } = req.params;
      const addressDeleted = await deleteAddress(Number(idAddress));
      if (addressDeleted) {
        res.status(200).send(req.record); // react-admin needs this response
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
  getCurrentSession,
  validateAddress,
  (_req: Request, _res: Response, _next: NextFunction) => {
    // Faire le post
  }
);

addressesRouter.put(
  '/:idAddress',
  getCurrentSession,
  checkSessionPrivileges,
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
        const address = await getById(Number(idAddress));
        res.status(200).send(address); // react-admin needs this response
      } else {
        throw new ErrorHandler(500, `Address cannot be updated`);
      }
    } catch (err) {
      next(err);
    }
  }
);

export default addressesRouter;
