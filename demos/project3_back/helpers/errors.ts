import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';

class ErrorHandler extends Error {
  statusCode: number;
  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}
/* eslint-disable @typescript-eslint/no-unused-vars */
const handleError = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // gèrer l'environnement PROD/DEV
  const { statusCode = 500, message } = err;
  // On affiche le message uniquement en environnement de DEV
  if (process.env.NODE_ENV === 'DEV') {
    res.status(statusCode).json({
      status: 'error',
      statusCode,
      message: message,
    });
  } else {
    res.status(statusCode).json({
      status: 'error',
      statusCode,
    });
  }
};
/* eslint-enable @typescript-eslint/no-unused-vars */

export { ErrorHandler, handleError };
