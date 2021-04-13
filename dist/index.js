"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes/routes"));
var typeorm_1 = require("typeorm");
var app = express_1.default();
typeorm_1.createConnection().then(function (connection) {
    console.log("Database connect successfully !!!!");
}).catch(function (error) { return console.log(error); });
app.use(express_1.default.json());
app.use(cors_1.default());
//app.options("*",cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Methods", "Origin,X-Requested, Content-Type,Accept,Authorization,x-access-token");
    next();
});
app.use(routes_1.default);
//db.connectDB();
app.listen(3000, function () { return console.log("Example app listening on port 3000!"); });
