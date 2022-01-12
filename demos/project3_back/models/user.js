"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userExists = exports.emailIsFree = exports.updateUser = exports.deleteUser = exports.getById = exports.getByEmail = exports.addUser = exports.getAllUsers = exports.validateLogin = exports.validateUser = exports.verifyPassword = void 0;
var db_config_1 = __importDefault(require("../db-config"));
var joi_1 = __importDefault(require("joi"));
var argon2_1 = __importDefault(require("argon2"));
var errors_1 = require("../helpers/errors");
var hashingOptions = {
    type: argon2_1.default.argon2id,
    memoryCost: Math.pow(2, 16),
    timeCost: 5,
    parallelism: 1,
};
var hashPassword = function (password) {
    return argon2_1.default.hash(password, hashingOptions);
};
var verifyPassword = function (password, hashedPassword) {
    return argon2_1.default.verify(hashedPassword, password, hashingOptions);
};
exports.verifyPassword = verifyPassword;
var validateUser = function (req, res, next) {
    var required = 'optional';
    if (req.method === 'POST') {
        required = 'required';
    }
    var errors = joi_1.default.object({
        firstname: joi_1.default.string().max(100).presence(required),
        lastname: joi_1.default.string().max(100).presence(required),
        email: joi_1.default.string().email().max(255).presence(required),
        password: joi_1.default.string().min(8).max(15).presence(required),
        admin: joi_1.default.boolean().optional(),
    }).validate(req.body, { abortEarly: false }).error;
    if (errors) {
        next(new errors_1.ErrorHandler(422, errors.message));
    }
    else {
        next();
    }
};
exports.validateUser = validateUser;
var validateLogin = function (req, res, next) {
    var errors = joi_1.default.object({
        email: joi_1.default.string().email().max(255).required(),
        password: joi_1.default.string().min(8).max(15).required(),
    }).validate(req.body, { abortEarly: false }).error;
    if (errors) {
        next(new errors_1.ErrorHandler(422, errors.message));
    }
    else {
        next();
    }
};
exports.validateLogin = validateLogin;
var emailIsFree = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, userExists;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = req.body;
                return [4 /*yield*/, getByEmail(user.email)];
            case 1:
                userExists = _a.sent();
                // Si oui => erreur
                if (userExists) {
                    next(new errors_1.ErrorHandler(409, "This user already exists"));
                }
                else {
                    // Si non => next
                    next();
                }
                return [2 /*return*/];
        }
    });
}); };
exports.emailIsFree = emailIsFree;
var userExists = function (req, res, next) {
    // Récupèrer l'id user de req.params
    var idUser = req.params.idUser;
    // Vérifier si le user existe
    getById(Number(idUser))
        .then(function (userExists) {
        // Si non, => erreur
        if (!userExists) {
            next(new errors_1.ErrorHandler(404, "This user doesn't exist"));
        }
        // Si oui => next
        else {
            next();
        }
    })
        .catch(function (err) { return next(err); });
};
exports.userExists = userExists;
var getAllUsers = function () {
    return db_config_1.default
        .promise()
        .query("SELECT users.*, id_user AS id FROM users")
        .then(function (_a) {
        var results = _a[0];
        return results;
    });
};
exports.getAllUsers = getAllUsers;
var getById = function (idUser) {
    return db_config_1.default
        .promise()
        .query('SELECT * FROM users WHERE id_user = ?', [idUser])
        .then(function (_a) {
        var results = _a[0];
        return results[0];
    });
};
exports.getById = getById;
var getByEmail = function (email) {
    return db_config_1.default
        .promise()
        .query('SELECT * FROM users WHERE email = ?', [email])
        .then(function (_a) {
        var results = _a[0];
        return results[0];
    });
};
exports.getByEmail = getByEmail;
var addUser = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var hashedPassword;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, hashPassword(user.password)];
            case 1:
                hashedPassword = _a.sent();
                return [2 /*return*/, db_config_1.default
                        .promise()
                        .query('INSERT INTO users (firstname, lastname, email, password, admin) VALUES (?, ?, ?, ?, ?)', [user.firstname, user.lastname, user.email, hashedPassword, user.admin])
                        .then(function (_a) {
                        var results = _a[0];
                        return results.insertId;
                    })];
        }
    });
}); };
exports.addUser = addUser;
var updateUser = function (idUser, user) { return __awaiter(void 0, void 0, void 0, function () {
    var sql, sqlValues, oneValue, hashedPassword;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sql = 'UPDATE users SET ';
                sqlValues = [];
                oneValue = false;
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
                if (!user.password) return [3 /*break*/, 2];
                sql += oneValue ? ', password = ? ' : ' password = ? ';
                return [4 /*yield*/, hashPassword(user.password)];
            case 1:
                hashedPassword = _a.sent();
                sqlValues.push(hashedPassword);
                oneValue = true;
                _a.label = 2;
            case 2:
                if (user.admin) {
                    sql += oneValue ? ', admin = ? ' : ' admin = ? ';
                    sqlValues.push(user.admin);
                    oneValue = true;
                }
                sql += ' WHERE id_user = ?';
                sqlValues.push(idUser);
                return [2 /*return*/, db_config_1.default
                        .promise()
                        .query(sql, sqlValues)
                        .then(function (_a) {
                        var results = _a[0];
                        return results.affectedRows === 1;
                    })];
        }
    });
}); };
exports.updateUser = updateUser;
var deleteUser = function (idUser) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, db_config_1.default
                .promise()
                .query('DELETE FROM users WHERE id_user = ?', [idUser])
                .then(function (_a) {
                var results = _a[0];
                return results.affectedRows === 1;
            })];
    });
}); };
exports.deleteUser = deleteUser;
