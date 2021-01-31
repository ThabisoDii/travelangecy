"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = __importDefault(require("cors"));
var routes = express_1.Router();
var RegistrationController_1 = require("../controller/RegistrationController");
var LoginController_1 = require("../controller/LoginController");
var BookingController_1 = require("../controller/BookingController");
var AdminController_1 = require("../controller/AdminController");
routes.use(cors_1.default());
//routes.options("*",cors());
routes.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Methods", "Origin,X-Requested, Content-Type,Accept,Authorization,x-access-token");
    next();
});
routes.post("/register", RegistrationController_1.registerUser); ///
routes.post("/login", LoginController_1.signIn); ///
routes.get("/get/flights", BookingController_1.getFlights);
routes.post("/search/flights", BookingController_1.searchFlights); ///
routes.post("/book-flight", BookingController_1.bookFlight); ///
routes.post("/add-flight", AdminController_1.addFlight); ///
routes.post("/approve-ticket", AdminController_1.approveTicket); /////
routes.post("/decline-ticket", AdminController_1.declineTicket);
routes.get("/pending-ticket", AdminController_1.getApprovalPendingTickets);
exports.default = routes;
