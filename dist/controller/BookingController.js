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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPendingApprovalTickets = exports.getUserApprovedTickets = exports.bookFlight = exports.addFlight = exports.searchFlights = exports.getFlights = void 0;
var registerService = require('../service/RegistrationService');
var bookService = require('../service/BookingService');
var http = require('http');
var jwt = require('jsonwebtoken');
var getFlights = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var bearerHeader, bearer, bearerToken, tokenVerification, response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                bearerHeader = req.headers['authorization'];
                if (!(typeof bearerHeader !== 'undefined')) return [3 /*break*/, 5];
                bearer = bearerHeader.split(' ');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                bearerToken = bearer[1];
                tokenVerification = jwt.verify(bearerToken, 'shhhhh');
                return [4 /*yield*/, bookService.getFlights()];
            case 2:
                response = _a.sent();
                if (response != null) {
                    res.statusCode = 200;
                    return [2 /*return*/, res.json(response)];
                }
                else {
                    res.statusCode = 500;
                    return [2 /*return*/, res.json("failed to get flights")];
                }
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                // if token is not valie
                return [2 /*return*/, res.sendStatus(403)];
            case 4: return [3 /*break*/, 6];
            case 5: 
            // Forbidden
            return [2 /*return*/, res.sendStatus(403)];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.getFlights = getFlights;
var searchFlights = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, bookService.searchFlights(req)];
            case 1:
                response = _a.sent();
                if (response != null) {
                    res.statusCode = 200;
                    return [2 /*return*/, res.json(response)];
                }
                else {
                    res.statusCode = 500;
                    return [2 /*return*/, res.json("failed to get flights")];
                }
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                // if token is not valie
                res.statusCode = 500;
                return [2 /*return*/, res.json("something went wrong")];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.searchFlights = searchFlights;
var addFlight = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, bookService.addFlight(req)];
            case 1:
                response = _a.sent();
                if (response != null) {
                    res.statusCode = 200;
                    return [2 /*return*/, res.json(response)];
                }
                else {
                    res.statusCode = 500;
                    return [2 /*return*/, res.json("failed to add flight")];
                }
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                // if token is not valie
                res.statusCode = 500;
                return [2 /*return*/, res.json("something went wrong")];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addFlight = addFlight;
var bookFlight = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var bearerHeader, bearer, bearerToken, tokenVerification, response, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                bearerHeader = req.headers['authorization'];
                if (!(typeof bearerHeader !== 'undefined')) return [3 /*break*/, 5];
                bearer = bearerHeader.split(' ');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                bearerToken = bearer[1];
                tokenVerification = jwt.verify(bearerToken, 'shhhhh');
                return [4 /*yield*/, bookService.bookFlight(req, tokenVerification)];
            case 2:
                response = _a.sent();
                if (response != null) {
                    res.statusCode = 200;
                    return [2 /*return*/, res.json(response)];
                }
                else {
                    res.statusCode = 500;
                    return [2 /*return*/, res.json("failed to book a ticket")];
                }
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                // if token is not valie
                return [2 /*return*/, res.sendStatus(403)];
            case 4: return [3 /*break*/, 6];
            case 5: 
            // Forbidden
            return [2 /*return*/, res.sendStatus(403)];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.bookFlight = bookFlight;
var getUserApprovedTickets = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var bearerHeader, bearer, bearerToken, decoded, response, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                bearerHeader = req.headers['authorization'];
                if (!(typeof bearerHeader !== 'undefined')) return [3 /*break*/, 5];
                bearer = bearerHeader.split(' ');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                bearerToken = bearer[1];
                decoded = jwt.verify(bearerToken, 'shhhhh');
                return [4 /*yield*/, bookService.getUserApprovedTickets(decoded.userDetails)];
            case 2:
                response = _a.sent();
                if (response != null) {
                    res.statusCode = 200;
                    return [2 /*return*/, res.json(response)];
                }
                else {
                    res.statusCode = 500;
                    return [2 /*return*/, res.json("failed to get flights")];
                }
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                // if token is not valie
                return [2 /*return*/, res.sendStatus(403)];
            case 4: return [3 /*break*/, 6];
            case 5: 
            // Forbidden
            return [2 /*return*/, res.sendStatus(403)];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.getUserApprovedTickets = getUserApprovedTickets;
//getUserPendingApprovalTickets
var getUserPendingApprovalTickets = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var bearerHeader, bearer, bearerToken, decoded, response, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                bearerHeader = req.headers['authorization'];
                if (!(typeof bearerHeader !== 'undefined')) return [3 /*break*/, 5];
                bearer = bearerHeader.split(' ');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                bearerToken = bearer[1];
                decoded = jwt.verify(bearerToken, 'shhhhh');
                return [4 /*yield*/, bookService.getUserPendingApprovalTickets(decoded.userDetails)];
            case 2:
                response = _a.sent();
                if (response != null) {
                    res.statusCode = 200;
                    return [2 /*return*/, res.json(response)];
                }
                else {
                    res.statusCode = 500;
                    return [2 /*return*/, res.json("failed to get pending approval tickets")];
                }
                return [3 /*break*/, 4];
            case 3:
                err_6 = _a.sent();
                // if token is not valie
                return [2 /*return*/, res.sendStatus(403)];
            case 4: return [3 /*break*/, 6];
            case 5: 
            // Forbidden
            return [2 /*return*/, res.sendStatus(403)];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.getUserPendingApprovalTickets = getUserPendingApprovalTickets;
