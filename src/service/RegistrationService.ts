var http = require('http');
import { response } from "express";
import {Request,Response} from "express"
import { User } from "../entity/User";
import { Credentials } from "../entity/Credentials";
var http = require('http');
const bcrypt = require("bcrypt")
import { getRepository } from 'typeorm';


export const registerUser = async(req:Request,res:Response): Promise<any> => {


    if(req.body != null){

        try {

            const userRepository = getRepository(User);
            const credentialsRepository = getRepository(Credentials);

            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.passwordd,salt);
            req.body.passwordd = hashPassword;

            let user = new User();
            user.email = req.body.email.toLowerCase();
            user.name = req.body.name;
            user.surname = req.body.surname;
            user.userType = req.body.userType;

            let credentials = new Credentials();
            credentials.email = req.body.email;
            credentials.passwordd = req.body.passwordd;
            credentials.user = user;

            user = await userRepository.save(user);
            credentials = await credentialsRepository.save(credentials);
            return credentials;
          } catch (error) {
              return error;
          }

        
    }else{
        
        return req.body;

    }
    
}
