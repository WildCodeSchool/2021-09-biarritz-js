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
exports.addressExists = exports.deleteAddressByUser = exports.getByUser = exports.getById = exports.deleteAddress = exports.updateAddress = exports.addAddress = exports.getAllAddresses = exports.validateAddress = void 0;
var db_config_js_1 = __importDefault(require("../db-config.js"));
var joi_1 = __importDefault(require("joi"));
var errors_1 = require("../helpers/errors");
var validateAddress = function (req, res, next) {
    var required = 'optional';
    if (req.method === 'POST') {
        required = 'required';
    }
    var errors = joi_1.default.object({
        address1: joi_1.default.string().max(255).presence(required),
        address2: joi_1.default.string().max(255).presence(required),
        city: joi_1.default.string().max(200).presence(required),
        postalCode: joi_1.default.string().max(10).presence(required),
        idUser: joi_1.default.number().positive().presence(required),
    }).validate(req.body, { abortEarly: false }).error;
    if (errors) {
        next(new errors_1.ErrorHandler(422, errors.message));
    }
    else {
        next();
    }
};
exports.validateAddress = validateAddress;
var addressExists = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var idAddress, addressExists;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                idAddress = req.params.idAddress;
                return [4 /*yield*/, getById(Number(idAddress))];
            case 1:
                addressExists = _a.sent();
                if (!addressExists) {
                    next(new errors_1.ErrorHandler(409, "This address does not exist"));
                }
                else {
                    next();
                }
                return [2 /*return*/];
        }
    });
}); };
exports.addressExists = addressExists;
var getAllAddresses = function () {
    return db_config_js_1.default
        .promise()
        .query('SELECT * FROM addresses')
        .then(function (_a) {
        var results = _a[0];
        return results;
    });
};
exports.getAllAddresses = getAllAddresses;
var getById = function (idAddress) {
    return db_config_js_1.default
        .promise()
        .query('SELECT * FROM addresses WHERE id_address = ?', [
        idAddress,
    ])
        .then(function (_a) {
        var results = _a[0];
        return results[0];
    });
};
exports.getById = getById;
var getByUser = function (idUser) {
    return db_config_js_1.default
        .promise()
        .query('SELECT * FROM addresses WHERE id_user = ?', [idUser])
        .then(function (_a) {
        var results = _a[0];
        return results;
    });
};
exports.getByUser = getByUser;
var addAddress = function (address) {
    return db_config_js_1.default
        .promise()
        .query('INSERT INTO address (address1, address2, postal_code, city, id_user ) VALUES (?, ?, ?, ?, ?)', [
        address.address1,
        address.address2,
        address.postal_code,
        address.city,
        address.id_user,
    ])
        .then(function (_a) {
        var results = _a[0];
        return results.insertId;
    });
};
exports.addAddress = addAddress;
var updateAddress = function (idAddress, address) {
    var sql = 'UPDATE addresses SET ';
    var sqlValues = [];
    var oneValue = false;
    if (address.address1) {
        sql += 'address1 = ? ';
        sqlValues.push(address.address1);
        oneValue = true;
    }
    if (address.address2) {
        sql += oneValue ? ', address2 = ? ' : ' address2 = ? ';
        sqlValues.push(address.address2);
        oneValue = true;
    }
    if (address.postal_code) {
        sql += oneValue ? ', postal_code = ? ' : ' postal_code = ? ';
        sqlValues.push(address.postal_code);
        oneValue = true;
    }
    if (address.city) {
        sql += oneValue ? ', city = ? ' : ' city = ? ';
        sqlValues.push(address.city);
        oneValue = true;
    }
    sql += ' WHERE id_address = ?';
    sqlValues.push(idAddress);
    return db_config_js_1.default
        .promise()
        .query(sql, sqlValues)
        .then(function (_a) {
        var results = _a[0];
        return results.affectedRows === 1;
    });
};
exports.updateAddress = updateAddress;
var deleteAddress = function (idAddress) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, db_config_js_1.default
                .promise()
                .query('DELETE FROM addresses WHERE id_addresses = ?', [
                idAddress,
            ])
                .then(function (_a) {
                var results = _a[0];
                return results.affectedRows === 1;
            })];
    });
}); };
exports.deleteAddress = deleteAddress;
var deleteAddressByUser = function (idUser) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, db_config_js_1.default
                .promise()
                .query('DELETE FROM addresses WHERE id_user = ?', [idUser])
                .then(function (_a) {
                var results = _a[0];
                return results.affectedRows > 1;
            })];
    });
}); };
exports.deleteAddressByUser = deleteAddressByUser;
