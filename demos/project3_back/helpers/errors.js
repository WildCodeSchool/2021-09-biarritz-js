"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.ErrorHandler = void 0;
require("dotenv/config");
var ErrorHandler = /** @class */ (function (_super) {
    __extends(ErrorHandler, _super);
    function ErrorHandler(statusCode, message) {
        var _this = _super.call(this) || this;
        _this.statusCode = statusCode;
        _this.message = message;
        return _this;
    }
    return ErrorHandler;
}(Error));
exports.ErrorHandler = ErrorHandler;
/* eslint-disable @typescript-eslint/no-unused-vars */
var handleError = function (err, req, res, next) {
    // gèrer l'environnement PROD/DEV
    var _a = err.statusCode, statusCode = _a === void 0 ? 500 : _a, message = err.message;
    // On affiche le message uniquement en environnement de DEV
    if (process.env.NODE_ENV === 'DEV') {
        res.status(statusCode).json({
            status: 'error',
            statusCode: statusCode,
            message: message,
        });
    }
    else {
        res.status(statusCode).json({
            status: 'error',
            statusCode: statusCode,
        });
    }
};
exports.handleError = handleError;
