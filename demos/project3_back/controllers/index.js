"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = __importDefault(require("./users"));
var adresses_1 = __importDefault(require("./adresses"));
var auth_1 = __importDefault(require("./auth"));
var setupRoutes = function (app) {
    app.use('/api/users', users_1.default);
    app.use('/api/addresses', adresses_1.default);
    app.use('/api/login', auth_1.default);
};
exports.default = setupRoutes;
