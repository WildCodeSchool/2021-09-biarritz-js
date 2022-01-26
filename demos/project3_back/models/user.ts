import connection from '../db-config';
import IUser from '../interfaces/IUser';
import Joi from 'joi';
import argon2, { Options } from 'argon2';
import { ResultSetHeader } from 'mysql2';
import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../helpers/errors';

const hashingOptions: Options & { raw?: false } = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (password: string): Promise<string> => {
  return argon2.hash(password, hashingOptions);
};

const verifyPassword = (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return argon2.verify(hashedPassword, password, hashingOptions);
};

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  let required: Joi.PresenceMode = 'optional';
  if (req.method === 'POST') {
    required = 'required';
  }
  const errors = Joi.object({
    firstname: Joi.string().max(100).presence(required),
    lastname: Joi.string().max(100).presence(required),
    email: Joi.string().email().max(255).presence(required),
    password: Joi.string().min(8).max(15).presence(required),
    admin: Joi.number().min(0).max(1).optional(),
  }).validate(req.body, { abortEarly: false }).error;
  if (errors) {
    next(new ErrorHandler(422, errors.message));
  } else {
    next();
  }
};

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const errors = Joi.object({
    email: Joi.string().email().max(255).required(),
    password: Joi.string().min(8).max(15).required(),
  }).validate(req.body, { abortEarly: false }).error;
  if (errors) {
    next(new ErrorHandler(422, errors.message));
  } else {
    next();
  }
};

const emailIsFree = async (req: Request, res: Response, next: NextFunction) => {
  // Récupèrer l'email dans le req.body
  const user = req.body as IUser;
  // Vérifier si l'email appartient déjà à un user
  const userExists: IUser = await getByEmail(user.email);
  // Si oui => erreur
  if (userExists) {
    next(new ErrorHandler(409, `This user already exists`));
  } else {
    // Si non => next
    next();
  }
};

const userExists = (req: Request, res: Response, next: NextFunction) => {
  // Récupèrer l'id user de req.params
  const { idUser } = req.params;
  // Vérifier si le user existe
  getById(Number(idUser))
    .then((userExists) => {
      // Si non, => erreur
      if (!userExists) {
        next(new ErrorHandler(404, `This user doesn't exist`));
      }
      // Si oui => next
      else {
        next();
      }
    })
    .catch((err) => next(err));
};

const getAllUsers = (sortBy: string = ''): Promise<IUser[]> => {
  let sql: string = `SELECT users.*, id_user AS id FROM users`;
  if (sortBy) {
    sql += ` ORDER BY ${sortBy}`;
  }
  return connection
    .promise()
    .query<IUser[]>(sql)
    .then(([results]) => results);
};

const getById = (idUser: number): Promise<IUser> => {
  return connection
    .promise()
    .query<IUser[]>(
      'SELECT users.*, id_user AS id FROM users WHERE id_user = ?',
      [idUser]
    )
    .then(([results]) => results[0]);
};

const getByEmail = (email: string): Promise<IUser> => {
  return connection
    .promise()
    .query<IUser[]>('SELECT * FROM users WHERE email = ?', [email])
    .then(([results]) => results[0]);
};

const addUser = async (user: IUser): Promise<number> => {
  const hashedPassword = await hashPassword(user.password);
  return connection
    .promise()
    .query<ResultSetHeader>(
      'INSERT INTO users (firstname, lastname, email, password, admin) VALUES (?, ?, ?, ?, ?)',
      [user.firstname, user.lastname, user.email, hashedPassword, user.admin]
    )
    .then(([results]) => results.insertId);
};

const updateUser = async (idUser: number, user: IUser): Promise<boolean> => {
  let sql = 'UPDATE users SET ';
  const sqlValues: Array<string | number | boolean> = [];
  let oneValue = false;
  console.log(user);
  if (user.firstname) {
    sql += 'firstname = ? ';
    sqlValues.push(user.firstname);
    oneValue = true;
  }
  if (user.lastname) {
    sql += oneValue ? ', lastname = ? ' : ' lastname = ? ';
    sqlValues.push(user.lastname);
    oneValue = true;
  }
  if (user.email) {
    sql += oneValue ? ', email = ? ' : ' email = ? ';
    sqlValues.push(user.email);
    oneValue = true;
  }
  if (user.password) {
    sql += oneValue ? ', password = ? ' : ' password = ? ';
    const hashedPassword: string = await hashPassword(user.password);
    sqlValues.push(hashedPassword);
    oneValue = true;
  }
  if (user.admin != undefined) {
    sql += oneValue ? ', admin = ? ' : ' admin = ? ';
    sqlValues.push(user.admin);
    oneValue = true;
  }
  sql += ' WHERE id_user = ?';
  sqlValues.push(idUser);

  return connection
    .promise()
    .query<ResultSetHeader>(sql, sqlValues)
    .then(([results]) => results.affectedRows === 1);
};

const deleteUser = async (idUser: number): Promise<boolean> => {
  return connection
    .promise()
    .query<ResultSetHeader>('DELETE FROM users WHERE id_user = ?', [idUser])
    .then(([results]) => results.affectedRows === 1);
};

export {
  verifyPassword,
  validateUser,
  validateLogin,
  getAllUsers,
  addUser,
  getByEmail,
  getById,
  deleteUser,
  updateUser,
  emailIsFree,
  userExists,
};
