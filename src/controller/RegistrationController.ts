const registerService = require('../service/RegistrationService')
import { response } from "express";
import {Request,Response} from "express"
var http = require('http');


export const registerUser = async(req:Request,res:Response): Promise<Response> => {

    var response = await registerService.registerUser(req);
    console.log(response)

    if(response != null){
        res.statusCode = 200;
        return res.json(response);
    }else{
        res.statusCode = 500;
        return res.json(registerUser);

    }
    
}