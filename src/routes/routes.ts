import {Router} from "express"
import cors from "cors"
const routes = Router();

import {registerUser} from "../controller/RegistrationController"
import {signIn} from "../controller/LoginController"
import {getFlights,bookFlight,searchFlights} from "../controller/BookingController"
import {approveTicket,declineTicket,getApprovalPendingTickets,
addFlight} from "../controller/AdminController"


routes.use(cors());
//routes.options("*",cors());
routes.use(function (req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Methods","Origin,X-Requested, Content-Type,Accept,Authorization,x-access-token");
    next();
});

routes.post("/register",registerUser);///
routes.post("/login",signIn);///

routes.get("/get/flights",getFlights);
routes.post("/search/flights",searchFlights);///
routes.post("/book-flight",bookFlight);///
routes.post("/add-flight",addFlight);///

routes.post("/approve-ticket",approveTicket);/////
routes.post("/decline-ticket",declineTicket);
routes.get("/pending-ticket",getApprovalPendingTickets);


export default routes;