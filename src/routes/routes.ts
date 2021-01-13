import {Router} from "express"
import cors from "cors"
const routes = Router();

import {registerUser} from "../controller/RegistrationController"
//import {signIn} from "../controller/LoginController"


routes.use(cors());
//routes.options("*",cors());
routes.use(function (req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Methods","Origin,X-Requested, Content-Type,Accept,Authorization,x-access-token");
    next();
});

routes.post("/register",registerUser);

export default routes;