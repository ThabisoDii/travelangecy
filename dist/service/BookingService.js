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
exports.bookFlight = exports.getFlights = void 0;
var http = require('http');
var Ticket_1 = require("../entity/Ticket");
var http = require('http');
var Flight_1 = require("../entity/Flight");
var typeorm_1 = require("typeorm");
var getFlights = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var flightRepository, allFlight, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                flightRepository = typeorm_1.getRepository(Flight_1.Flight);
                return [4 /*yield*/, flightRepository.find()];
            case 1:
                allFlight = _a.sent();
                return [2 /*return*/, allFlight];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, error_1];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getFlights = getFlights;
var bookFlight = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ticktRepository, ticket, flight, theTicket, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                ticktRepository = typeorm_1.getRepository(Ticket_1.Ticket);
                ticket = new Ticket_1.Ticket();
                ticket.passanger_email = req.body.passanger_email.toLowerCase();
                ticket.isApproved = req.body.isApproved;
                flight = new Flight_1.Flight();
                flight.id = req.body.flight_id;
                flight.departure_airport = req.body.departure_airport;
                flight.arrival_airport = req.body.arrival_airport;
                flight.departure_time = req.body.departure_time;
                flight.arrival_time = req.body.arrival_time;
                ticket.flight = flight;
                return [4 /*yield*/, ticktRepository.save(ticket)];
            case 1:
                theTicket = _a.sent();
                return [2 /*return*/, ticket];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, error_2];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.bookFlight = bookFlight;
