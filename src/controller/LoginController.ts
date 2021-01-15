const registerService = require('../service/RegistrationService')
const loginService = require('../service/LoginService')
import { response } from "express";
import {Request,Response} from "express"
var http = require('http');


export const signIn = async(req:Request,res:Response): Promise<Response> => {

    var response = await loginService.signIn(req);
    console.log(response)

    if(response != null){
        res.statusCode = 200;
        return res.json(response);
    }else{
        res.statusCode = 500;
        return res.json("failed to login");

    }
    
}