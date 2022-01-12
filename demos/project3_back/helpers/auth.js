"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSessionPrivileges = exports.getCurrentSession = exports.calculateToken = void 0;
var errors_1 = require("../helpers/errors");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
var calculateToken = function (userEmail, idUser, admin) {
    if (userEmail === void 0) { userEmail = ''; }
    if (idUser === void 0) { idUser = 0; }
    if (admin === void 0) { admin = false; }
    return jsonwebtoken_1.default.sign({ email: userEmail, id: idUser, admin: admin }, process.env.PRIVATE_KEY);
};
exports.calculateToken = calculateToken;
var getCurrentSession = function (req, res, next) {
    var myCookie = req.cookies;
    if (!myCookie.user_token) {
        next(new errors_1.ErrorHandler(401, 'Unauthorized user, please login'));
    }
    else {
        req.userInfo = jsonwebtoken_1.default.verify(myCookie.user_token, process.env.PRIVATE_KEY);
        if (req.userInfo === undefined) {
            next(new errors_1.ErrorHandler(401, 'Unauthorized user, please login'));
        }
        else {
            next();
        }
    }
};
exports.getCurrentSession = getCurrentSession;
var checkSessionPrivileges = function (req, res, next) {
    if (req.userInfo === undefined || !req.userInfo.admin) {
        next(new errors_1.ErrorHandler(401, 'You must be admin to perform this action'));
    }
    else {
        next();
    }
};
exports.checkSessionPrivileges = checkSessionPrivileges;
