const connection = require('../db-config');
import IUser from '../interfaces/IUser';
import Joi from 'joi';
import argon2 from 'argon2';
import { ResultSetHeader } from 'mysql2';
import { NextFunction, Request, Response } from 'express';

const hashingOptions: Object = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (password: string) => {
  return argon2.hash(password, hashingOptions);
};

const verifyPassword = (password: string, hashedPassword: string) => {
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
  }).validate(req.body, { abortEarly: false }).error;
  if (errors) {
    res.status(422).json(errors);
  } else {
    next();
  }
};

const getAllUsers = () => {
  return connection
    .promise()
    .query('SELECT * FROM users')
    .then(([results]: Array<IUser>) => results);
};

const getById = (idUser: number) => {
  return connection
    .promise()
    .query('SELECT * FROM users WHERE id_user = ?', [idUser])
    .then(([results]: Array<IUser>) => results);
};

const getByEmail = (email: string) => {
  return connection
    .promise()
    .query('SELECT * FROM users WHERE email = ?', [email])
    .then(([results]: Array<IUser>) => results);
};

const addUser = async (user: IUser) => {
  const hashedPassword = await hashPassword(user.password);
  return connection
    .promise()
    .query(
      'INSERT INTO users (firstname, lastname, email, password ) VALUES (?, ?, ?, ?)',
      [user.firstname, user.lastname, user.email, hashedPassword]
    )
    .then(([results]: Array<ResultSetHeader>) => results.insertId);
};

const updateUser = async (idUser: number, user: IUser) => {
  let sql: string = 'UPDATE users SET ';
  let sqlValues: Array<any> = [];
  let oneValue: boolean = false;

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
  sql += ' WHERE id_user = ?';
  sqlValues.push(idUser);

  return connection
    .promise()
    .query(sql, sqlValues)
    .then(([results]: Array<ResultSetHeader>) => results.affectedRows === 1);
};

const deleteUser = async (idUser: number) => {
  return connection
    .promise()
    .query('DELETE FROM users WHERE id_user = ?', [idUser])
    .then(([results]: Array<ResultSetHeader>) => results.affectedRows === 1);
};

export {
  validateUser,
  getAllUsers,
  addUser,
  getByEmail,
  getById,
  deleteUser,
  updateUser,
};
